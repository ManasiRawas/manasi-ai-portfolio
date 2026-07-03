"use client";

import { motion } from "framer-motion";

export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#020617]" />

      {/* AI OS Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              180deg,
              #020617 0%,
              #031525 28%,
              #062B35 68%,
              #041B2D 100%
            )
          `,
        }}
      />

      {/* Top Cyan Atmosphere */}
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-48 -top-48 h-[750px] w-[750px] rounded-full bg-cyan-400/12 blur-[180px]"
      />

      {/* Bottom Blue Atmosphere */}
      <motion.div
        animate={{
          x: [0, -140, 80, 0],
          y: [0, 90, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-56 -right-56 h-[800px] w-[800px] rounded-full bg-sky-500/10 blur-[200px]"
      />

      {/* Mouse Reactive AI Light */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              420px circle at var(--mouse-x) var(--mouse-y),
              rgba(34,211,238,.18),
              rgba(59,130,246,.08) 35%,
              transparent 72%
            )
          `,
        }}
      />

      {/* Ambient Center */}
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/6 blur-[170px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.10) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 viewBox=%220 0 200 200%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%222%22/%3E%3C/filter%3E%3Crect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.88)_100%)]" />
    </div>
  );
}