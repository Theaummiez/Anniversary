"use client";

import { useEffect, useRef, useState } from "react";

const ROSE_EMOJIS = ["🌹", "🥀", "🌺", "🏵️"];
const PETAL_COUNT = 22;

interface Rose {
  x: number;
  yPercent: number;
  size: number;
  alpha: number;
  emoji: string;
  rot: number;
  parallaxSpeed: number;
  driftAmplitude: number;
  driftPhase: number;
}

function createRose(): Rose {
  const depth = Math.random();
  return {
    x: Math.random() * 100,
    yPercent: Math.random() * 100,
    size: 18 + depth * 22,
    alpha: 0.12 + depth * 0.16,
    emoji: ROSE_EMOJIS[Math.floor(Math.random() * ROSE_EMOJIS.length)],
    rot: Math.random() * 360,
    parallaxSpeed: 0.1 + depth * 0.35,
    driftAmplitude: 10 + Math.random() * 25,
    driftPhase: Math.random() * Math.PI * 2,
  };
}

export function FloatingRoses() {
  const [roses] = useState<Rose[]>(() =>
    Array.from({ length: PETAL_COUNT }, createRose),
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = Array.from(container.children) as HTMLElement[];
    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        for (let i = 0; i < roses.length; i++) {
          const r = roses[i];
          const el = elements[i];
          if (!el) continue;
          const offsetY = scrollY * r.parallaxSpeed;
          const driftX =
            Math.sin(scrollY * 0.0015 + r.driftPhase) * r.driftAmplitude;
          const rotation = r.rot + scrollY * r.parallaxSpeed * 0.06;
          el.style.transform = `translate3d(${driftX}px, ${-offsetY}px, 0) rotate(${rotation}deg)`;
        }
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [roses]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 w-full pointer-events-none z-[1] overflow-hidden"
      style={{ height: "100%" }}
    >
      {roses.map((r, i) => (
        <span
          key={i}
          className="absolute will-change-transform"
          style={{
            left: `${r.x}%`,
            top: `${r.yPercent}%`,
            fontSize: `${r.size}px`,
            opacity: r.alpha,
          }}
        >
          {r.emoji}
        </span>
      ))}
    </div>
  );
}
