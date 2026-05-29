"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { useInterval } from "@/hooks/use-interval";
import { useState, useCallback } from "react";

const AVERAGE_LIFE_EXPECTANCY = 82;
const CURRENT_AGE = 20;
const JE_TAIME_PER_DAY = 5;
const REMAINING_YEARS = AVERAGE_LIFE_EXPECTANCY - CURRENT_AGE;
const REMAINING_DAYS = REMAINING_YEARS * 365.25;
const TOTAL_JE_TAIME = Math.floor(REMAINING_DAYS * JE_TAIME_PER_DAY);

function computeRemaining(): number {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);
  const secondsToday = (Date.now() - startOfDay.getTime()) / 1000;
  const saidToday = Math.floor((secondsToday / 86400) * JE_TAIME_PER_DAY * 100) / 100;
  return Math.max(0, TOTAL_JE_TAIME - Math.floor(saidToday));
}

export function LoveCounter() {
  const [count, setCount] = useState(computeRemaining);

  const tick = useCallback(() => {
    setCount(computeRemaining());
  }, []);

  useInterval(tick, 3000);

  const formatted = count.toLocaleString("fr-FR");

  return (
    <section
      id="jetaime"
      className="relative z-[1] flex flex-col items-center justify-center px-6 py-24 text-center"
      style={{ background: "linear-gradient(180deg, #080114 0%, #0d0120 100%)" }}
    >
      <SectionHeader
        tag="💕 Un calcul très sérieux"
        title="Il te reste environ"
        highlight="..."
        description=""
      />

      <motion.div
        className="mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="block font-heading text-5xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-300 via-rose-400 to-purple-400 bg-clip-text text-transparent animate-gradient tabular-nums leading-none">
          {formatted}
        </span>
      </motion.div>

      <motion.p
        className="text-lg sm:text-xl md:text-2xl font-heading text-white/70"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        &quot;je t&apos;aime&quot; à me dire 💕
      </motion.p>

      <motion.p
        className="text-white/30 text-xs mt-6 max-w-sm leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        À raison de ~{JE_TAIME_PER_DAY} par jour, pendant les {REMAINING_YEARS} prochaines années ensemble.
        <br />
        Alors ne perds pas de temps... dis-le maintenant 🤫
      </motion.p>
    </section>
  );
}
