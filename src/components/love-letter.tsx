"use client";

import { useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/section-header";
import { useConfetti } from "@/components/confetti";
import { LOVE_LETTER } from "@/lib/constants";

export function LoveLetter() {
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
      className="relative z-[1] min-h-svh flex flex-col items-center justify-center px-4 py-20"
      style={{
        background: "linear-gradient(180deg, #080114 0%, #130230 100%)",
      }}
    >
      <SectionHeader
        tag="💌 Rien que pour toi"
        title="Ma"
        highlight="Lettre Pour Toi"
        description="Clique sur l'enveloppe pour ouvrir ta lettre secrète 🤫"
      />

      {!open && (
        <motion.button
          onClick={openEnvelope}
          className="text-center group cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-label="Ouvrir la lettre d'amour"
        >
          <div className="inline-flex flex-col items-center justify-center bg-gradient-to-br from-pink-400 to-purple-500 rounded-md w-72 sm:w-80 py-10 px-8 shadow-[0_20px_60px_rgba(255,107,157,0.35)] relative overflow-hidden group-hover:scale-[1.04] group-hover:shadow-[0_28px_70px_rgba(255,107,157,0.45)] transition-all duration-300">
            <div
              className="absolute inset-x-0 top-0 h-[55%] bg-white/10"
              style={{ clipPath: "polygon(0 0, 100% 0, 50% 85%)" }}
              aria-hidden="true"
            />
            <span className="text-4xl relative z-[1]" aria-hidden="true">
              💌
            </span>
            <span className="font-heading italic text-lg text-white/90 mt-2 relative z-[1]">
              Pour ma chère Alex
            </span>
          </div>
          <motion.p
            className="mt-4 text-pink-200/60 text-sm"
            animate={{ opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✨ Clique pour ouvrir...
          </motion.p>
        </motion.button>
      )}

      {open && (
        <motion.div
          className="max-w-xl w-full rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(255,107,157,0.2)]"
          style={{
            background: "linear-gradient(160deg, #fff9fc, #fdf0f8)",
          }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Wedding photo header */}
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            <Image
              src="/photos/mariage.webp"
              alt="Notre mariage"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#fff9fc] via-transparent to-transparent" />
          </div>

          <div className="px-6 pb-8 md:px-8 -mt-6 relative">
            <h3 className="font-heading text-xl text-pink-500 mb-4">
              Ma chère Alex 💕
            </h3>
            <p
              className="text-sm md:text-base leading-relaxed text-gray-600 whitespace-pre-wrap min-h-[200px]"
              aria-live="polite"
            >
              {text}
            </p>
            <p className="mt-6 font-heading italic text-purple-500">
              Avec tout mon amour, ton Tomy 💜
            </p>
          </div>
        </motion.div>
      )}
    </section>
  );
}
