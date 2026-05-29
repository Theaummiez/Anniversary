"use client";

import { useRef, useState, useEffect } from "react";

interface FlipDigitProps {
  value: string;
  label: string;
  emoji: string;
}

export function FlipDigit({ value, label, emoji }: FlipDigitProps) {
  const [display, setDisplay] = useState(value);
  const [flipping, setFlipping] = useState(false);
  const prevRef = useRef(value);

  useEffect(() => {
    if (prevRef.current !== value) {
      prevRef.current = value;
      setFlipping(true);
      const t = setTimeout(() => {
        setDisplay(value);
        setFlipping(false);
      }, 150);
      return () => clearTimeout(t);
    }
  }, [value]);

  return (
    <div className="text-center">
      <div className="relative bg-white/[0.03] border border-white/[0.06] backdrop-blur-xl rounded-xl px-2 py-4 sm:py-5 overflow-hidden">
        <span
          className={`block font-heading text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-b from-white to-pink-300 bg-clip-text text-transparent leading-none tabular-nums transition-all duration-150 ${
            flipping
              ? "scale-y-0 opacity-0"
              : "scale-y-100 opacity-100"
          }`}
          style={{ transformOrigin: "center bottom", perspective: "200px" }}
          aria-label={`${value} ${label}`}
        >
          {display}
        </span>

        {/* Pulse glow on change */}
        <div
          className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
            flipping
              ? "opacity-100"
              : "opacity-0"
          }`}
          style={{
            background: "radial-gradient(circle, rgba(255,107,157,0.15) 0%, transparent 70%)",
          }}
        />
      </div>
      <span className="block text-[0.6rem] sm:text-[0.65rem] text-white/40 uppercase tracking-[0.12em] mt-2">
        {label}
      </span>
      <span className="block text-sm mt-0.5" aria-hidden="true">
        {emoji}
      </span>
    </div>
  );
}
