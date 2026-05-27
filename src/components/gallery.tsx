"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { GALLERY_ITEMS } from "@/lib/constants";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export function Gallery() {
  return (
    <section
      id="gallery"
      className="relative z-[1] min-h-svh flex flex-col items-center justify-center px-4 py-20"
      style={{
        background: "linear-gradient(180deg, #080114 0%, #130230 100%)",
      }}
    >
      <SectionHeader
        tag="📸 Des instants précieux"
        title="Nos"
        highlight="Souvenirs"
        description="Chaque photo raconte une partie de notre histoire 🌟"
      />

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 gap-5 md:gap-7 max-w-3xl w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.08 }}
      >
        {GALLERY_ITEMS.map((item, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            className="group cursor-pointer"
            style={{ "--rot": `${item.rotation}deg` } as React.CSSProperties}
          >
            <div
              className="bg-white p-2.5 pb-10 rounded shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-all duration-300 group-hover:rotate-0 group-hover:scale-105 group-hover:shadow-[0_24px_56px_rgba(255,107,157,0.35)] group-hover:z-10"
              style={{ transform: `rotate(var(--rot))` }}
            >
              <div
                className={`w-full aspect-square rounded-sm flex items-center justify-center text-5xl bg-gradient-to-br ${item.gradient}`}
                role="img"
                aria-label={item.caption}
              >
                {item.emoji}
              </div>
              <p className="text-center mt-2 text-xs text-gray-600 font-semibold">
                {item.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="mt-6 text-xs text-pink-200/40 italic text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        ✨ Tu peux remplacer ces polaroids par vos vraies photos pour encore
        plus de magie !
      </motion.p>
    </section>
  );
}
