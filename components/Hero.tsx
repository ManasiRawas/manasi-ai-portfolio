"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-white relative">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0f1c] to-black" />

      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">

        {/* LEFT TEXT */}
        <div className="flex-1 space-y-6 text-center md:text-left">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            I turn data into{" "}
            <span className="text-blue-400">insights, systems & decisions</span>
          </motion.h1>

          <TypeAnimation
            sequence={[
              "Data Analyst",
              1000,
              "BI Engineer",
              1000,
              "AI & ML Engineer",
              1000,
              "Automation Builder",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-xl text-gray-300"
            repeat={Infinity}
          />

          <p className="text-gray-400 max-w-xl">
            3+ years across Data Analytics, BI, Machine Learning & Automation —
            building dashboards, predictive models, and intelligent workflows.
          </p>

          <div className="flex gap-4 justify-center md:justify-start pt-4">
            <a href="#projects" className="px-6 py-3 bg-blue-500 rounded-xl hover:bg-blue-600 transition">
              View Work
            </a>
            <a href="#contact" className="px-6 py-3 border border-white/20 rounded-xl hover:border-white transition">
              Contact
            </a>
          </div>

          <p className="text-sm text-gray-500 pt-4">
            15+ dashboards • 30% automation gain • ML pipelines with 20% accuracy boost
          </p>
        </div>

        {/* RIGHT VISUAL */}
        <div className="flex-1 flex items-center justify-center relative">

          {/* AI CHARACTER BACK */}
          <motion.img
            src="/images/ai-character.png"
            alt="AI Character"
            className="absolute w-[380px] opacity-30 blur-sm"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* PROFILE PHOTO */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative"
          >
            <Image
              src="/images/profile.png"
              alt="Profile"
              width={320}
              height={320}
              className="rounded-2xl border border-white/10 shadow-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}