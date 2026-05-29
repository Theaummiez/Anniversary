"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { useCounter } from "@/hooks/use-counter";
import { FRIENDSHIP_START } from "@/lib/constants";

const LABELS: { key: string; label: string }[] = [
  { key: "years", label: "Années" },
  { key: "months", label: "Mois" },
  { key: "days", label: "Jours" },
  { key: "hours", label: "Heures" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Secondes" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const MILESTONES = [
  { emoji: "🏫", label: "Amis au collège", sublabel: "2020", color: "text-purple-300/60" },
  { emoji: "💕", label: "Premier couple", sublabel: "2021", color: "text-pink-300/60" },
  { emoji: "💔", label: "Séparation", sublabel: "2024", color: "text-red-300/50" },
  { emoji: "🔥", label: "Remis ensemble", sublabel: "2025", color: "text-amber-300/60" },
  { emoji: "🇻🇳", label: "Distance", sublabel: "maintenant", color: "text-blue-300/50" },
  { emoji: "🏠", label: "Retrouvailles", sublabel: "21 juin 2026", color: "text-white/60" },
];

export function FriendshipCounter() {
  const counter = useCounter(FRIENDSHIP_START);

  return (
    <section
      id="friendship"
      className="relative z-[1] flex flex-col items-center justify-center px-6 py-24"
      style={{
        background: "linear-gradient(180deg, #130230 0%, #0d0120 100%)",
      }}
    >
      <SectionHeader
        tag="🏫 Depuis le collège, en troisième"
        title="On se connaît depuis"
        highlight={`${counter.years} ans`}
        description="5 ans de couple, 1 an de séparation, et toujours ensemble 🤝"
      />

      <motion.div
        className="grid grid-cols-3 sm:grid-cols-6 gap-3 md:gap-4 max-w-3xl w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.06 }}
        role="group"
        aria-label="Temps depuis qu'on se connaît"
      >
        {LABELS.map(({ key, label }) => {
          const value = counter[key as keyof typeof counter];
          const display =
            key === "minutes" || key === "seconds"
              ? String(value).padStart(2, "0")
              : String(value);

          return (
            <motion.div key={key} variants={cardVariants}>
              <Card className="bg-white/[0.03] border-white/[0.06] backdrop-blur-xl px-2 py-5 sm:py-6 text-center hover:-translate-y-1 hover:border-purple-500/20 hover:shadow-[0_16px_40px_rgba(196,77,255,0.12)] transition-all duration-300">
                <span
                  className="block font-heading text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-b from-white to-purple-300 bg-clip-text text-transparent leading-none tabular-nums"
                  aria-label={`${value} ${label}`}
                >
                  {display}
                </span>
                <span className="block text-[0.6rem] sm:text-[0.65rem] text-purple-200/40 uppercase tracking-[0.12em] mt-2.5">
                  {label}
                </span>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Full story timeline */}
      <motion.div
        className="mt-12 flex flex-col sm:flex-row items-center gap-3 sm:gap-0"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        {MILESTONES.map((m, i) => (
          <div key={i} className="flex items-center">
            <div className={`flex flex-col items-center gap-0.5 ${m.color}`}>
              <span className="text-lg" aria-hidden="true">{m.emoji}</span>
              <span className="text-xs font-medium whitespace-nowrap">{m.label}</span>
              {m.sublabel && (
                <span className="text-[0.6rem] opacity-60">{m.sublabel}</span>
              )}
            </div>
            {i < MILESTONES.length - 1 && (
              <>
                <div className="hidden sm:block w-10 md:w-14 h-px bg-white/10 mx-2" aria-hidden="true" />
                <div className="sm:hidden h-5 w-px bg-white/10 my-1" aria-hidden="true" />
              </>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
