"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { TIMELINE_EVENTS } from "@/lib/constants";

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
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
      className="relative z-[1] min-h-svh flex flex-col items-center justify-center px-4 py-24"
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
          className="absolute left-1/2 top-2 bottom-2 w-0.5 -translate-x-1/2 hidden md:block"
          style={{
            background:
              "linear-gradient(180deg, transparent, #ff6b9d 20%, #c44dff 80%, transparent)",
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
              transition={{ duration: 0.65, delay: i * 0.1 }}
              className={`flex items-center gap-4 mb-10 ${
                isEven ? "md:flex-row-reverse" : ""
              } flex-col md:flex-row`}
            >
              <Card className="flex-1 bg-white/5 border-pink-500/15 backdrop-blur-xl overflow-hidden hover:border-pink-400 hover:shadow-[0_0_32px_rgba(255,107,157,0.14)] transition-all duration-300 group">
                {/* Photo with skeleton */}
                {event.photo && (
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-white/5">
                    {!loaded.has(i) && (
                      <div className="absolute inset-0 animate-pulse bg-white/5" />
                    )}
                    <Image
                      src={event.photo}
                      alt={event.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      onLoad={() => markLoaded(i)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute bottom-2 left-3 text-3xl drop-shadow-lg">
                      {event.emoji}
                    </span>
                  </div>
                )}

                <div className="p-5">
                  {!event.photo && (
                    <span className="text-2xl block mb-1" aria-hidden="true">
                      {event.emoji}
                    </span>
                  )}
                  <p className="text-[0.68rem] text-amber-400 uppercase tracking-wider">
                    {event.date}
                  </p>
                  <h3 className="font-heading text-base md:text-lg font-bold mt-1 mb-1.5">
                    {event.title}
                  </h3>
                  <p className="text-sm text-pink-200/70 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </Card>

              {/* Dot */}
              <div
                className="hidden md:block w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 border-[3px] border-[#080114] shadow-[0_0_12px_rgba(255,107,157,0.6)] shrink-0 z-[1]"
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
