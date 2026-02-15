import { useCallback, useEffect, useRef } from "react";
import { cn } from "../lib/utils";

const rand = (min: number, max: number) => Math.random() * (max - min) + min;
const randInt = (min: number, max: number) => Math.floor(rand(min, max));

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  decay: number;
  color: string;
  size: number;
}

interface Firework {
  x: number;
  y: number;
  targetY: number;
  vx: number;
  vy: number;
  color: string;
  trail: { x: number; y: number; alpha: number }[];
}

interface FireworksBackgroundProps {
  className?: string;
  colors?: string[];
  autoLaunchInterval?: number;
  particleCount?: number;
  minCanvasWidth?: number;
}

export default function FireworksBackground({
  className,
  colors = [
    "#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93",
    "#f72585", "#4cc9f0", "#80ed99", "#ffd166", "#ef476f",
  ],
  autoLaunchInterval = 800,
  particleCount = 40,
  minCanvasWidth = 1200,
}: FireworksBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const fireworksRef = useRef<Firework[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
  const launchTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const scaleRef = useRef(1);

  const getRandomColor = useCallback(() => {
    return colors[randInt(0, colors.length)] || `hsl(${randInt(0, 360)}, 100%, 60%)`;
  }, [colors]);

  const createExplosion = useCallback(
    (x: number, y: number, color: string) => {
      const scale = scaleRef.current;
      const particles: Particle[] = [];
      const count = Math.floor(particleCount * Math.max(1, scale * 0.8));

      for (let i = 0; i < count; i++) {
        const angle = rand(0, Math.PI * 2);
        const speed = rand(2, 8) * scale;
        particles.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          decay: rand(0.008, 0.018),
          color,
          size: rand(2, 5),
        });
      }
      particlesRef.current.push(...particles);
    },
    [particleCount]
  );

  const launchFirework = useCallback(
    (targetX?: number, targetY?: number) => {
      const container = containerRef.current;
      if (!container) return;

      const width = container.offsetWidth;
      const height = container.offsetHeight;
      const scale = scaleRef.current;

      const x = targetX ?? rand(width * 0.1, width * 0.9);
      const startY = height;
      const endY = targetY ?? rand(height * 0.15, height * 0.45);
      const color = getRandomColor();

      const angle = Math.atan2(endY - startY, x - (targetX ?? x)) - Math.PI / 2;
      const speed = rand(12, 18) * scale;

      fireworksRef.current.push({
        x,
        y: startY,
        targetY: endY,
        vx: Math.cos(angle + Math.PI / 2) * speed * 0.15,
        vy: -speed,
        color,
        trail: [],
      });
    },
    [getRandomColor]
  );

  const scheduleNextLaunch = useCallback(() => {
    if (autoLaunchInterval <= 0) return;
    launchTimeoutRef.current = setTimeout(() => {
      launchFirework();
      scheduleNextLaunch();
    }, rand(autoLaunchInterval * 0.5, autoLaunchInterval * 1.5));
  }, [autoLaunchInterval, launchFirework]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let scale = 1;

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      width = Math.max(rect.width, minCanvasWidth);
      height = rect.height;
      canvas.width = width;
      canvas.height = height;
      scale = Math.min(width, height) / 800;
      scaleRef.current = scale;
    };
    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(container);

    const animate = () => {
      ctx.fillStyle = "rgba(1, 3, 10, 0.15)";
      ctx.fillRect(0, 0, width, height);

      const trailSize = Math.max(2, 3 * scale);
      const headSize = Math.max(3, 5 * scale);
      const gravity = 0.25 * scale;
      const particleGravity = 0.1 * scale;

      for (let i = fireworksRef.current.length - 1; i >= 0; i--) {
        const fw = fireworksRef.current[i];

        fw.trail.push({ x: fw.x, y: fw.y, alpha: 1 });
        if (fw.trail.length > 20) fw.trail.shift();

        fw.x += fw.vx * scale;
        fw.y += fw.vy * scale;
        fw.vy += gravity;

        for (let j = 0; j < fw.trail.length; j++) {
          const point = fw.trail[j];
          const progress = j / fw.trail.length;
          ctx.beginPath();
          ctx.arc(point.x, point.y, trailSize * progress, 0, Math.PI * 2);
          ctx.fillStyle = fw.color;
          ctx.globalAlpha = progress * 0.7;
          ctx.fill();
        }
        ctx.globalAlpha = 1;

        ctx.beginPath();
        ctx.arc(fw.x, fw.y, headSize, 0, Math.PI * 2);
        ctx.fillStyle = fw.color;
        ctx.fill();

        if (fw.vy >= 0 || fw.y <= fw.targetY) {
          createExplosion(fw.x, fw.y, fw.color);
          fireworksRef.current.splice(i, 1);
        }
      }

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];

        p.vy += particleGravity;
        p.vx *= 0.985;
        p.vy *= 0.985;
        p.x += p.vx * scale;
        p.y += p.vy * scale;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    if (autoLaunchInterval > 0) {
      launchFirework();
      scheduleNextLaunch();
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (launchTimeoutRef.current) clearTimeout(launchTimeoutRef.current);
      resizeObserver.disconnect();
    };
  }, [createExplosion, launchFirework, scheduleNextLaunch, autoLaunchInterval, minCanvasWidth]);

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 overflow-hidden", className)}
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-1/2 -translate-x-1/2 h-full"
        style={{ minWidth: `${minCanvasWidth}px` }}
      />
    </div>
  );
}
