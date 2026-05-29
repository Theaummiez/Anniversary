"use client";

import { motion } from "framer-motion";

export function AnniversaryCake() {
  return (
    <motion.div
      className="flex flex-col items-center gap-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      aria-hidden="true"
    >
      {/* Cake illustration */}
      <div className="relative">
        {/* Candle flames */}
        <div className="flex justify-center gap-6 mb-1">
          <motion.span
            className="text-lg"
            animate={{ scale: [1, 1.3, 1], rotate: [-5, 5, -5] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          >
            🕯️
          </motion.span>
          <motion.span
            className="text-lg"
            animate={{ scale: [1, 1.3, 1], rotate: [5, -5, 5] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
          >
            🕯️
          </motion.span>
        </div>

        {/* Cake body */}
        <div className="relative w-40 sm:w-48">
          {/* Top tier */}
          <div className="mx-auto w-28 sm:w-32 h-8 rounded-t-xl bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 border-b border-pink-300/50 relative overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-rose-300 via-pink-400 to-rose-300 opacity-60" />
          </div>

          {/* Middle tier */}
          <div className="mx-auto w-36 sm:w-40 h-10 bg-gradient-to-r from-purple-200 via-purple-100 to-purple-200 border-b border-purple-200/50 relative overflow-hidden">
            <div className="absolute inset-x-0 top-1 h-1.5 flex justify-around px-3">
              {["💕", "✨", "💕", "✨", "💕"].map((e, i) => (
                <span key={i} className="text-[0.5rem]">
                  {e}
                </span>
              ))}
            </div>
            <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-300 opacity-50" />
          </div>

          {/* Bottom tier */}
          <div className="mx-auto w-40 sm:w-48 h-12 rounded-b-xl bg-gradient-to-r from-pink-100 via-white to-pink-100 relative overflow-hidden shadow-md">
            <div className="absolute inset-x-0 top-2 h-1.5 flex justify-around px-4">
              {["🌸", "💖", "🌸", "💖", "🌸", "💖"].map((e, i) => (
                <span key={i} className="text-[0.5rem]">
                  {e}
                </span>
              ))}
            </div>
            <div className="absolute inset-x-0 bottom-0 h-2.5 bg-gradient-to-r from-pink-200 via-rose-200 to-pink-200 opacity-60 rounded-b-xl" />
          </div>

          {/* Plate */}
          <div className="mx-auto w-44 sm:w-52 h-3 bg-gradient-to-b from-gray-200 to-gray-100 rounded-b-full shadow-sm mt-0.5" />
        </div>
      </div>

      {/* Label */}
      <motion.p
        className="font-heading italic text-sm text-pink-300/70 text-center"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        Joyeux anniversaire 🎂
      </motion.p>

      {/* Floating hearts */}
      <div className="flex gap-3">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="text-sm"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          >
            💕
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
