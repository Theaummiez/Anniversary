"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { Music, Play, ExternalLink } from "lucide-react";

interface Track {
  title: string;
  artist: string;
  spotify?: string;
}

interface Category {
  label: string;
  emoji: string;
  color: string;
  tracks: Track[];
}

const CATEGORIES: Category[] = [
  {
    label: "Fun / Bonne vibe",
    emoji: "🔥",
    color: "from-orange-400 to-red-500",
    tracks: [
      { title: "Calm Down", artist: "Rema", spotify: "https://open.spotify.com/track/249gnXrbfmV8NG6jTEMSwD" },
      { title: "Katchua", artist: "Ya Levis", spotify: "https://open.spotify.com/track/3HUDJaJbkMXDl1FDcnMCOH" },
      { title: "Djadja", artist: "Aya Nakamura", spotify: "https://open.spotify.com/track/15HkBJnMaGBfnWzFHFOekP" },
      { title: "Mon Soleil", artist: "Dadju", spotify: "https://open.spotify.com/track/5sICkBXVmaCQk5aISGR3x1" },
      { title: "Jerusalema", artist: "Master KG", spotify: "https://open.spotify.com/track/2MlOUXmcofMackX3bxfSwi" },
    ],
  },
  {
    label: "Titres légendaires",
    emoji: "👑",
    color: "from-amber-400 to-yellow-500",
    tracks: [
      { title: "Billie Jean", artist: "Michael Jackson", spotify: "https://open.spotify.com/track/5ChkMS8OtdzJeqyybCc9R5" },
      { title: "Lose Yourself", artist: "Eminem", spotify: "https://open.spotify.com/track/1v7L65Lc0Rqgf7Mf7KiGEf" },
      { title: "Bohemian Rhapsody", artist: "Queen", spotify: "https://open.spotify.com/track/4u7EnebtmKWzUH433cf5Qv" },
      { title: "Shape of You", artist: "Ed Sheeran", spotify: "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3" },
      { title: "Ameno", artist: "ERA", spotify: "https://open.spotify.com/track/2diHmPqSEMfhrBsGqAyxaL" },
    ],
  },
  {
    label: "Titres d'amour",
    emoji: "❤️",
    color: "from-pink-400 to-rose-500",
    tracks: [
      { title: "Chocolat", artist: "Ya Levis", spotify: "https://open.spotify.com/track/3CnGVxVmdS3HE2Y0P3uDL1" },
      { title: "Perfect", artist: "Ed Sheeran", spotify: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v" },
      { title: "Je te laisserai des mots", artist: "Patrick Watson", spotify: "https://open.spotify.com/track/3gSHMJpOSWjiGMPHBCr31K" },
      { title: "All of Me", artist: "John Legend", spotify: "https://open.spotify.com/track/3U4isOIWM3VUa7RFPcwMFZ" },
      { title: "Pour moi", artist: "Franglish", spotify: "https://open.spotify.com/track/4zM2iqERaiOPDlZHhDBFAJ" },
    ],
  },
  {
    label: "Afro-love / Vibe",
    emoji: "✨",
    color: "from-purple-400 to-fuchsia-500",
    tracks: [
      { title: "Nakati", artist: "Ya Levis", spotify: "https://open.spotify.com/track/0tYYnGHDGdcFEHIHFPMkz3" },
      { title: "Mbangu te", artist: "Ya Levis", spotify: "https://open.spotify.com/track/51sXnFfzlSIIIIbdGPC6NM" },
      { title: "Baby Boy", artist: "Ya Levis", spotify: "https://open.spotify.com/track/09S7RKC5QEJhgN2UxVkKOd" },
      { title: "Love Nwantiti", artist: "CKay", spotify: "https://open.spotify.com/track/2Z8yfpFX0ZMavHkcIeOwCY" },
      { title: "Jolie", artist: "Tayc", spotify: "https://open.spotify.com/track/3R8k1i57YqSBGYVoLPNMbp" },
    ],
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0 },
};

export function Playlist() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section
      id="playlist"
      className="relative z-[1] min-h-svh flex flex-col items-center justify-center px-6 py-24"
      style={{ background: "linear-gradient(180deg, #080114 0%, #130230 100%)" }}
    >
      <SectionHeader
        tag="🎵 Notre bande-son"
        title="Notre"
        highlight="Playlist"
        description="Les chansons qui racontent notre histoire 🎶"
      />

      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {CATEGORIES.map((cat, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(i)}
            className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 ${
              activeCategory === i
                ? "bg-white/15 text-white shadow-sm border border-white/10"
                : "text-white/50 hover:text-white/80 hover:bg-white/[0.04]"
            }`}
          >
            <span aria-hidden="true">{cat.emoji}</span> {cat.label}
          </button>
        ))}
      </div>

      {/* Track list */}
      <Card className="bg-white/[0.03] border-white/[0.06] backdrop-blur-xl max-w-lg w-full p-4 md:p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${CATEGORIES[activeCategory].color} flex items-center justify-center`}>
            <Music size={16} className="text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white/90">
              {CATEGORIES[activeCategory].emoji} {CATEGORIES[activeCategory].label}
            </p>
            <p className="text-[0.65rem] text-white/40">
              {CATEGORIES[activeCategory].tracks.length} titres
            </p>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.05 }}
            className="flex flex-col gap-1"
          >
            {CATEGORIES[activeCategory].tracks.map((track, i) => (
              <motion.div key={track.title} variants={itemVariants}>
                <a
                  href={track.spotify || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/[0.04] transition-colors group"
                >
                  <span className="text-white/20 text-xs font-mono w-5 text-right tabular-nums">
                    {i + 1}
                  </span>
                  <Play size={14} className="text-white/20 group-hover:text-pink-400 transition-colors shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white/80 group-hover:text-white transition-colors truncate">
                      {track.title}
                    </p>
                    <p className="text-xs text-white/40 truncate">
                      {track.artist}
                    </p>
                  </div>
                  <ExternalLink size={12} className="text-white/20 group-hover:text-white/50 transition-colors shrink-0" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Card>
    </section>
  );
}
