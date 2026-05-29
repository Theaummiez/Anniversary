"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { FlipDigit } from "@/components/flip-digit";
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
              <FlipDigit value={display} label={label} emoji={emoji} />
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
