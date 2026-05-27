"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { useConfetti } from "@/components/confetti";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { BUCKET_LIST } from "@/lib/constants";
import { Check } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function BucketList() {
  const [checked, setChecked] = useLocalStorage<Record<number, boolean>>(
    "at-bucket",
    {},
  );
  const launchConfetti = useConfetti();

  const toggle = useCallback(
    (index: number) => {
      setChecked((prev) => {
        const next = { ...prev, [index]: !prev[index] };
        if (next[index]) launchConfetti(15);
        return next;
      });
    },
    [setChecked, launchConfetti],
  );

  const doneCount = Object.values(checked).filter(Boolean).length;

  return (
    <section
      id="bucket"
      className="relative z-[1] min-h-svh flex flex-col items-center justify-center px-4 py-20"
      style={{
        background: "linear-gradient(180deg, #130230 0%, #080114 100%)",
      }}
    >
      <SectionHeader
        tag="🌍 Notre futur ensemble"
        title="Nos"
        highlight="Rêves à Réaliser"
        description="Cochez ensemble chaque aventure que vous vivez ! ✅"
      />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.05 }}
      >
        {BUCKET_LIST.map((item, i) => {
          const done = !!checked[i];
          return (
            <motion.div key={i} variants={itemVariants}>
              <Card
                onClick={() => toggle(i)}
                role="checkbox"
                aria-checked={done}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle(i);
                  }
                }}
                className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-400 hover:shadow-[0_8px_24px_rgba(255,107,157,0.14)] ${
                  done
                    ? "border-amber-400 bg-amber-400/[0.07]"
                    : "bg-white/5 border-pink-500/15 backdrop-blur-xl"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-300 ${
                    done
                      ? "bg-amber-400 border-amber-400 text-gray-900"
                      : "border-pink-500/25"
                  }`}
                >
                  {done && <Check size={12} strokeWidth={3} />}
                </div>
                <span className="text-lg" aria-hidden="true">
                  {item.emoji}
                </span>
                <span
                  className={`text-sm transition-all ${
                    done ? "line-through text-pink-200/50" : "text-white/90"
                  }`}
                >
                  {item.label}
                </span>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.p
        className="mt-6 text-pink-200/60 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="font-heading text-lg text-amber-400">
          {doneCount}
        </span>{" "}
        rêves accomplis sur{" "}
        <span className="font-heading text-lg text-amber-400">
          {BUCKET_LIST.length}
        </span>{" "}
        🌟
      </motion.p>
    </section>
  );
}
