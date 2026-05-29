"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-svh flex flex-col items-center justify-center text-center px-6 bg-[#080114]">
      <motion.span
        className="text-7xl mb-6"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        💕
      </motion.span>

      <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-3">
        <span className="bg-gradient-to-r from-pink-300 to-purple-400 bg-clip-text text-transparent">
          Tu t&apos;es perdue
        </span>{" "}
        mon amour ?
      </h1>

      <p className="text-white/50 text-base mb-8 max-w-sm">
        Cette page n&apos;existe pas... mais notre histoire, si 💕
      </p>

      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-sm hover:from-pink-400 hover:to-purple-500 transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
      >
        Retourner à notre histoire ✨
      </Link>

      <p className="text-white/20 text-xs mt-12">
        Erreur 404 — Page introuvable
      </p>
    </div>
  );
}
