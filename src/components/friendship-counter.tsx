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
        description="Avant d'être un couple, on était déjà inséparables 🤝"
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

      {/* Friendship → Couple timeline */}
      <motion.div
        className="mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center gap-2 text-sm text-purple-300/60">
          <span className="text-lg" aria-hidden="true">🏫</span>
          <span>Amis au collège</span>
        </div>

        <div className="hidden sm:block w-16 h-px bg-gradient-to-r from-purple-500/30 to-pink-500/30" aria-hidden="true" />
        <div className="sm:hidden h-6 w-px bg-gradient-to-b from-purple-500/30 to-pink-500/30" aria-hidden="true" />

        <div className="flex items-center gap-2 text-sm text-pink-300/60">
          <span className="text-lg" aria-hidden="true">💕</span>
          <span>En couple — 4 juin 2025</span>
        </div>

        <div className="hidden sm:block w-16 h-px bg-gradient-to-r from-pink-500/30 to-amber-500/30" aria-hidden="true" />
        <div className="sm:hidden h-6 w-px bg-gradient-to-b from-pink-500/30 to-amber-500/30" aria-hidden="true" />

        <div className="flex items-center gap-2 text-sm text-amber-300/60">
          <span className="text-lg" aria-hidden="true">♾️</span>
          <span>Pour toujours</span>
        </div>
      </motion.div>
    </section>
  );
}
