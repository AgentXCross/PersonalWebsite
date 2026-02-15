import { useEffect, useRef } from "react";
import { cn } from "../lib/utils";

interface Firefly {
  x: number;
  y: number;
  size: number;
  phase: number;
  pulseSpeed: number;
  noiseOffsetX: number;
  noiseOffsetY: number;
  noiseSpeed: number;
  depth: number;
}

interface FirefliesBackgroundProps {
  className?: string;
  count?: number;
  color?: string;
  speed?: number;
  glowIntensity?: number;
  /** Fixed canvas width so narrower screens just crop instead of reducing density */
  minCanvasWidth?: number;
}

export default function FirefliesBackground({
  className,
  count = 40,
  color = "rgb(204, 255, 0)",
  speed = 1,
  glowIntensity = 1,
  minCanvasWidth = 1200,
}: FirefliesBackgroundProps) {
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

    const noise = (x: number, y: number, t: number) => {
      return (
        Math.sin(x * 0.01 + t) * 0.5 +
        Math.sin(y * 0.013 + t * 1.1) * 0.5 +
        Math.sin((x + y) * 0.007 + t * 0.9) * 0.3
      );
    };

    const createFirefly = (): Firefly => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 2 + Math.random() * 2,
      phase: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.03,
      noiseOffsetX: Math.random() * 1000,
      noiseOffsetY: Math.random() * 1000,
      noiseSpeed: 0.3 + Math.random() * 0.4,
      depth: 0.3 + Math.random() * 0.7,
    });

    const fireflies: Firefly[] = Array.from({ length: count }, createFirefly);

    const parseColor = (c: string) => {
      const match = c.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) {
        return {
          r: Number.parseInt(match[1]),
          g: Number.parseInt(match[2]),
          b: Number.parseInt(match[3]),
        };
      }
      return { r: 255, g: 255, b: 150 };
    };

    const rgb = parseColor(color);

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      width = Math.max(rect.width, minCanvasWidth);
      height = rect.height;
      canvas.width = width;
      canvas.height = height;
    };

    const ro = new ResizeObserver(handleResize);
    ro.observe(container);

    const animate = () => {
      tick += speed;

      ctx.fillStyle = "rgba(1, 3, 10, 0.15)";
      ctx.fillRect(0, 0, width, height);

      for (const firefly of fireflies) {
        const noiseX = noise(
          firefly.noiseOffsetX,
          firefly.noiseOffsetY,
          tick * 0.01 * firefly.noiseSpeed
        );
        const noiseY = noise(
          firefly.noiseOffsetY,
          firefly.noiseOffsetX,
          tick * 0.01 * firefly.noiseSpeed + 100
        );

        firefly.x += noiseX * firefly.depth * speed * 0.5;
        firefly.y += noiseY * firefly.depth * speed * 0.5;

        if (firefly.x < -20) firefly.x = width + 20;
        if (firefly.x > width + 20) firefly.x = -20;
        if (firefly.y < -20) firefly.y = height + 20;
        if (firefly.y > height + 20) firefly.y = -20;

        const pulse = Math.sin(tick * firefly.pulseSpeed * speed + firefly.phase);
        const brightness = Math.max(0, pulse * 1.5 - 0.3);

        if (brightness <= 0) continue;

        const currentSize = firefly.size * firefly.depth * (0.8 + brightness * 0.2);
        const alpha = brightness * firefly.depth;

        const glowRadius = currentSize * (4 + brightness * 4) * glowIntensity;
        const gradient = ctx.createRadialGradient(
          firefly.x, firefly.y, 0,
          firefly.x, firefly.y, glowRadius
        );

        gradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha * 0.9})`);
        gradient.addColorStop(0.1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha * 0.6})`);
        gradient.addColorStop(0.4, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha * 0.2})`);
        gradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(firefly.x, firefly.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
        ctx.beginPath();
        ctx.arc(firefly.x, firefly.y, currentSize * 0.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(firefly.x, firefly.y, currentSize, 0, Math.PI * 2);
        ctx.fill();
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
  }, [count, color, speed, glowIntensity, minCanvasWidth]);

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
