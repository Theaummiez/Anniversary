"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { TIMELINE_EVENTS } from "@/lib/constants";

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Timeline() {
  const [loaded, setLoaded] = useState<Set<number>>(new Set());

  const markLoaded = useCallback((i: number) => {
    setLoaded((prev) => new Set(prev).add(i));
  }, []);

  return (
    <section
      id="timeline"
      className="relative z-[1] min-h-svh flex flex-col items-center justify-center px-6 py-24"
      style={{
        background: "linear-gradient(180deg, #130230 0%, #080114 100%)",
      }}
    >
      <SectionHeader
        tag="📖 Nos moments inoubliables"
        title="Notre"
        highlight="Histoire"
        description="Les pages de notre plus beau livre d'amour ✨"
      />

      <div className="relative max-w-3xl w-full">
        {/* Center line */}
        <div
          className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(255,107,157,0.3) 15%, rgba(196,77,255,0.3) 85%, transparent)",
          }}
          aria-hidden="true"
        />

        {TIMELINE_EVENTS.map((event, i) => {
          const isEven = i % 2 === 1;

          return (
            <motion.div
              key={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`flex items-center gap-5 mb-8 md:mb-10 ${
                isEven ? "md:flex-row-reverse" : ""
              } flex-col md:flex-row`}
            >
              <Card className="flex-1 bg-white/[0.03] border-white/[0.06] backdrop-blur-xl overflow-hidden hover:border-pink-500/20 hover:shadow-[0_8px_32px_rgba(255,107,157,0.08)] transition-all duration-300 group">
                {/* Photo */}
                {event.photo && (
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-white/[0.02]">
                    {!loaded.has(i) && (
                      <div className="absolute inset-0 animate-pulse bg-white/[0.04]" />
                    )}
                    <Image
                      src={event.photo}
                      alt={event.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                      onLoad={() => markLoaded(i)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute bottom-3 left-4 text-2xl drop-shadow-lg">
                      {event.emoji}
                    </span>
                  </div>
                )}

                <div className="p-5 md:p-6">
                  {!event.photo && (
                    <div className="w-full aspect-[16/10] bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-transparent flex items-center justify-center">
                      <span className="text-5xl" aria-hidden="true">
                        {event.emoji}
                      </span>
                    </div>
                  )}
                  <p className="text-[0.65rem] text-amber-400/90 uppercase tracking-[0.12em] font-medium">
                    {event.date}
                  </p>
                  <h3 className="font-heading text-lg md:text-xl font-bold mt-1.5 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </Card>

              {/* Dot — larger and more visible */}
              <div
                className="hidden md:flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 border-[3px] border-[#0d0120] shadow-[0_0_16px_rgba(255,107,157,0.4)] shrink-0 z-[1]"
                aria-hidden="true"
              />

              <div className="flex-1 hidden md:block" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
