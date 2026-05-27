"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { useCountdown } from "@/hooks/use-countdown";

const UNITS = [
  { key: "days", label: "Jours" },
  { key: "hours", label: "Heures" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Secondes" },
] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Countdown() {
  const cd = useCountdown();

  return (
    <section
      id="countdown"
      className="relative z-[1] min-h-svh flex flex-col items-center justify-center text-center px-4 py-24"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 40%, #270760 0%, #080114 75%)",
      }}
    >
      <motion.span
        className="text-6xl md:text-7xl inline-block mb-4"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      >
        🎂
      </motion.span>

      <SectionHeader
        tag="🎉 Notre prochain anniversaire"
        title="4 Juin"
        highlight="arrive bientôt !"
        description="Bientôt 1 an ensemble — et c'est juste le début 🥂"
      />

      <motion.div
        className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3 md:gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.1 }}
        role="group"
        aria-label="Compte à rebours vers l'anniversaire"
      >
        {UNITS.map(({ key, label }) => {
          const value = cd[key];
          const display =
            key === "days" ? String(value) : String(value).padStart(2, "0");

          return (
            <motion.div key={key} variants={cardVariants}>
              <Card className="bg-white/5 border-pink-500/15 backdrop-blur-xl min-w-[100px] md:min-w-[120px] px-5 py-5 text-center">
                <span
                  className="block font-heading text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-pink-300 bg-clip-text text-transparent leading-none tabular-nums"
                  aria-label={`${value} ${label}`}
                >
                  {display}
                </span>
                <span className="block text-[0.68rem] text-pink-200/60 uppercase tracking-widest mt-2">
                  {label}
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
        transition={{ delay: 0.5 }}
      >
        Encore un peu de patience mon amour... 🌟
      </motion.p>
    </section>
  );
}
