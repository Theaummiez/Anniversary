"use client";

import { useEffect, useState, useCallback } from "react";
import { Bell, BellRing } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function getInitialPermission(): NotificationPermission | "unsupported" {
  if (typeof window === "undefined") return "default";
  if (!("Notification" in window) || !("serviceWorker" in navigator)) return "unsupported";
  return Notification.permission;
}

async function registerSW() {
  try {
    const reg = await navigator.serviceWorker.register("/sw.js");
    reg.active?.postMessage("check-anniversary");
  } catch {
    /* SW registration failed */
  }
}

export function NotificationSetup() {
  const [permission, setPermission] = useState<NotificationPermission | "unsupported">(getInitialPermission);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (permission === "unsupported" || permission === "denied") return;
    if (permission === "granted") {
      registerSW();
      return;
    }
    const timer = setTimeout(() => setShowBanner(true), 5000);
    return () => clearTimeout(timer);
  }, [permission]);

  const requestPermission = useCallback(async () => {
    const result = await Notification.requestPermission();
    setPermission(result);
    setShowBanner(false);
    if (result === "granted") registerSW();
  }, []);

  if (permission === "unsupported" || permission === "granted" || permission === "denied") {
    return null;
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          className="fixed bottom-20 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-50"
        >
          <div className="bg-[#1a0a30] border border-white/10 rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shrink-0">
                <BellRing size={16} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-white/90 mb-1">
                  🔔 Ne rate pas le 4 juin !
                </p>
                <p className="text-xs text-white/50 leading-relaxed mb-3">
                  Active les notifications pour être prévenue quand ta lettre d&apos;amour se déverrouille 💌
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={requestPermission}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-pink-500 hover:bg-pink-400 text-white transition-colors"
                  >
                    <Bell size={12} className="inline mr-1" />
                    Activer
                  </button>
                  <button
                    onClick={() => setShowBanner(false)}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg text-white/40 hover:text-white/60 transition-colors"
                  >
                    Plus tard
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
