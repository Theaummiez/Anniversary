"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";

const STATS = [
  { label: "Fous rires", value: 100, emoji: "😂" },
  { label: "Complicité", value: 98, emoji: "🤝" },
  { label: "Amour", value: Infinity, emoji: "💕" },
  { label: "Game nights", value: 95, emoji: "🎮" },
  { label: "Aventure", value: 97, emoji: "✈️" },
  { label: "Mignonnerie", value: 100, emoji: "🥰" },
];

const TRAITS = [
  "Vous êtes le couple que tout le monde envie secrètement",
  "Votre pouvoir : transformer un mardi soir en aventure",
  "Ensemble, vous êtes littéralement inarrêtables",
  "La distance ? Même les océans ne peuvent rien contre vous",
  "Votre love language : les fous rires à 3h du matin",
];

function ProgressBar({ value, color }: { value: number; color: string }) {
  const isInfinity = !isFinite(value);
  const width = isInfinity ? 100 : Math.min(value, 100);

  return (
    <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
      <motion.div
        className={`h-full rounded-full ${color}`}
        initial={{ width: 0 }}
        whileInView={{ width: `${width}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </div>
  );
}

export function Horoscope() {
  return (
    <section
      id="horoscope"
      className="relative z-[1] flex flex-col items-center justify-center px-6 py-24"
      style={{ background: "linear-gradient(180deg, #130230 0%, #080114 100%)" }}
    >
      <SectionHeader
        tag="🔮 Les astres ont parlé"
        title="Compatibilité"
        highlight="Alex & Tomy"
        description="Selon l'univers, vous êtes faits l'un pour l'autre ✨"
      />

      <div className="flex flex-col md:flex-row gap-6 max-w-4xl w-full">
        {/* Stats */}
        <Card className="flex-1 bg-white/[0.03] border-white/[0.06] p-6">
          <h3 className="font-heading text-lg font-bold mb-5 text-center">
            📊 Nos Stats
          </h3>
          <div className="flex flex-col gap-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="flex items-center justify-between text-sm mb-1.5">
                  <span className="text-white/70">
                    <span aria-hidden="true">{stat.emoji}</span> {stat.label}
                  </span>
                  <span className="font-heading font-bold text-pink-300 tabular-nums">
                    {isFinite(stat.value) ? `${stat.value}%` : "∞%"}
                  </span>
                </div>
                <ProgressBar
                  value={stat.value}
                  color={
                    stat.value === 100 || !isFinite(stat.value)
                      ? "bg-gradient-to-r from-pink-500 to-purple-500"
                      : "bg-gradient-to-r from-pink-500/80 to-purple-500/80"
                  }
                />
              </div>
            ))}
          </div>
        </Card>

        {/* Traits */}
        <Card className="flex-1 bg-white/[0.03] border-white/[0.06] p-6">
          <h3 className="font-heading text-lg font-bold mb-5 text-center">
            ✨ Ce que disent les étoiles
          </h3>
          <div className="flex flex-col gap-3">
            {TRAITS.map((trait, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 text-sm text-white/60 leading-relaxed"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="text-purple-400 mt-0.5 shrink-0">⭐</span>
                <span>{trait}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-6 pt-5 border-t border-white/[0.06] text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-xs text-white/30 mb-2">Verdict final</p>
            <p className="font-heading text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Âmes sœurs 💕
            </p>
          </motion.div>
        </Card>
      </div>
    </section>
  );
}
