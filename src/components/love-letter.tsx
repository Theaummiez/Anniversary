"use client";

import { useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Lock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { AnniversaryCake } from "@/components/anniversary-cake";
import { useConfetti } from "@/components/confetti";
import { useCountdown } from "@/hooks/use-countdown";
import { LOVE_LETTER, ANNIVERSARY_DATE } from "@/lib/constants";

function isUnlockDate(): boolean {
  return new Date() >= ANNIVERSARY_DATE;
}

const UNITS = [
  { key: "days", label: "J" },
  { key: "hours", label: "H" },
  { key: "minutes", label: "M" },
  { key: "seconds", label: "S" },
] as const;

function MiniCountdown() {
  const cd = useCountdown(ANNIVERSARY_DATE);

  return (
    <div
      className="flex gap-2 justify-center"
      role="group"
      aria-label="Compte à rebours vers le 4 juin"
    >
      {UNITS.map(({ key, label }) => {
        const value = cd[key as keyof typeof cd];
        const display =
          key === "days" ? String(value) : String(value).padStart(2, "0");
        return (
          <div key={key} className="text-center">
            <span className="block font-heading text-2xl sm:text-3xl font-bold bg-gradient-to-b from-pink-300 to-purple-400 bg-clip-text text-transparent tabular-nums leading-none">
              {display}
            </span>
            <span className="block text-[0.55rem] text-white/40 uppercase tracking-wider mt-1">
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function LoveLetter() {
  const [unlocked] = useState(isUnlockDate);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const launchConfetti = useConfetti();

  const openEnvelope = useCallback(() => {
    if (open) return;
    setOpen(true);
    launchConfetti(22);

    let i = 0;
    function type() {
      if (i < LOVE_LETTER.length) {
        setText(LOVE_LETTER.slice(0, i + 1));
        i++;
        const id = setTimeout(type, 22);
        timeoutsRef.current.push(id);
      }
    }
    const id = setTimeout(type, 400);
    timeoutsRef.current.push(id);
  }, [open, launchConfetti]);

  return (
    <section
      id="letter"
      className="relative z-[1] min-h-svh flex flex-col items-center justify-center px-6 py-24"
      style={{
        background: "linear-gradient(180deg, #080114 0%, #130230 100%)",
      }}
    >
      <SectionHeader
        tag="💌 Rien que pour toi"
        title="Ma"
        highlight="Lettre Pour Toi"
        description={
          unlocked
            ? "Clique sur l'enveloppe pour ouvrir ta lettre secrète 🤫"
            : "Patience... Cette lettre se déverrouille le 4 juin 💕"
        }
      />

      {/* === LOCKED STATE — before June 4 === */}
      {!unlocked && (
        <motion.div
          className="flex flex-col items-center gap-8 max-w-md w-full"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Locked envelope */}
          <div className="relative w-72 sm:w-80 py-12 px-8 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(255,107,157,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400/30 via-purple-500/30 to-purple-600/30" />
            <div
              className="absolute inset-x-0 top-0 h-[55%] bg-white/[0.04]"
              style={{ clipPath: "polygon(0 0, 100% 0, 50% 80%)" }}
              aria-hidden="true"
            />
            <div className="relative z-[1] flex flex-col items-center">
              <Lock size={32} className="text-white/30 mb-2" />
              <span className="text-4xl grayscale opacity-50" aria-hidden="true">
                💌
              </span>
              <span className="font-heading italic text-base text-white/40 mt-3">
                Pour ma chère Alex
              </span>
            </div>
          </div>

          {/* Patience message */}
          <Card className="bg-white/[0.03] border-white/[0.06] p-6 text-center w-full">
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Cette lettre d&apos;amour est un cadeau pour notre anniversaire.
              <br />
              Elle se déverrouillera automatiquement le{" "}
              <span className="text-pink-400 font-semibold">4 juin 2026</span>{" "}
              💕
            </p>
            <MiniCountdown />
            <motion.p
              className="text-white/30 text-xs mt-5 italic"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Sois patiente mon amour... ça vaut le coup d&apos;attendre ✨
            </motion.p>
          </Card>

          {/* Locked video placeholder */}
          <Card className="bg-white/[0.03] border-white/[0.06] p-6 text-center w-full">
            <div className="flex flex-col items-center gap-3">
              <Lock size={24} className="text-white/30" />
              <p className="text-white/50 text-sm">
                🎬 Une surprise vidéo t&apos;attend aussi le 4 juin...
              </p>
            </div>
          </Card>
        </motion.div>
      )}

      {/* === UNLOCKED STATE — June 4 and after === */}
      {unlocked && !open && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={openEnvelope}
            className="group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#080114] rounded-2xl"
            aria-label="Ouvrir la lettre d'amour"
          >
            <div className="relative w-72 sm:w-80 py-12 px-8 rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_32px_80px_rgba(255,107,157,0.3)] shadow-[0_20px_60px_rgba(255,107,157,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-pink-500 to-purple-600" />
              <div
                className="absolute inset-x-0 top-0 h-[55%] bg-white/[0.08]"
                style={{ clipPath: "polygon(0 0, 100% 0, 50% 80%)" }}
                aria-hidden="true"
              />
              <div className="relative z-[1] flex flex-col items-center">
                <span className="text-5xl" aria-hidden="true">
                  💌
                </span>
                <span className="font-heading italic text-lg text-white mt-3">
                  Pour ma chère Alex
                </span>
              </div>
            </div>

            <motion.p
              className="mt-5 text-white/50 text-xs tracking-wider uppercase"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Clique pour ouvrir ✨
            </motion.p>
          </button>
        </motion.div>
      )}

      {unlocked && open && (
        <div className="flex flex-col items-center gap-10 max-w-7xl w-full">
          {/* Letter + Cake row */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 w-full">
            {/* Letter */}
            <motion.div
              className="flex-1 max-w-xl w-full rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(255,107,157,0.15)]"
              style={{
                background: "linear-gradient(160deg, #fff9fc, #fdf0f8)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-pink-100">
                <Image
                  src="/photos/mariage.webp"
                  alt="Notre mariage"
                  fill
                  sizes="(max-width: 1024px) 100vw, 580px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#fff9fc] via-transparent to-transparent" />
              </div>

              <div className="px-6 pb-8 md:px-8 -mt-4 relative">
                <h3 className="font-heading text-xl text-pink-500 mb-4">
                  Ma chère Alex 💕
                </h3>
                <p
                  className="text-base leading-[1.9] text-gray-600 whitespace-pre-wrap min-h-[200px]"
                  aria-live="polite"
                >
                  {text}
                </p>
                <p className="mt-8 font-heading italic text-purple-400 text-lg">
                  Avec tout mon amour, ton Tomy 💜
                </p>
              </div>
            </motion.div>

            {/* Cake */}
            <div className="flex-1 max-w-xl w-full lg:sticky lg:top-32">
              <AnniversaryCake />
            </div>
          </div>

          {/* Video section */}
          <motion.div
            className="max-w-2xl w-full"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-white/[0.03] border-white/[0.06] p-6 md:p-8">
              <h3 className="font-heading text-lg text-center text-white/80 mb-4">
                🎬 Une vidéo rien que pour toi
              </h3>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-white/[0.02] border border-white/[0.06] flex items-center justify-center">
                {/* Placeholder — video will be added here */}
                <div className="flex flex-col items-center gap-3 text-white/40">
                  <span className="text-4xl">🎥</span>
                  <p className="text-sm italic">Vidéo à venir...</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      )}
    </section>
  );
}
