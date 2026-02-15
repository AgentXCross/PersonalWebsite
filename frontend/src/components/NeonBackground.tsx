import { useEffect, useRef } from "react";
import { cn } from "../lib/utils";

interface NeonRing {
  x: number;
  y: number;
  radius: number;
  color: string;
  orbitRadius: number;
  orbitSpeed: number;
  orbitOffset: number;
  pulseOffset: number;
  pulseSpeed: number;
  lineWidth: number;
}

interface NeonBackgroundProps {
  className?: string;
  colors?: string[];
  count?: number;
  intensity?: number;
  speed?: number;
  minCanvasWidth?: number;
}

export default function NeonBackground({
  className,
  colors = ["#00ffff", "#ff00ff", "#8b5cf6", "#00ff88", "#ff6b6b"],
  count = 6,
  intensity = 1,
  speed = 1,
  minCanvasWidth = 1200,
}: NeonBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = container.getBoundingClientRect();
    let width = Math.max(rect.width, minCanvasWidth);
    let height = rect.height;
    canvas.width = width;
    canvas.height = height;

    let animationId: number;
    let tick = 0;

    const createRings = (): NeonRing[] => {
      const rings: NeonRing[] = [];
      const cx = width / 2;
      const cy = height / 2;
      const minDim = Math.min(width, height);
      const scale = minDim / 800;

      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const distanceFromCenter = (100 + (i % 3) * 80) * scale;

        rings.push({
          x: cx + Math.cos(angle) * distanceFromCenter,
          y: cy + Math.sin(angle) * distanceFromCenter,
          radius: (40 + (i % 4) * 25) * scale,
          color: colors[i % colors.length],
          orbitRadius: (30 + i * 15) * scale,
          orbitSpeed: (0.0003 + i * 0.0001) * (i % 2 === 0 ? 1 : -1),
          orbitOffset: angle,
          pulseOffset: (i / count) * Math.PI * 2,
          pulseSpeed: 0.015 + (i % 3) * 0.005,
          lineWidth: Math.max(1.5, (2 + (i % 3)) * scale),
        });
      }

      return rings;
    };

    let rings = createRings();

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      width = Math.max(rect.width, minCanvasWidth);
      height = rect.height;
      canvas.width = width;
      canvas.height = height;
      rings = createRings();
    };

    const ro = new ResizeObserver(handleResize);
    ro.observe(container);

    const drawRing = (ring: NeonRing, x: number, y: number, scale: number) => {
      const radius = ring.radius * scale;

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.strokeStyle = ring.color;
      ctx.lineWidth = ring.lineWidth * 12 * intensity;
      ctx.globalAlpha = 0.1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.lineWidth = ring.lineWidth * 5 * intensity;
      ctx.globalAlpha = 0.3;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.lineWidth = ring.lineWidth * 2;
      ctx.globalAlpha = 0.8;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = ring.lineWidth * 0.8;
      ctx.globalAlpha = 0.6;
      ctx.stroke();

      ctx.globalAlpha = 1;
    };

    const animate = () => {
      tick += speed;

      ctx.fillStyle = "rgba(1, 3, 10, 0.15)";
      ctx.fillRect(0, 0, width, height);

      for (const ring of rings) {
        const orbitAngle = tick * ring.orbitSpeed + ring.orbitOffset;
        const x = ring.x + Math.cos(orbitAngle) * ring.orbitRadius;
        const y = ring.y + Math.sin(orbitAngle) * ring.orbitRadius;

        const pulse = 0.9 + Math.sin(tick * ring.pulseSpeed + ring.pulseOffset) * 0.1;

        drawRing(ring, x, y, pulse);
      }

      animationId = requestAnimationFrame(animate);
    };

    ctx.fillStyle = "#01030a";
    ctx.fillRect(0, 0, width, height);

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      ro.disconnect();
    };
  }, [colors, count, intensity, speed, minCanvasWidth]);

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
