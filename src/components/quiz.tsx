"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { useConfetti } from "@/components/confetti";
import { QUIZ_QUESTIONS } from "@/lib/constants";
import { RotateCcw } from "lucide-react";

type QuizState =
  | { phase: "question"; index: number; score: number }
  | { phase: "answered"; index: number; score: number; picked: number }
  | { phase: "done"; score: number };

export function Quiz() {
  const [state, setState] = useState<QuizState>({
    phase: "question",
    index: 0,
    score: 0,
  });
  const launchConfetti = useConfetti();

  const pick = useCallback(
    (optionIndex: number) => {
      if (state.phase !== "question") return;
      const q = QUIZ_QUESTIONS[state.index];
      const correct = optionIndex === q.answerIndex;
      const newScore = state.score + (correct ? 1 : 0);

      if (correct) launchConfetti(18);

      setState({
        phase: "answered",
        index: state.index,
        score: newScore,
        picked: optionIndex,
      });

      setTimeout(() => {
        const next = state.index + 1;
        if (next >= QUIZ_QUESTIONS.length) {
          setState({ phase: "done", score: newScore });
          if (newScore === QUIZ_QUESTIONS.length) launchConfetti(60);
        } else {
          setState({ phase: "question", index: next, score: newScore });
        }
      }, 2200);
    },
    [state, launchConfetti],
  );

  const restart = useCallback(() => {
    setState({ phase: "question", index: 0, score: 0 });
  }, []);

  const currentIndex =
    state.phase === "done" ? QUIZ_QUESTIONS.length : state.index;
  const currentQ =
    state.phase !== "done" ? QUIZ_QUESTIONS[state.index] : null;

  return (
    <section
      id="quiz"
      className="relative z-[1] min-h-svh flex flex-col items-center justify-center px-4 py-24"
      style={{
        background: "linear-gradient(180deg, #130230 0%, #080114 100%)",
      }}
    >
      <SectionHeader
        tag="🧠 On verra bien !"
        title="Tu me connais"
        highlight="par cœur ?"
        description="Un petit quiz pour tester ta connaissance de notre histoire 💕"
      />

      <Card className="bg-white/5 border-pink-500/15 backdrop-blur-xl max-w-xl w-full p-6 md:p-8">
        {/* Progress dots */}
        <div
          className="flex gap-1.5 mb-6"
          role="progressbar"
          aria-valuenow={currentIndex}
          aria-valuemin={0}
          aria-valuemax={QUIZ_QUESTIONS.length}
          aria-label={`Question ${currentIndex} sur ${QUIZ_QUESTIONS.length}`}
        >
          {QUIZ_QUESTIONS.map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-1 rounded-full transition-colors duration-300 ${
                i < currentIndex
                  ? "bg-gradient-to-r from-pink-400 to-purple-500"
                  : "bg-white/10"
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {state.phase === "done" ? (
            <ScoreScreen
              key="score"
              score={state.score}
              total={QUIZ_QUESTIONS.length}
              onRestart={restart}
            />
          ) : (
            <motion.div
              key={state.index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-heading text-lg md:text-xl font-bold leading-snug mb-5">
                {currentQ?.question}
              </h3>

              <div className="grid gap-2.5" role="group" aria-label="Options">
                {currentQ?.options.map((opt, i) => {
                  let variant =
                    "bg-white/[0.04] border-white/10 hover:border-pink-400 hover:bg-pink-500/10 hover:translate-x-1.5";

                  if (state.phase === "answered") {
                    if (i === currentQ.answerIndex) {
                      variant = "border-green-500 bg-green-500/15";
                    } else if (i === state.picked) {
                      variant = "border-red-500 bg-red-500/15";
                    } else {
                      variant = "bg-white/[0.04] border-white/10 opacity-50";
                    }
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => pick(i)}
                      disabled={state.phase === "answered"}
                      className={`text-left border rounded-xl px-4 py-3 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/50 ${variant} disabled:cursor-default`}
                    >
                      <span className="line-clamp-2">{opt}</span>
                    </button>
                  );
                })}
              </div>

              <p
                className="mt-4 text-sm min-h-[1.5rem] text-pink-200/60 line-clamp-2"
                aria-live="polite"
              >
                {state.phase === "answered" && currentQ
                  ? (state.picked === currentQ.answerIndex ? "✅ " : "❌ ") +
                    currentQ.explanation
                  : ""}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </section>
  );
}

function ScoreScreen({
  score,
  total,
  onRestart,
}: {
  score: number;
  total: number;
  onRestart: () => void;
}) {
  const pct = Math.round((score / total) * 100);

  let message: string;
  let emoji: string;
  if (pct === 100) {
    message = "Parfait ! Tu me connais par cœur ! 🥰";
    emoji = "🏆";
  } else if (pct >= 80) {
    message = "Excellent ! Tu es vraiment attentif(ve) 💕";
    emoji = "⭐";
  } else if (pct >= 60) {
    message = "Pas mal ! On doit passer encore plus de temps ensemble 😄";
    emoji = "🌸";
  } else {
    message =
      "Oh là là ! On a encore plein de choses à découvrir l'un sur l'autre 😂";
    emoji = "🎮";
  }

  return (
    <motion.div
      className="text-center py-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <span className="text-5xl block mb-3" aria-hidden="true">
        {emoji}
      </span>
      <span
        className="block font-heading text-6xl font-bold bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent"
        aria-label={`Score : ${score} sur ${total}`}
      >
        {score}/{total}
      </span>
      <p className="text-muted-foreground mt-3 text-sm">{message}</p>
      <Button
        onClick={onRestart}
        className="mt-5 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 focus-visible:ring-pink-500/50"
      >
        <RotateCcw size={14} className="mr-1.5" />
        Rejouer
      </Button>
    </motion.div>
  );
}
