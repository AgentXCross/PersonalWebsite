import { useEffect, useRef } from "react";

interface SwirlingParticlesProps {
  particleCount?: number;
  baseHue?: number;
  rangeHue?: number;
  backgroundColor?: string;
}

const HALF_PI = Math.PI * 0.5;
const rand = (n: number) => Math.random() * n;
const fadeInOut = (life: number, ttl: number) => {
  const halfTTL = ttl * 0.5;
  return life < halfTTL ? life / halfTTL : 1 - (life - halfTTL) / halfTTL;
};
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const angle = (x1: number, y1: number, x2: number, y2: number) =>
  Math.atan2(y2 - y1, x2 - x1);

export default function SwirlingParticles({
  particleCount = 500,
  baseHue = 220,
  rangeHue = 40,
  backgroundColor = "hsla(60,50%,3%,1)",
}: SwirlingParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particlePropCount = 9;
    const particlePropsLength = particleCount * particlePropCount;
    const baseTTL = 100;
    const rangeTTL = 500;
    const baseSpeed = 0.1;
    const rangeSpeed = 1;
    const baseSize = 2;
    const rangeSize = 10;

    const canvasA = document.createElement("canvas");
    const canvasB = document.createElement("canvas");
    canvasB.style.cssText =
      "position:absolute;top:0;left:0;width:100%;height:100%;";
    container.appendChild(canvasB);

    const ctxA = canvasA.getContext("2d")!;
    const ctxB = canvasB.getContext("2d")!;
    const center = [0, 0];

    let particleProps = new Float32Array(particlePropsLength);
    let tick = 0;
    let animationId: number;

    function resize() {
      const { clientWidth: w, clientHeight: h } = container!;
      canvasA.width = w;
      canvasA.height = h;
      ctxA.drawImage(canvasB, 0, 0);
      canvasB.width = w;
      canvasB.height = h;
      ctxB.drawImage(canvasA, 0, 0);
      center[0] = w * 0.5;
      center[1] = h * 0.5;
    }

    function initParticle(i: number) {
      const x = rand(canvasA.width);
      const y = rand(canvasA.height);
      const theta = angle(x, y, center[0], center[1]);
      const vx = Math.cos(theta) * 6;
      const vy = Math.sin(theta) * 6;
      const life = 0;
      const ttl = baseTTL + rand(rangeTTL);
      const speed = baseSpeed + rand(rangeSpeed);
      const size = baseSize + rand(rangeSize);
      const hue = baseHue + rand(rangeHue);
      particleProps.set([x, y, vx, vy, life, ttl, speed, size, hue], i);
    }

    function initParticles() {
      tick = 0;
      particleProps = new Float32Array(particlePropsLength);
      for (let i = 0; i < particlePropsLength; i += particlePropCount) {
        initParticle(i);
      }
    }

    function drawParticle(
      x: number,
      y: number,
      theta: number,
      life: number,
      ttl: number,
      size: number,
      hue: number
    ) {
      const xRel = x - 0.5 * size;
      const yRel = y - 0.5 * size;
      ctxA.save();
      ctxA.lineCap = "round";
      ctxA.lineWidth = 1;
      ctxA.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
      ctxA.beginPath();
      ctxA.translate(xRel, yRel);
      ctxA.rotate(theta);
      ctxA.translate(-xRel, -yRel);
      ctxA.strokeRect(xRel, yRel, size, size);
      ctxA.closePath();
      ctxA.restore();
    }

    function updateParticle(i: number) {
      const i2 = 1 + i,
        i3 = 2 + i,
        i4 = 3 + i,
        i5 = 4 + i,
        i6 = 5 + i,
        i7 = 6 + i,
        i8 = 7 + i,
        i9 = 8 + i;

      const x = particleProps[i];
      const y = particleProps[i2];
      const theta =
        angle(x, y, center[0], center[1]) + 0.75 * HALF_PI;
      const vx = lerp(particleProps[i3], 2 * Math.cos(theta), 0.05);
      const vy = lerp(particleProps[i4], 2 * Math.sin(theta), 0.05);
      let life = particleProps[i5];
      const ttl = particleProps[i6];
      const speed = particleProps[i7];
      const size = particleProps[i8];
      const hue = particleProps[i9];

      drawParticle(x, y, theta, life, ttl, size, hue);

      life++;

      particleProps[i] = x + vx * speed;
      particleProps[i2] = y + vy * speed;
      particleProps[i3] = vx;
      particleProps[i4] = vy;
      particleProps[i5] = life;

      if (life > ttl) initParticle(i);
    }

    function drawParticles() {
      for (let i = 0; i < particlePropsLength; i += particlePropCount) {
        updateParticle(i);
      }
    }

    function renderGlow() {
      ctxB.save();
      ctxB.filter = "blur(8px) brightness(200%)";
      ctxB.globalCompositeOperation = "lighter";
      ctxB.drawImage(canvasA, 0, 0);
      ctxB.restore();

      ctxB.save();
      ctxB.filter = "blur(4px) brightness(200%)";
      ctxB.globalCompositeOperation = "lighter";
      ctxB.drawImage(canvasA, 0, 0);
      ctxB.restore();
    }

    function render() {
      ctxB.save();
      ctxB.globalCompositeOperation = "lighter";
      ctxB.drawImage(canvasA, 0, 0);
      ctxB.restore();
    }

    function draw() {
      tick++;
      ctxA.clearRect(0, 0, canvasA.width, canvasA.height);
      ctxB.fillStyle = backgroundColor;
      ctxB.fillRect(0, 0, canvasB.width, canvasB.height);
      drawParticles();
      renderGlow();
      render();
      animationId = requestAnimationFrame(draw);
    }

    resize();
    initParticles();
    animationId = requestAnimationFrame(draw);

    const ro = new ResizeObserver(resize);
    ro.observe(container);

    return () => {
      cancelAnimationFrame(animationId);
      ro.disconnect();
      canvasB.remove();
    };
  }, [particleCount, baseHue, rangeHue, backgroundColor]);

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden" />;
}
