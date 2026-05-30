"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * TimelineVine Component
 * Displays an animated growing vine with roses, thorns, and leaves
 * that grows when the timeline section enters the viewport.
 * Replaces the static vertical line to visually connect timeline events.
 */
export function TimelineVine() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [isVineInView, setIsVineInView] = useState(false);
  const [vineStrokeDashOffset, setVineStrokeDashOffset] = useState(1000);

  // Trigger animation when timeline section becomes visible
  useEffect(() => {
    const timelineSection = document.getElementById("timeline");
    if (!timelineSection) return;

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVineInView(true);
            intersectionObserver.disconnect();
          }
        }
      },
      {
        threshold: 0.1,
      },
    );

    intersectionObserver.observe(timelineSection);
    return () => intersectionObserver.disconnect();
  }, []);

  // Animate the vine drawing when it comes into view
  useEffect(() => {
    if (!isVineInView) return;

    const VINE_DRAW_DURATION = 2000; // 2 seconds
    const animationStartTime = Date.now();

    const drawVineFrame = () => {
      const elapsedTime = Date.now() - animationStartTime;
      const animationProgress = Math.min(elapsedTime / VINE_DRAW_DURATION, 1);
      setVineStrokeDashOffset(1000 * (1 - animationProgress));

      if (animationProgress < 1) {
        requestAnimationFrame(drawVineFrame);
      }
    };

    requestAnimationFrame(drawVineFrame);
  }, [isVineInView]);

  return (
    <svg
      ref={svgRef}
      className="absolute left-1/2 top-0 bottom-0 w-12 -translate-x-1/2 pointer-events-none hidden md:block"
      viewBox="0 0 100 1200"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="vineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,107,157,0)" />
          <stop offset="30%" stopColor="rgba(255,107,157,0.8)" />
          <stop offset="70%" stopColor="rgba(196,77,255,0.8)" />
          <stop offset="100%" stopColor="rgba(196,77,255,0)" />
        </linearGradient>
      </defs>

      {/* Main vine stem - sinuous path */}
      <path
        d="M 50 0 Q 30 80, 50 160 Q 70 240, 50 320 Q 30 400, 50 480 Q 70 560, 50 640 Q 30 720, 50 800 Q 70 880, 50 960 Q 30 1040, 50 1120 L 50 1200"
        stroke="url(#vineGradient)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="1000"
        strokeDashoffset={vineStrokeDashOffset}
      />

      {/* Left thorns */}
      {[0, 160, 320, 480, 640, 800, 960].map((y, i) => (
        <motion.line
          key={`thorn-left-${i}`}
          x1="50"
          y1={y}
          x2="25"
          y2={y + 20}
          stroke="rgba(255,107,157,0.6)"
          strokeWidth="1.5"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={isVineInView ? { opacity: 1, pathLength: 1 } : {}}
          transition={{
            delay: 0.3 + i * 0.15,
            duration: 0.4,
          }}
          strokeLinecap="round"
        />
      ))}

      {/* Right thorns */}
      {[80, 240, 400, 560, 720, 880, 1040].map((y, i) => (
        <motion.line
          key={`thorn-right-${i}`}
          x1="50"
          y1={y}
          x2="75"
          y2={y + 20}
          stroke="rgba(196,77,255,0.6)"
          strokeWidth="1.5"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={isVineInView ? { opacity: 1, pathLength: 1 } : {}}
          transition={{
            delay: 0.3 + i * 0.15,
            duration: 0.4,
          }}
          strokeLinecap="round"
        />
      ))}

      {/* Small roses along the vine */}
      {[160, 320, 480, 640, 800, 960].map((y, i) => (
        <motion.g
          key={`rose-${i}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={isVineInView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            delay: 0.5 + i * 0.12,
            duration: 0.5,
            type: "spring",
            stiffness: 200,
          }}
        >
          {/* Rose petals */}
          <circle cx="50" cy={y} r="6" fill="rgba(255,107,157,0.3)" />
          <circle cx="45" cy={y - 3} r="4" fill="rgba(255,107,157,0.6)" />
          <circle cx="55" cy={y - 3} r="4" fill="rgba(255,107,157,0.6)" />
          <circle cx="42" cy={y} r="4" fill="rgba(196,77,255,0.5)" />
          <circle cx="58" cy={y} r="4" fill="rgba(196,77,255,0.5)" />
          <circle cx="50" cy={y - 6} r="3" fill="rgba(255,107,157,0.8)" />
        </motion.g>
      ))}

      {/* Decorative leaves */}
      {[100, 250, 400, 550, 700, 850, 1000].map((y, i) => (
        <motion.path
          key={`leaf-${i}`}
          d={`M 50 ${y} Q ${i % 2 === 0 ? 35 : 65} ${y - 8}, ${i % 2 === 0 ? 25 : 75} ${y - 12}`}
          stroke="rgba(34,197,94,0.4)"
          strokeWidth="1"
          fill="none"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={isVineInView ? { opacity: 1, pathLength: 1 } : {}}
          transition={{
            delay: 0.4 + i * 0.1,
            duration: 0.3,
          }}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
