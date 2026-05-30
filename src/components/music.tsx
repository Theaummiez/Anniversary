"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { MUSIC_TRACKS } from "@/lib/constants";
import { Play } from "lucide-react";

export function Music() {
  return (
    <section
      id="music"
      className="relative z-[1] min-h-svh flex flex-col items-center justify-center px-6 py-24"
      style={{
        background: "linear-gradient(180deg, #080114 0%, #130230 100%)",
      }}
    >
      <SectionHeader
        tag="🎶 Une playlist d'amour"
        title="Musique"
        highlight="à lancer"
        description="Des chansons romantiques prêtes à être écoutées, dont Chocolat de Ya Levis."
      />

      <div className="grid gap-3 max-w-3xl w-full">
        {MUSIC_TRACKS.map((track, index) => (
          <motion.div
            key={`${track.title}-${track.artist}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
          >
            <Card className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 py-5 bg-white/[0.03] border-white/[0.06] hover:-translate-y-1 transition-transform duration-200">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-pink-200/50 mb-2">
                  {track.artist}
                </p>
                <h3 className="font-heading text-lg font-bold text-white">
                  {track.title}
                </h3>
              </div>
              <a
                href={track.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/90 transition-colors hover:bg-pink-500/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/50"
                aria-label={`Écouter ${track.title} de ${track.artist}`}
              >
                <Play size={14} />
                Écouter
              </a>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
