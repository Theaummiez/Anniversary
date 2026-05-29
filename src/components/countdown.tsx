"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { useCountdown } from "@/hooks/use-countdown";
import { ANNIVERSARY_DATE, REUNION_DATE } from "@/lib/constants";

const UNITS = [
  { key: "days", label: "Jours" },
  { key: "hours", label: "Heures" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Secondes" },
] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

function CountdownGrid({
  target,
  gradient,
  ariaLabel,
}: {
  target: Date;
  gradient: string;
  ariaLabel: string;
}) {
  const cd = useCountdown(target);

  return (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 md:gap-3 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.06 }}
      role="group"
      aria-label={ariaLabel}
    >
      {UNITS.map(({ key, label }) => {
        const value = cd[key];
        const display =
          key === "days" ? String(value) : String(value).padStart(2, "0");

        return (
          <motion.div key={key} variants={cardVariants}>
            <Card className="bg-white/[0.03] border-white/[0.06] backdrop-blur-xl px-3 py-4 sm:py-5 text-center">
              <span
                className={`block font-heading text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-b ${gradient} bg-clip-text text-transparent leading-none tabular-nums`}
                aria-label={`${value} ${label}`}
              >
                {display}
              </span>
              <span className="block text-[0.6rem] sm:text-[0.65rem] text-pink-200/40 uppercase tracking-[0.12em] mt-2">
                {label}
              </span>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export function Countdown() {
  return (
    <section
      id="countdown"
      className="relative z-[1] min-h-svh flex flex-col items-center justify-center text-center px-6 py-24"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 40%, #1a0845 0%, #080114 75%)",
      }}
    >
      {/* Anniversary countdown — PRIMARY */}
      <motion.span
        className="text-5xl md:text-6xl inline-block mb-6"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        💕
      </motion.span>

      <SectionHeader
        tag="💕 Notre anniversaire"
        title="4 Juin 2026"
        highlight="— 1 an ensemble"
        description="Un an qu'on s'est retrouvés. Le plus beau jour de notre histoire 🥂"
      />

      <div className="max-w-2xl w-full">
        <CountdownGrid
          target={ANNIVERSARY_DATE}
          gradient="from-pink-300 to-purple-400"
          ariaLabel="Compte à rebours vers l'anniversaire du 4 juin"
        />
      </div>

      {/* Separator */}
      <div className="w-16 h-px bg-white/10 my-12" aria-hidden="true" />

      {/* Arrival countdown — SECONDARY */}
      <motion.span
        className="text-4xl md:text-5xl inline-block mb-4"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      >
        ✈️
      </motion.span>

      <motion.div
        className="flex flex-col items-center text-center mb-8"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-xs text-white/30 tracking-[0.15em] uppercase mb-2">
          🛫 Le jour où je rentre
        </p>
        <h3 className="font-heading text-2xl md:text-3xl font-bold">
          21 Juin 2026{" "}
          <span className="bg-gradient-to-r from-amber-300 to-pink-400 bg-clip-text text-transparent">
            — J&apos;arrive !
          </span>
        </h3>
        <p className="text-white/30 text-sm mt-2 max-w-md">
          Plus de distance, plus d&apos;écrans. Juste toi et moi, enfin réunis
          pour de bon 🏠
        </p>
      </motion.div>

      <div className="max-w-2xl w-full">
        <CountdownGrid
          target={REUNION_DATE}
          gradient="from-amber-300 to-pink-400"
          ariaLabel="Compte à rebours vers le retour le 21 juin"
        />
      </div>

      <motion.p
        className="mt-10 text-white/30 italic text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        Encore un peu de patience mon amour... 🌟
      </motion.p>
    </section>
  );
}
