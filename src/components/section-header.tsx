"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  tag: string;
  title: string;
  highlight: string;
  description: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function SectionHeader({
  tag,
  title,
  highlight,
  description,
}: SectionHeaderProps) {
  return (
    <motion.div
      className="flex flex-col items-center text-center mb-12 md:mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.p
        variants={fadeUp}
        className="text-xs sm:text-sm text-pink-300/70 tracking-[0.15em] uppercase mb-3"
      >
        {tag}
      </motion.p>

      <motion.h2
        variants={fadeUp}
        className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-tight"
      >
        {title}{" "}
        <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          {highlight}
        </span>
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="text-white/50 text-sm md:text-base mt-4 max-w-md leading-relaxed"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
