"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function TimelineVine() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [isVineInView, setIsVineInView] = useState(false);

  const TOTAL_VINE_LENGTH = 10000;
  const [vineStrokeDashOffset, setVineStrokeDashOffset] = useState(
    TOTAL_VINE_LENGTH,
  );

  useEffect(() => {
    const timelineSection = document.getElementById("timeline");
    if (!timelineSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVineInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(timelineSection);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVineInView) return;

    const DURATION = 2000;
    const start = Date.now();

    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / DURATION, 1);

      setVineStrokeDashOffset(
        TOTAL_VINE_LENGTH * (1 - progress),
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVineInView]);

  const leftThorns = [
    500, 1200, 1900, 2600, 3300,
    4000, 4700, 5400, 6100, 6800,
    7500, 8200, 8900,
  ];

  const rightThorns = [
    850, 1550, 2250, 2950, 3650,
    4350, 5050, 5750, 6450, 7150,
    7850, 8550, 9250,
  ];

  const roses = [
    900, 1800, 2700, 3600, 4500,
    5400, 6300, 7200, 8100, 9000,
  ];

  const leaves = [
    400, 1100, 1800, 2500, 3200,
    3900, 4600, 5300, 6000, 6700,
    7400, 8100, 8800, 9500,
  ];

  return (
    <svg
      ref={svgRef}
      className="absolute left-1/2 top-0 bottom-0 w-12 -translate-x-1/2 pointer-events-none hidden md:block z-[2]"
      viewBox="0 0 100 10000"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="vineGradient"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="rgba(255,107,157,0.1)" />
          <stop offset="25%" stopColor="rgba(255,107,157,0.95)" />
          <stop offset="55%" stopColor="rgba(196,77,255,0.95)" />
          <stop offset="85%" stopColor="rgba(196,77,255,0.6)" />
          <stop offset="100%" stopColor="rgba(196,77,255,0.2)" />
        </linearGradient>
      </defs>

      <path
        d="
          M 50 0
          Q 30 500, 50 1000
          Q 70 1500, 50 2000
          Q 30 2500, 50 3000
          Q 70 3500, 50 4000
          Q 30 4500, 50 5000
          Q 70 5500, 50 6000
          Q 30 6500, 50 7000
          Q 70 7500, 50 8000
          Q 30 8500, 50 9000
          L 50 10000
        "
        stroke="url(#vineGradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeDasharray={TOTAL_VINE_LENGTH}
        strokeDashoffset={vineStrokeDashOffset}
      />

      {leftThorns.map((y, i) => (
        <motion.line
          key={`thorn-left-${i}`}
          x1="50"
          y1={y}
          x2="25"
          y2={y + 40}
          stroke="rgba(255,107,157,0.6)"
          strokeWidth="1.5"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={isVineInView ? { opacity: 1, pathLength: 1 } : {}}
          transition={{
            delay: 0.3 + i * 0.08,
            duration: 0.4,
          }}
        />
      ))}

      {rightThorns.map((y, i) => (
        <motion.line
          key={`thorn-right-${i}`}
          x1="50"
          y1={y}
          x2="75"
          y2={y + 40}
          stroke="rgba(196,77,255,0.6)"
          strokeWidth="1.5"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={isVineInView ? { opacity: 1, pathLength: 1 } : {}}
          transition={{
            delay: 0.3 + i * 0.08,
            duration: 0.4,
          }}
        />
      ))}

      {roses.map((y, i) => (
        <motion.g
          key={`rose-${i}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={isVineInView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            delay: 0.5 + i * 0.1,
            duration: 0.5,
            type: "spring",
            stiffness: 200,
          }}
        >
          <circle cx="50" cy={y} r="6" fill="rgba(255,107,157,0.3)" />
          <circle cx="45" cy={y - 3} r="4" fill="rgba(255,107,157,0.6)" />
          <circle cx="55" cy={y - 3} r="4" fill="rgba(255,107,157,0.6)" />
          <circle cx="42" cy={y} r="4" fill="rgba(196,77,255,0.5)" />
          <circle cx="58" cy={y} r="4" fill="rgba(196,77,255,0.5)" />
          <circle cx="50" cy={y - 6} r="3" fill="rgba(255,107,157,0.8)" />
        </motion.g>
      ))}

      {leaves.map((y, i) => (
        <motion.path
          key={`leaf-${i}`}
          d={`M 50 ${y} Q ${
            i % 2 === 0 ? 35 : 65
          } ${y - 20}, ${
            i % 2 === 0 ? 25 : 75
          } ${y - 40}`}
          stroke="rgba(34,197,94,0.4)"
          strokeWidth="1"
          fill="none"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={isVineInView ? { opacity: 1, pathLength: 1 } : {}}
          transition={{
            delay: 0.4 + i * 0.08,
            duration: 0.3,
          }}
        />
      ))}
    </svg>
  );
}