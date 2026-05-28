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
  hidden: { opacity: 0, y: 12 },
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
      className="relative z-[1] min-h-svh flex flex-col items-center justify-center px-6 py-24"
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
        className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-2xl w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.04 }}
      >
        {BUCKET_LIST.map((item, i) => {
          const done = !!checked[i];
          return (
            <motion.div key={i} variants={itemVariants}>
              <Card
                onClick={() => toggle(i)}
                role="checkbox"
                aria-checked={done}
                aria-label={`${item.label} — ${done ? "fait" : "à faire"}`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle(i);
                  }
                }}
                className={`flex items-center gap-3 px-4 py-3.5 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 ${
                  done
                    ? "border-amber-400/30 bg-amber-400/[0.05]"
                    : "bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12]"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border-[1.5px] flex items-center justify-center shrink-0 transition-all duration-200 ${
                    done
                      ? "bg-amber-400 border-amber-400 text-gray-900"
                      : "border-white/20"
                  }`}
                  aria-hidden="true"
                >
                  {done && <Check size={10} strokeWidth={3} />}
                </div>
                <span className="text-base shrink-0" aria-hidden="true">
                  {item.emoji}
                </span>
                <span
                  className={`text-sm transition-all truncate ${
                    done
                      ? "line-through text-white/30"
                      : "text-white/70"
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
        className="mt-10 text-white/30 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="font-heading text-lg text-amber-400/80 tabular-nums">
          {doneCount}
        </span>
        <span className="text-white/20"> / </span>
        <span className="font-heading text-lg text-amber-400/80 tabular-nums">
          {BUCKET_LIST.length}
        </span>{" "}
        rêves accomplis 🌟
      </motion.p>
    </section>
  );
}
