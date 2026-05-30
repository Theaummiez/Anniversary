"use client";

import { useEffect, useRef, useState } from "react";

function c(progress: number, start: number, range: number): number {
  return Math.max(0, Math.min(1, (progress - start) / range));
}

function petalStyle(progress: number, start: number, range: number, ox: number, oy: number) {
  const t = c(progress, start, range);
  return {
    opacity: t,
    transform: `scale(${t})`,
    transformOrigin: `${ox}px ${oy}px`,
    transition: "opacity 0.12s, transform 0.12s",
  } as const;
}

function Rose({
  progress,
  side,
}: {
  progress: number;
  side: "left" | "right";
}) {
  const idSuffix = side;
  const transform = side === "left" ? "scaleX(-1)" : "none";
  const positionClass = side === "left" ? "left-4 md:left-8" : "right-4 md:right-8";

  return (
    <div
      className={`fixed bottom-6 ${positionClass} z-40 pointer-events-none`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 120 220"
        className="w-[4.5rem] h-[7.75rem] sm:w-[5.5rem] sm:h-[10rem] md:w-[6.75rem] md:h-[12.25rem] drop-shadow-[0_0_14px_rgba(255,107,157,0.35)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform }}
      >
        <defs>
          <linearGradient id={`sg-${idSuffix}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
          <radialGradient id={`pc-${idSuffix}`} cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#fda4af" />
            <stop offset="100%" stopColor="#e11d48" />
          </radialGradient>
          <radialGradient id={`po-${idSuffix}`} cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fb7185" />
            <stop offset="100%" stopColor="#be123c" />
          </radialGradient>
          <radialGradient id={`pd-${idSuffix}`} cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#9f1239" />
          </radialGradient>
          <radialGradient id={`pp-${idSuffix}`} cx="45%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#fecdd3" />
            <stop offset="100%" stopColor="#f43f5e" />
          </radialGradient>
        </defs>

        <path
          d="M60 210 Q58 170 60 130 Q62 100 60 80"
          stroke={`url(#sg-${idSuffix})`}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          style={{
            strokeDasharray: 140,
            strokeDashoffset: 140 - 140 * c(progress, 0, 0.25),
            transition: "stroke-dashoffset 0.1s ease-out",
          }}
        />

        <path d="M60 170 Q40 155 35 145 Q38 160 55 168" fill="#4ade80"
          style={petalStyle(progress, 0.1, 0.2, 60, 170)} />
        <path d="M60 155 Q80 140 85 130 Q82 145 65 153" fill="#22c55e"
          style={petalStyle(progress, 0.15, 0.2, 60, 155)} />
        <path d="M60 135 Q42 122 38 112 Q41 126 56 133" fill="#4ade80"
          style={petalStyle(progress, 0.18, 0.17, 60, 135)} />

        <path d="M57 185 L52 180 L58 183" fill="#16a34a"
          style={{ opacity: c(progress, 0.12, 0.1), transition: "opacity 0.15s" }} />
        <path d="M63 145 L68 140 L62 143" fill="#16a34a"
          style={{ opacity: c(progress, 0.2, 0.1), transition: "opacity 0.15s" }} />

        <path d="M48 83 Q54 68 60 78 Q57 70 48 83Z" fill="#16a34a"
          style={petalStyle(progress, 0.25, 0.15, 54, 80)} />
        <path d="M72 83 Q66 68 60 78 Q63 70 72 83Z" fill="#15803d"
          style={petalStyle(progress, 0.28, 0.15, 66, 80)} />
        <path d="M60 85 Q56 72 60 65 Q64 72 60 85Z" fill="#16a34a"
          style={petalStyle(progress, 0.3, 0.12, 60, 78)} />

        <path d="M60 78 Q30 62 25 38 Q32 55 52 67 Q40 42 38 20 Q48 42 60 58Z"
          fill={`url(#pd-${idSuffix})`} style={petalStyle(progress, 0.32, 0.18, 45, 55)} />
        <path d="M60 78 Q90 62 95 38 Q88 55 68 67 Q80 42 82 20 Q72 42 60 58Z"
          fill={`url(#pd-${idSuffix})`} style={petalStyle(progress, 0.35, 0.18, 75, 55)} />
        <path d="M55 76 Q28 72 22 52 Q30 65 50 72Z"
          fill={`url(#pd-${idSuffix})`} style={petalStyle(progress, 0.37, 0.16, 40, 68)} />
        <path d="M65 76 Q92 72 98 52 Q90 65 70 72Z"
          fill={`url(#pd-${idSuffix})`} style={petalStyle(progress, 0.39, 0.16, 80, 68)} />

        <path d="M60 72 Q38 55 36 32 Q44 50 55 62 Q46 38 48 18 Q54 40 60 54Z"
          fill={`url(#po-${idSuffix})`} style={petalStyle(progress, 0.42, 0.18, 50, 50)} />
        <path d="M60 72 Q82 55 84 32 Q76 50 65 62 Q74 38 72 18 Q66 40 60 54Z"
          fill={`url(#po-${idSuffix})`} style={petalStyle(progress, 0.45, 0.18, 70, 50)} />
        <path d="M54 68 Q32 58 28 40 Q35 52 50 62Z"
          fill={`url(#po-${idSuffix})`} style={petalStyle(progress, 0.48, 0.14, 42, 56)} />
        <path d="M66 68 Q88 58 92 40 Q85 52 70 62Z"
          fill={`url(#po-${idSuffix})`} style={petalStyle(progress, 0.5, 0.14, 78, 56)} />
        <path d="M54 62 Q48 28 60 12 Q72 28 66 62Z"
          fill={`url(#po-${idSuffix})`} style={petalStyle(progress, 0.52, 0.14, 60, 42)} />

        <path d="M57 64 Q44 48 46 30 Q52 44 58 56Z"
          fill={`url(#pp-${idSuffix})`} style={petalStyle(progress, 0.56, 0.18, 52, 48)} />
        <path d="M63 64 Q76 48 74 30 Q68 44 62 56Z"
          fill={`url(#pp-${idSuffix})`} style={petalStyle(progress, 0.59, 0.18, 68, 48)} />
        <path d="M55 60 Q46 50 48 38 Q52 48 56 55Z"
          fill={`url(#pc-${idSuffix})`} style={petalStyle(progress, 0.62, 0.14, 52, 50)} />
        <path d="M65 60 Q74 50 72 38 Q68 48 64 55Z"
          fill={`url(#pc-${idSuffix})`} style={petalStyle(progress, 0.65, 0.14, 68, 50)} />
        <path d="M57 56 Q54 38 60 28 Q66 38 63 56Z"
          fill={`url(#pc-${idSuffix})`} style={petalStyle(progress, 0.68, 0.12, 60, 44)} />

        <path d="M58 55 Q52 44 55 35 Q58 43 59 50Z"
          fill={`url(#pc-${idSuffix})`} style={petalStyle(progress, 0.72, 0.14, 56, 46)} />
        <path d="M62 55 Q68 44 65 35 Q62 43 61 50Z"
          fill={`url(#pc-${idSuffix})`} style={petalStyle(progress, 0.75, 0.14, 64, 46)} />
        <ellipse cx="60" cy="46" rx="5" ry="7"
          fill={`url(#pc-${idSuffix})`} style={petalStyle(progress, 0.8, 0.15, 60, 46)} />
        <ellipse cx="60" cy="44" rx="3" ry="4"
          fill="#fda4af" style={petalStyle(progress, 0.85, 0.12, 60, 44)} />

        <circle cx="60" cy="48" r="32" fill="none" stroke="#fb7185" strokeWidth="0.5"
          style={{ opacity: c(progress, 0.9, 0.1) * 0.25, transition: "opacity 0.2s" }} />
        <circle cx="60" cy="48" r="22" fill="none" stroke="#fda4af" strokeWidth="0.3"
          style={{ opacity: c(progress, 0.92, 0.08) * 0.2, transition: "opacity 0.2s" }} />
      </svg>

      <p
        className="text-center text-[0.55rem] text-white/30 mt-1 tabular-nums"
        style={{ opacity: progress > 0.02 ? 1 : 0, transition: "opacity 0.3s" }}
      >
        {Math.round(progress * 100)}%
      </p>
    </div>
  );
}

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
    <>
      <Rose progress={progress} side="right" />
      <Rose progress={progress} side="left" />
    </>
  );
}
