"use client";

import { useEffect } from "react";

const HEARTS = ["❤️", "💕", "💘", "💝", "💖"];

function createHeart(x: number, y: number) {
  const el = document.createElement("span");
  const size = Math.random() * 16 + 24;
  const color = HEARTS[Math.floor(Math.random() * HEARTS.length)];
  el.textContent = color;
  el.style.position = "fixed";
  el.style.left = `${x - size / 2}px`;
  el.style.top = `${y - size / 2}px`;
  el.style.pointerEvents = "none";
  el.style.fontSize = `${size}px`;
  el.style.opacity = "1";
  el.style.transform = `translate(-50%, -50%) scale(0.9) rotate(${Math.random() * 40 - 20}deg)`;
  el.style.transition = "transform 0.8s ease-out, opacity 0.8s ease-out";
  el.style.zIndex = "9999";
  document.body.appendChild(el);

  requestAnimationFrame(() => {
    el.style.transform = `translate(-50%, -150%) scale(1.45) rotate(${Math.random() * 40 - 20}deg)`;
    el.style.opacity = "0";
  });

  window.setTimeout(() => {
    el.remove();
  }, 900);
}

export function ClickHearts() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      createHeart(event.clientX, event.clientY);
      createHeart(event.clientX + (Math.random() - 0.5) * 40, event.clientY + (Math.random() - 0.5) * 40);
    }

    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return null;
}
