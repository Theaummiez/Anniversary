"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { useCounter } from "@/hooks/use-counter";

const LABELS: { key: string; label: string; emoji: string }[] = [
  { key: "years", label: "Année(s)", emoji: "🎂" },
  { key: "months", label: "Mois", emoji: "🌙" },
  { key: "days", label: "Jours", emoji: "☀️" },
  { key: "hours", label: "Heures", emoji: "⏰" },
  { key: "minutes", label: "Minutes", emoji: "⚡" },
  { key: "seconds", label: "Secondes", emoji: "💫" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Counter() {
  const counter = useCounter();

  return (
    <section
      id="counter"
      className="relative z-[1] min-h-svh flex flex-col items-center justify-center px-4 py-24"
      style={{
        background: "linear-gradient(180deg, #080114 0%, #130230 100%)",
      }}
    >
      <SectionHeader
        tag="🕰️ Chaque seconde compte"
        title="On est ensemble depuis"
        highlight="♾️"
        description="Chaque instant passé avec toi est précieux 💕"
      />

      <motion.div
        className="grid grid-cols-3 sm:flex sm:flex-wrap sm:justify-center gap-2.5 sm:gap-3 md:gap-4 max-w-4xl w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.08 }}
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
              <Card className="bg-white/5 border-pink-500/15 backdrop-blur-xl px-3 sm:px-4 py-5 sm:py-6 text-center sm:min-w-[120px] md:min-w-[130px] hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(255,107,157,0.2)] transition-all duration-300">
                <span
                  className="block font-heading text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent leading-none tabular-nums"
                  aria-label={`${value} ${label}`}
                >
                  {display}
                </span>
                <span className="block text-[0.6rem] sm:text-[0.68rem] text-pink-200/60 uppercase tracking-widest mt-2 truncate">
                  {label} {emoji}
                </span>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.p
        className="mt-8 text-pink-200/60 italic text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        …et chaque instant est le plus beau 💕
      </motion.p>
    </section>
  );
}
