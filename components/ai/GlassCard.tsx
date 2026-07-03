"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.045]
        backdrop-blur-3xl
        shadow-[0_25px_80px_rgba(0,0,0,.45)]
        ${className}
      `}
    >
      {/* Animated Border Glow */}
      <div className="absolute inset-0 rounded-3xl border border-cyan-400/0 transition-all duration-500 group-hover:border-cyan-400/25" />

      {/* Mouse Reactive Light */}
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background: `
            radial-gradient(
              320px circle at var(--mouse-x) var(--mouse-y),
              rgba(34,211,238,.14),
              rgba(59,130,246,.06) 35%,
              transparent 72%
            )
          `,
        }}
      />

      {/* Moving Glass Reflection */}
      <motion.div
        initial={{ x: "-120%" }}
        whileHover={{ x: "220%" }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-xl"
      />

      {/* Top Edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />

      {/* Bottom Ambient Glow */}
      <div className="absolute left-1/2 bottom-0 h-28 w-3/4 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 viewBox=%220 0 200 200%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%222%22/%3E%3C/filter%3E%3Crect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')",
        }}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}