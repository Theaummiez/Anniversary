"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { useCounter } from "@/hooks/use-counter";
import { RELATIONSHIP_START } from "@/lib/constants";

const LABELS: { key: string; label: string; emoji: string }[] = [
  { key: "years", label: "Années", emoji: "🎂" },
  { key: "months", label: "Mois", emoji: "🌙" },
  { key: "days", label: "Jours", emoji: "☀️" },
  { key: "hours", label: "Heures", emoji: "⏰" },
  { key: "minutes", label: "Minutes", emoji: "⚡" },
  { key: "seconds", label: "Secondes", emoji: "💫" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function Counter() {
  const counter = useCounter(RELATIONSHIP_START);

  return (
    <section
      id="counter"
      className="relative z-[1] min-h-svh flex flex-col items-center justify-center px-6 py-24"
      style={{
        background: "linear-gradient(180deg, #080114 0%, #130230 100%)",
      }}
    >
      <SectionHeader
        tag="🕰️ Chaque seconde compte"
        title="Remis ensemble depuis"
        highlight="♾️"
        description="Retrouvés le 4 juin 2025, à distance depuis août — bientôt réunis 💕"
      />

      <motion.div
        className="grid grid-cols-3 sm:grid-cols-6 gap-3 md:gap-4 max-w-3xl w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.06 }}
        role="group"
        aria-label="Temps passé ensemble"
      >
        {LABELS.map(({ key, label, emoji }) => {
          const value = counter[key as keyof typeof counter];
          const display =
            key === "minutes" || key === "seconds"
              ? String(value).padStart(2, "0")
              : String(value);

          return (
            <motion.div key={key} variants={cardVariants}>
              <Card className="bg-white/[0.03] border-white/[0.06] backdrop-blur-xl px-2 py-5 sm:py-6 text-center hover:-translate-y-1 hover:border-pink-500/20 hover:shadow-[0_16px_40px_rgba(255,107,157,0.12)] transition-all duration-300">
                <span
                  className="block font-heading text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-b from-white to-pink-300 bg-clip-text text-transparent leading-none tabular-nums"
                  aria-label={`${value} ${label}`}
                >
                  {display}
                </span>
                <span className="block text-[0.6rem] sm:text-[0.65rem] text-white/40 uppercase tracking-[0.12em] mt-2.5">
                  {label}
                </span>
                <span className="block text-sm mt-0.5" aria-hidden="true">
                  {emoji}
                </span>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.p
        className="mt-10 text-white/40 italic text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        …et chaque instant est le plus beau 💕
      </motion.p>
    </section>
  );
}
