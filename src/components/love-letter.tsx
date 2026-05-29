"use client";

import { useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/section-header";
import { AnniversaryCake } from "@/components/anniversary-cake";
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
      className="relative z-[1] min-h-svh flex flex-col items-center justify-center px-6 py-24"
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
              className="mt-5 text-white/40 text-xs tracking-wider uppercase"
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

      {open && (
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 max-w-5xl w-full">
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
                className="text-sm md:text-base leading-[1.8] text-gray-500 whitespace-pre-wrap min-h-[200px]"
                aria-live="polite"
              >
                {text}
              </p>
              <p className="mt-8 font-heading italic text-purple-400 text-lg">
                Avec tout mon amour, ton Tomy 💜
              </p>
            </div>
          </motion.div>

          {/* Anniversary cake */}
          <div className="lg:sticky lg:top-32 shrink-0">
            <AnniversaryCake />
          </div>
        </div>
      )}
    </section>
  );
}
