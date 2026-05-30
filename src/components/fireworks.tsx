"use client";

import { useEffect, useRef, useState } from "react";

interface Rocket {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  trail: Array<[number, number]>;
  exploded: boolean;
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  radius: number;
  color: string;
  decay: number;
}

const COLORS = ["#f97316", "#fb7185", "#60a5fa", "#fde68a", "#a78bfa", "#34d399"];

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function createRocket(canvasWidth: number, canvasHeight: number): Rocket {
  return {
    x: random(canvasWidth * 0.15, canvasWidth * 0.85),
    y: canvasHeight + 10,
    vx: random(-0.6, 0.6),
    vy: random(-7.2, -5.8),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    trail: [],
    exploded: false,
  };
}

function createSpark(x: number, y: number, color: string): Spark {
  const angle = random(0, Math.PI * 2);
  const speed = random(1.5, 5);
  return {
    x,
    y,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    alpha: 1,
    radius: random(1, 2.5),
    color,
    decay: random(0.015, 0.025),
  };
}

export function Fireworks() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    let animationId = 0;
    let spawnInterval: number | undefined;
    let rockets: Rocket[] = [];
    let sparks: Spark[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    function explodeRocket(rocket: Rocket) {
      rocket.exploded = true;
      for (let i = 0; i < 34; i += 1) {
        sparks.push(createSpark(rocket.x, rocket.y, rocket.color));
      }
    }

    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(0,0,0,0.18)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      rockets = rockets.filter((rocket) => !rocket.exploded);
      for (const rocket of rockets) {
        rocket.trail.unshift([rocket.x, rocket.y]);
        if (rocket.trail.length > 7) {
          rocket.trail.pop();
        }
        rocket.x += rocket.vx;
        rocket.y += rocket.vy;
        rocket.vy += 0.12;

        if (rocket.vy >= 0 || rocket.y < canvas.height * 0.35) {
          explodeRocket(rocket);
        } else {
          ctx.beginPath();
          ctx.strokeStyle = rocket.color;
          ctx.lineWidth = 2;
          for (let i = 0; i < rocket.trail.length - 1; i += 1) {
            const [x1, y1] = rocket.trail[i];
            const [x2, y2] = rocket.trail[i + 1];
            ctx.globalAlpha = (1 - i / rocket.trail.length) * 0.35;
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
          }
          ctx.stroke();
          ctx.globalAlpha = 1;
          ctx.beginPath();
          ctx.arc(rocket.x, rocket.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = rocket.color;
          ctx.fill();
        }
      }

      sparks = sparks.filter((spark) => spark.alpha > 0);
      for (const spark of sparks) {
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.vy += 0.03;
        spark.alpha -= spark.decay;

        if (spark.alpha > 0) {
          ctx.beginPath();
          ctx.globalAlpha = spark.alpha;
          ctx.fillStyle = spark.color;
          ctx.arc(spark.x, spark.y, spark.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      }

      animationId = requestAnimationFrame(update);
    }

    if (active) {
      rockets = [];
      sparks = [];
      animationId = requestAnimationFrame(update);
      spawnInterval = window.setInterval(() => {
        for (let i = 0; i < 2; i += 1) {
          rockets.push(createRocket(canvas.width, canvas.height));
        }
      }, 450);

      const stop = window.setTimeout(() => {
        if (spawnInterval) window.clearInterval(spawnInterval);
        spawnInterval = undefined;
        setTimeout(() => setActive(false), 1800);
      }, 5200);

      return () => {
        if (spawnInterval) window.clearInterval(spawnInterval);
        window.clearTimeout(stop);
        cancelAnimationFrame(animationId);
        window.removeEventListener("resize", resize);
      };
    }

    return () => {
      cancelAnimationFrame(animationId);
      if (spawnInterval) window.clearInterval(spawnInterval);
      window.removeEventListener("resize", resize);
    };
  }, [active]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (
            entry.isIntersecting &&
            !triggered.current &&
            entry.intersectionRatio > 0.15
          ) {
            triggered.current = true;
            setActive(true);
          }
        }
      },
      {
        root: null,
        threshold: 0.15,
      },
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="h-1 w-full" />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[60]"
      />
    </>
  );
}
