"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  tag: string;
  title: string;
  highlight: string;
  description: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
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
      className="flex flex-col items-center text-center mb-10 md:mb-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.12 }}
    >
      <motion.p
        variants={fadeUp}
        className="text-sm text-muted-foreground tracking-wider mb-2"
      >
        {tag}
      </motion.p>

      <motion.h2
        variants={fadeUp}
        className="font-heading text-3xl md:text-5xl font-bold tracking-tight"
      >
        {title}{" "}
        <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          {highlight}
        </span>
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="text-muted-foreground text-sm md:text-base mt-3 max-w-md"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
