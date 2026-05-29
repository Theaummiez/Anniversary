"use client";

import { useEffect, useRef, useState } from "react";

export function ScrollRose() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    function onScroll() {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        setProgress(maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0);
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="fixed bottom-6 right-4 md:right-8 z-40 pointer-events-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 120 220"
        className="w-16 h-28 sm:w-20 sm:h-36 md:w-24 md:h-44 drop-shadow-[0_0_12px_rgba(255,107,157,0.3)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="stem-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
          <radialGradient id="petal-center" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#fda4af" />
            <stop offset="100%" stopColor="#e11d48" />
          </radialGradient>
          <radialGradient id="petal-outer" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fb7185" />
            <stop offset="100%" stopColor="#be123c" />
          </radialGradient>
          <radialGradient id="petal-deep" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#9f1239" />
          </radialGradient>
        </defs>

        {/* Stem — appears 0-25% */}
        <path
          d="M60 210 Q58 170 60 130 Q62 100 60 80"
          stroke="url(#stem-grad)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          style={{
            strokeDasharray: 140,
            strokeDashoffset: 140 - 140 * Math.min(progress / 0.25, 1),
            transition: "stroke-dashoffset 0.1s ease-out",
          }}
        />

        {/* Left leaf — appears 10-30% */}
        <path
          d="M60 170 Q40 155 35 145 Q38 160 55 168"
          fill="#4ade80"
          style={{
            opacity: clamp01((progress - 0.1) / 0.2),
            transform: `scale(${clamp01((progress - 0.1) / 0.2)})`,
            transformOrigin: "60px 170px",
            transition: "opacity 0.15s, transform 0.15s",
          }}
        />

        {/* Right leaf — appears 15-35% */}
        <path
          d="M60 155 Q80 140 85 130 Q82 145 65 153"
          fill="#22c55e"
          style={{
            opacity: clamp01((progress - 0.15) / 0.2),
            transform: `scale(${clamp01((progress - 0.15) / 0.2)})`,
            transformOrigin: "60px 155px",
            transition: "opacity 0.15s, transform 0.15s",
          }}
        />

        {/* Thorns */}
        <path
          d="M57 185 L52 180 L58 183"
          fill="#16a34a"
          style={{
            opacity: clamp01((progress - 0.12) / 0.1),
            transition: "opacity 0.15s",
          }}
        />
        <path
          d="M63 145 L68 140 L62 143"
          fill="#16a34a"
          style={{
            opacity: clamp01((progress - 0.2) / 0.1),
            transition: "opacity 0.15s",
          }}
        />

        {/* Sepals — appear 25-40% */}
        <path
          d="M50 82 Q55 70 60 78 Q58 72 50 82Z"
          fill="#16a34a"
          style={{
            opacity: clamp01((progress - 0.25) / 0.15),
            transform: `scale(${clamp01((progress - 0.25) / 0.15)})`,
            transformOrigin: "55px 80px",
            transition: "opacity 0.15s, transform 0.15s",
          }}
        />
        <path
          d="M70 82 Q65 70 60 78 Q62 72 70 82Z"
          fill="#15803d"
          style={{
            opacity: clamp01((progress - 0.28) / 0.15),
            transform: `scale(${clamp01((progress - 0.28) / 0.15)})`,
            transformOrigin: "65px 80px",
            transition: "opacity 0.15s, transform 0.15s",
          }}
        />

        {/* Outer petals (layer 1) — appear 35-55% */}
        <path
          d="M60 75 Q35 60 30 40 Q35 55 55 65 Q45 45 42 25 Q50 45 60 55Z"
          fill="url(#petal-deep)"
          style={{
            opacity: clamp01((progress - 0.35) / 0.2),
            transform: `scale(${clamp01((progress - 0.35) / 0.2)})`,
            transformOrigin: "50px 55px",
            transition: "opacity 0.15s, transform 0.15s",
          }}
        />
        <path
          d="M60 75 Q85 60 90 40 Q85 55 65 65 Q75 45 78 25 Q70 45 60 55Z"
          fill="url(#petal-deep)"
          style={{
            opacity: clamp01((progress - 0.38) / 0.2),
            transform: `scale(${clamp01((progress - 0.38) / 0.2)})`,
            transformOrigin: "70px 55px",
            transition: "opacity 0.15s, transform 0.15s",
          }}
        />

        {/* Middle petals (layer 2) — appear 45-65% */}
        <path
          d="M60 70 Q40 55 38 35 Q45 50 55 60 Q48 40 50 22 Q55 42 60 52Z"
          fill="url(#petal-outer)"
          style={{
            opacity: clamp01((progress - 0.45) / 0.2),
            transform: `scale(${clamp01((progress - 0.45) / 0.2)})`,
            transformOrigin: "52px 50px",
            transition: "opacity 0.15s, transform 0.15s",
          }}
        />
        <path
          d="M60 70 Q80 55 82 35 Q75 50 65 60 Q72 40 70 22 Q65 42 60 52Z"
          fill="url(#petal-outer)"
          style={{
            opacity: clamp01((progress - 0.5) / 0.2),
            transform: `scale(${clamp01((progress - 0.5) / 0.2)})`,
            transformOrigin: "68px 50px",
            transition: "opacity 0.15s, transform 0.15s",
          }}
        />
        {/* Top petal */}
        <path
          d="M55 60 Q50 30 60 15 Q70 30 65 60Z"
          fill="url(#petal-outer)"
          style={{
            opacity: clamp01((progress - 0.55) / 0.15),
            transform: `scale(${clamp01((progress - 0.55) / 0.15)})`,
            transformOrigin: "60px 45px",
            transition: "opacity 0.15s, transform 0.15s",
          }}
        />

        {/* Inner petals (layer 3) — appear 60-80% */}
        <path
          d="M56 62 Q48 45 52 30 Q56 44 58 55Z"
          fill="url(#petal-center)"
          style={{
            opacity: clamp01((progress - 0.6) / 0.2),
            transform: `scale(${clamp01((progress - 0.6) / 0.2)})`,
            transformOrigin: "55px 48px",
            transition: "opacity 0.15s, transform 0.15s",
          }}
        />
        <path
          d="M64 62 Q72 45 68 30 Q64 44 62 55Z"
          fill="url(#petal-center)"
          style={{
            opacity: clamp01((progress - 0.65) / 0.2),
            transform: `scale(${clamp01((progress - 0.65) / 0.2)})`,
            transformOrigin: "65px 48px",
            transition: "opacity 0.15s, transform 0.15s",
          }}
        />

        {/* Center bud — appears 75-95% */}
        <ellipse
          cx="60"
          cy="48"
          rx="6"
          ry="8"
          fill="url(#petal-center)"
          style={{
            opacity: clamp01((progress - 0.75) / 0.2),
            transform: `scale(${clamp01((progress - 0.75) / 0.2)})`,
            transformOrigin: "60px 48px",
            transition: "opacity 0.15s, transform 0.15s",
          }}
        />

        {/* Glow at full bloom — appears 90-100% */}
        <circle
          cx="60"
          cy="50"
          r="30"
          fill="none"
          stroke="#fb7185"
          strokeWidth="0.5"
          style={{
            opacity: clamp01((progress - 0.9) / 0.1) * 0.3,
            transition: "opacity 0.2s",
          }}
        />
      </svg>

      {/* Progress label */}
      <p
        className="text-center text-[0.55rem] text-white/30 mt-1 tabular-nums"
        style={{
          opacity: progress > 0.02 ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      >
        {Math.round(progress * 100)}%
      </p>
    </div>
  );
}

function clamp01(value: number): number {
  return Math.max(0, Math.min(1, value));
}
