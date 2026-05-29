"use client";

import { useEffect, useRef, useCallback } from "react";
import { launchFireworks } from "@/lib/fireworks";

const SECRET = ["a", "t", "a", "t"];

export function EasterEgg() {
  const bufferRef = useRef<string[]>([]);

  const handleKey = useCallback((e: KeyboardEvent) => {
    bufferRef.current.push(e.key.toLowerCase());
    if (bufferRef.current.length > SECRET.length) {
      bufferRef.current.shift();
    }
    if (bufferRef.current.join("") === SECRET.join("")) {
      launchFireworks(6);
      bufferRef.current = [];
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return null;
}
