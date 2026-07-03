"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface BootScreenProps {
  onComplete: () => void;
}

const bootLogs = [
  "Initializing Manasi AI OS...",
  "Loading Neural Interface...",
  "Connecting AI Modules...",
  "Authenticating Recruiter Access...",
  "Rendering Experience Engine...",
  "Launching Portfolio Environment...",
];

export default function BootScreen({
  onComplete,
}: BootScreenProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < bootLogs.length) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 450);

      return () => clearTimeout(timer);
    }

    const finish = setTimeout(() => {
      onComplete();
    }, 1200);

    return () => clearTimeout(finish);
  }, [index, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0f172a_0%,#020617_55%,black_100%)]" />

        <div className="relative z-10 w-full max-w-3xl px-8">
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-5xl font-bold tracking-[0.35em] text-cyan-400"
          >
            MANASI AI OS
          </motion.h1>

          <div className="rounded-xl border border-cyan-500/20 bg-black/40 p-6 backdrop-blur-md">
            {bootLogs.map((line, i) => (
              <motion.p
                key={line}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: i <= index ? 1 : 0,
                }}
                className="mb-2 font-mono text-sm text-cyan-300"
              >
                {i < index ? "✓" : "•"} {line}
              </motion.p>
            ))}

            <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-cyan-400"
                initial={{ width: "0%" }}
                animate={{
                  width: `${Math.min((index / bootLogs.length) * 100, 100)}%`,
                }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}