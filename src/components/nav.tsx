"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export function Nav() {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((p) => !p), []);

  return (
    <nav
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95vw]"
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="mt-3 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl px-4 py-2 flex items-center gap-1">
        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold text-white/60 hover:text-pink-400 focus-visible:text-pink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/50 transition-colors px-2.5 py-1.5 rounded-lg hover:bg-white/5"
            >
              <span aria-hidden="true">{link.emoji}</span>{" "}
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={toggle}
          className="md:hidden p-1.5 text-white/60 hover:text-pink-400 focus-visible:text-pink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/50 rounded-lg transition-colors"
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-1 rounded-xl border border-white/10 bg-black/80 backdrop-blur-xl p-2"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-sm text-white/70 hover:text-pink-400 focus-visible:text-pink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/50 transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
              >
                <span aria-hidden="true">{link.emoji}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
