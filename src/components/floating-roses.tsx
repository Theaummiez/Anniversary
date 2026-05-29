"use client";

import { useEffect, useRef, useState } from "react";
import { RosePetal } from "@/components/rose-petal";

const PETAL_COUNT = 24;

interface Petal {
  x: number;
  yPercent: number;
  size: number;
  alpha: number;
  variant: number;
  hue: number;
  rot: number;
  parallaxSpeed: number;
  driftAmplitude: number;
  driftPhase: number;
}

function createPetal(): Petal {
  const depth = Math.random();
  return {
    x: Math.random() * 100,
    yPercent: Math.random() * 100,
    size: 32 + depth * 36,
    alpha: 0.35 + depth * 0.35,
    variant: Math.floor(Math.random() * 4),
    hue: 340 + Math.random() * 30,
    rot: Math.random() * 360,
    parallaxSpeed: 0.1 + depth * 0.35,
    driftAmplitude: 10 + Math.random() * 25,
    driftPhase: Math.random() * Math.PI * 2,
  };
}

export function FloatingRoses() {
  const [petals] = useState<Petal[]>(() =>
    Array.from({ length: PETAL_COUNT }, createPetal),
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
        for (let i = 0; i < petals.length; i++) {
          const p = petals[i];
          const el = elements[i];
          if (!el) continue;
          const offsetY = scrollY * p.parallaxSpeed;
          const driftX =
            Math.sin(scrollY * 0.0015 + p.driftPhase) * p.driftAmplitude;
          const rotation = p.rot + scrollY * p.parallaxSpeed * 0.06;
          el.style.transform = `translate3d(${driftX}px, ${-offsetY}px, 0) rotate(${rotation}deg)`;
        }
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [petals]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 w-full pointer-events-none z-[1] overflow-hidden"
      style={{ height: "100%" }}
    >
      {petals.map((p, i) => (
        <div
          key={i}
          className="absolute will-change-transform"
          style={{
            left: `${p.x}%`,
            top: `${p.yPercent}%`,
            opacity: p.alpha,
          }}
        >
          <RosePetal size={p.size} variant={p.variant} hue={p.hue} id={i} />
        </div>
      ))}
    </div>
  );
}
