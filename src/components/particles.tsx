"use client";

import { useEffect, useRef } from "react";
import { PARTICLE_EMOJIS } from "@/lib/constants";

interface Particle {
  x: number;
  y: number;
  size: number;
  vy: number;
  vx: number;
  alpha: number;
  emoji: string;
  rot: number;
  drot: number;
}

function createParticle(
  canvasWidth: number,
  canvasHeight: number,
  randomY: boolean,
): Particle {
  return {
    x: Math.random() * canvasWidth,
    y: randomY ? Math.random() * canvasHeight : canvasHeight + 20,
    size: Math.random() * 14 + 8,
    vy: -(Math.random() * 0.7 + 0.25),
    vx: (Math.random() - 0.5) * 0.4,
    alpha: Math.random() * 0.45 + 0.15,
    emoji: PARTICLE_EMOJIS[Math.floor(Math.random() * PARTICLE_EMOJIS.length)],
    rot: Math.random() * Math.PI * 2,
    drot: (Math.random() - 0.5) * 0.015,
  };
}

export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const canvasElement = canvas;
    let animationId: number;

    function resize() {
      canvasElement.width = window.innerWidth;
      canvasElement.height = window.innerHeight;
    }
    resize();

    const particles: Particle[] = Array.from({ length: 35 }, () =>
      createParticle(canvasElement.width, canvasElement.height, true),
    );

    const spawnInterval = setInterval(() => {
      if (particles.length < 45) {
        particles.push(createParticle(canvas!.width, canvas!.height, false));
      }
    }, 600);

    function loop() {
      ctx!.clearRect(0, 0, canvasElement.width, canvasElement.height);

      for (const p of particles) {
        p.y += p.vy;
        p.x += p.vx;
        p.rot += p.drot;

        if (p.y < -20) {
          Object.assign(
            p,
            createParticle(canvasElement.width, canvasElement.height, false),
          );
        }

        ctx!.save();
        ctx!.globalAlpha = p.alpha;
        ctx!.translate(p.x, p.y);
        ctx!.rotate(p.rot);
        ctx!.font = `${p.size}px serif`;
        ctx!.textAlign = "center";
        ctx!.textBaseline = "middle";
        ctx!.fillText(p.emoji, 0, 0);
        ctx!.restore();
      }

      animationId = requestAnimationFrame(loop);
    }

    loop();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(spawnInterval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
