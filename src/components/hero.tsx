"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";

const TAGS = [
  "💑 Romantiques",
  "🎮 Joueurs",
  "✈️ Voyageurs",
  "🌸 Mignons",
  "😂 Toujours joyeux",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-svh flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 40%, #2e0860 0%, #080114 80%)",
      }}
    >
      <motion.span
        aria-hidden="true"
        className="absolute top-[18%] text-3xl drop-shadow-[0_0_8px_rgba(255,107,157,0.5)]"
        animate={{ left: ["-6%", "108%"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
      >
        ✈️
      </motion.span>

      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Badge
          variant="outline"
          className="border-pink-500/25 bg-pink-500/10 text-pink-200 text-sm px-4 py-1.5"
        >
          🗓️ Ensemble depuis le 4 juin 2025
        </Badge>
      </motion.div>

      <motion.h1
        className="mt-6 font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <span className="bg-gradient-to-r from-pink-300 to-pink-500 bg-clip-text text-transparent">
          Alex
        </span>
        <motion.span
          className="inline-block text-pink-400 text-[0.65em] mx-2"
          animate={{ scale: [1, 1.22, 1] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          💕
        </motion.span>
        <span className="bg-gradient-to-r from-purple-300 to-purple-600 bg-clip-text text-transparent">
          Tomy
        </span>
      </motion.h1>

      <motion.p
        className="mt-4 text-base sm:text-lg md:text-xl text-pink-200/70 italic max-w-lg"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
      >
        Notre belle histoire d&apos;amour &amp; d&apos;aventures ✨
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-2 mt-6"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.8 }}
      >
        {TAGS.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="border-pink-500/25 bg-pink-500/10 text-white/90 text-xs sm:text-sm px-3 py-1"
          >
            {tag}
          </Badge>
        ))}
      </motion.div>

      <motion.a
        href="#counter"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-pink-200/50 text-xs"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Défiler vers le bas"
      >
        <span>Découvrir notre histoire</span>
        <ChevronDown size={16} />
      </motion.a>
    </section>
  );
}
