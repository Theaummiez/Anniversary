"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
      className="relative min-h-svh flex flex-col items-center justify-center text-center px-6 py-28 overflow-hidden"
    >
      {/* Background — visible photo with lighter overlay */}
      <div className="absolute inset-0 z-0 bg-[#1a0a30]">
        <Image
          src="/photos/bisous.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40"
          priority
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080114]/60 via-transparent to-[#080114]/95" />
      </div>

      <div className="relative z-[2] flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Badge
            variant="outline"
            className="border-white/15 bg-white/5 text-pink-200/90 text-xs sm:text-sm px-4 py-1.5 backdrop-blur-md tracking-wide"
          >
            💕 Retrouvés le 4 juin 2025 — bientôt réunis pour de bon
          </Badge>
        </motion.div>

        <motion.h1
          className="font-heading text-[3.2rem] sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.95] tracking-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <span className="bg-gradient-to-r from-pink-200 via-pink-400 to-rose-500 bg-clip-text text-transparent animate-gradient">
            Alex
          </span>
          <motion.span
            className="inline-block text-pink-400 text-[0.5em] mx-3 sm:mx-4"
            animate={{ scale: [1, 1.18, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          >
            💕
          </motion.span>
          <span className="bg-gradient-to-r from-purple-200 via-purple-400 to-fuchsia-500 bg-clip-text text-transparent animate-gradient">
            Tomy
          </span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-white/70 italic max-w-md leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Notre belle histoire d&apos;amour &amp; d&apos;aventures ✨
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-2.5 mt-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          {TAGS.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-white/10 bg-white/5 text-white/80 text-xs px-3 py-1 backdrop-blur-sm"
            >
              {tag}
            </Badge>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint — higher contrast */}
      <motion.a
        href="#counter"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/50 hover:text-white/80 text-xs z-[2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/50 rounded-lg px-3 py-1.5"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Défiler vers le bas"
      >
        <span className="tracking-wider uppercase text-[0.65rem]">
          Découvrir notre histoire
        </span>
        <ChevronDown size={14} />
      </motion.a>
    </section>
  );
}
