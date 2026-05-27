"use client";

import { useCallback } from "react";
import { CONFETTI_COLORS } from "@/lib/constants";

export function useConfetti() {
  return useCallback((count = 30) => {
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const el = document.createElement("div");
        const color =
          CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
        const size = Math.random() * 8 + 4;

        Object.assign(el.style, {
          position: "fixed",
          top: "-12px",
          left: `${Math.random() * 100}vw`,
          width: `${size}px`,
          height: `${size}px`,
          background: color,
          borderRadius: Math.random() > 0.5 ? "50%" : "2px",
          zIndex: "9999",
          pointerEvents: "none",
          animation: `confetti-fall ${Math.random() * 2 + 1.4}s linear forwards`,
        });

        document.body.appendChild(el);
        setTimeout(() => el.remove(), 3200);
      }, i * 40);
    }
  }, []);
}
