"use client";

import { useState, useCallback, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Delete } from "lucide-react";

const PASSCODE = "0406";
const DIGITS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "del"] as const;
const SESSION_KEY = "at-auth";

function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(SESSION_KEY) === "1";
}

interface LoginGateProps {
  children: ReactNode;
}

export function LoginGate({ children }: LoginGateProps) {
  const [unlocked, setUnlocked] = useState(isAuthenticated);
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  const handleDigit = useCallback(
    (digit: string) => {
      setError(false);
      const next = code + digit;

      if (next.length < PASSCODE.length) {
        setCode(next);
        return;
      }

      if (next === PASSCODE) {
        sessionStorage.setItem(SESSION_KEY, "1");
        setCode(next);
        setTimeout(() => setUnlocked(true), 400);
      } else {
        setCode(next);
        setError(true);
        setTimeout(() => {
          setCode("");
          setError(false);
        }, 600);
      }
    },
    [code],
  );

  const handleDelete = useCallback(() => {
    setError(false);
    setCode((prev) => prev.slice(0, -1));
  }, []);

  if (unlocked) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#080114] px-6">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 45%, rgba(46,8,96,0.5) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 flex flex-col items-center w-full max-w-xs"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <motion.span
          className="text-4xl mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          💕
        </motion.span>

        <h1 className="font-heading text-2xl sm:text-3xl font-bold text-center mb-1">
          <span className="bg-gradient-to-r from-pink-300 to-purple-400 bg-clip-text text-transparent">
            Alex & Tomy
          </span>
        </h1>
        <p className="text-white/60 text-sm mb-8">
          Entre le code pour continuer
        </p>

        {/* Dots */}
        <div
          className="flex gap-3 mb-8"
          role="status"
          aria-label={`${code.length} chiffres saisis sur ${PASSCODE.length}`}
        >
          {Array.from({ length: PASSCODE.length }, (_, i) => (
            <motion.div
              key={i}
              className={`w-3.5 h-3.5 rounded-full border-[1.5px] transition-colors duration-200 ${
                i < code.length
                  ? error
                    ? "bg-red-400 border-red-400"
                    : "bg-pink-400 border-pink-400"
                  : "border-white/30 bg-transparent"
              }`}
              animate={
                error && i < code.length
                  ? { x: [0, -6, 6, -4, 4, 0] }
                  : {}
              }
              transition={{ duration: 0.4 }}
            />
          ))}
        </div>

        {/* Error message */}
        <div className="h-5 mb-4">
          <AnimatePresence>
            {error && (
              <motion.p
                className="text-red-400/80 text-xs"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                Code incorrect
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Digit grid */}
        <div
          className="grid grid-cols-3 gap-3 w-full"
          role="group"
          aria-label="Clavier numérique"
        >
          {DIGITS.map((key, i) => {
            if (key === "") {
              return <div key={i} />;
            }

            if (key === "del") {
              return (
                <button
                  key={i}
                  onClick={handleDelete}
                  disabled={code.length === 0}
                  className="flex items-center justify-center h-14 rounded-xl text-white/60 hover:text-white/90 hover:bg-white/[0.04] active:bg-white/[0.08] transition-all duration-150 disabled:opacity-20 disabled:cursor-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
                  aria-label="Effacer le dernier chiffre"
                >
                  <Delete size={20} />
                </button>
              );
            }

            return (
              <button
                key={i}
                onClick={() => handleDigit(key)}
                disabled={code.length >= PASSCODE.length}
                className="flex items-center justify-center h-14 rounded-xl text-lg font-semibold text-white/90 hover:text-white hover:bg-white/[0.06] active:bg-white/[0.12] active:scale-95 transition-all duration-150 disabled:opacity-30 disabled:cursor-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
                aria-label={`Chiffre ${key}`}
              >
                {key}
              </button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
