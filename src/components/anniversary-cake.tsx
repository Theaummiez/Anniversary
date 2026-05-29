"use client";

import { motion } from "framer-motion";

const CANDLES = [0, 1, 2, 3, 4];

export function AnniversaryCake() {
  return (
    <motion.div
      className="flex flex-col items-center gap-6 w-full max-w-xl"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      aria-hidden="true"
    >
      <div className="relative w-full">
        {/* Candles — 5 for 5 years */}
        <div className="flex justify-center gap-8 sm:gap-12 mb-2">
          {CANDLES.map((i) => (
            <motion.span
              key={i}
              className="text-2xl sm:text-3xl"
              animate={{
                scale: [1, 1.25, 1],
                rotate: [i % 2 === 0 ? -4 : 4, i % 2 === 0 ? 4 : -4, i % 2 === 0 ? -4 : 4],
              }}
              transition={{
                duration: 0.9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15,
              }}
            >
              🕯️
            </motion.span>
          ))}
        </div>

        {/* Cake body — full width */}
        <div className="w-full">
          {/* Top tier */}
          <div className="mx-auto w-[65%] h-12 sm:h-14 rounded-t-2xl bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 relative overflow-hidden">
            <div className="absolute inset-x-0 top-2 flex justify-around px-6">
              {["✨", "💕", "✨", "💕", "✨", "💕", "✨"].map((e, i) => (
                <span key={i} className="text-xs sm:text-sm">{e}</span>
              ))}
            </div>
            <div className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-r from-rose-300 via-pink-400 to-rose-300 opacity-60" />
          </div>

          {/* Middle tier */}
          <div className="mx-auto w-[82%] h-14 sm:h-16 bg-gradient-to-r from-purple-200 via-purple-100 to-purple-200 relative overflow-hidden">
            <div className="absolute inset-x-0 top-3 flex justify-around px-8">
              {["🌹", "💖", "🌸", "💖", "🌹", "💖", "🌸", "💖", "🌹"].map((e, i) => (
                <span key={i} className="text-xs sm:text-sm">{e}</span>
              ))}
            </div>
            <div className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-300 opacity-50" />
          </div>

          {/* Bottom tier */}
          <div className="mx-auto w-full h-16 sm:h-20 rounded-b-2xl bg-gradient-to-r from-pink-100 via-white to-pink-100 relative overflow-hidden shadow-lg">
            <div className="absolute inset-x-0 top-3 flex justify-around px-6">
              {["🌸", "💕", "✨", "💖", "🌸", "💕", "✨", "💖", "🌸", "💕", "✨"].map((e, i) => (
                <span key={i} className="text-xs sm:text-sm">{e}</span>
              ))}
            </div>
            {/* "5 ans" text on cake */}
            <div className="absolute inset-x-0 bottom-3 sm:bottom-4 text-center">
              <span className="font-heading italic text-pink-400/80 text-sm sm:text-base font-bold">
                5 ans 💕
              </span>
            </div>
          </div>

          {/* Plate */}
          <div className="mx-auto w-[105%] max-w-full h-4 bg-gradient-to-b from-gray-200 to-gray-100 rounded-b-full shadow-sm mt-0.5" />
        </div>
      </div>

      {/* Label */}
      <motion.p
        className="font-heading italic text-base sm:text-lg text-pink-300/70 text-center"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        Joyeux anniversaire mon amour 🎂
      </motion.p>

      {/* Floating hearts */}
      <div className="flex gap-4">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.span
            key={i}
            className="text-base"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            💕
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
