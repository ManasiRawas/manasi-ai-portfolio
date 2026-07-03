"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#030712] text-white">

      {/* ================= Background ================= */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#071122] to-black" />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute -top-52 -left-40 h-[700px] w-[700px] rounded-full bg-cyan-500/20 blur-[140px]"
        />

        <motion.div
          animate={{
            scale: [1.15, 1, 1.15],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute -bottom-44 -right-32 h-[650px] w-[650px] rounded-full bg-blue-600/20 blur-[140px]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:35px_35px] opacity-20" />
      </div>

      {/* ================= Main ================= */}

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-16 px-6 py-24 lg:flex-row">

        {/* ================= LEFT ================= */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex-1 text-center lg:text-left"
        >

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .3 }}
            className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300"
          >
            ✨ AI • Data • Automation
          </motion.div>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-7xl">

            Hi, I'm{" "}

            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Manasi Rawas
            </span>

          </h1>

          <div className="mt-6 text-2xl font-semibold text-gray-300 md:text-3xl">

            <TypeAnimation
              sequence={[
                "Data Analyst",
                1400,
                "Business Intelligence Engineer",
                1400,
                "AI & Machine Learning Engineer",
                1400,
                "Automation Builder",
                1400,
              ]}
              wrapper="span"
              repeat={Infinity}
              speed={45}
            />

          </div>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">

            I build intelligent dashboards, predictive ML systems,
            automation workflows and data products that transform
            raw information into measurable business impact.

          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: .95 }}
              href="#projects"
              className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
            >
              View Projects
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: .95 }}
              href="#contact"
              className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold backdrop-blur-lg transition hover:border-cyan-400"
            >
              Contact Me
            </motion.a>

          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 text-center lg:text-left">

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                3+
              </h3>
              <p className="text-gray-400">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                15+
              </h3>
              <p className="text-gray-400">
                Dashboards
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                20%
              </h3>
              <p className="text-gray-400">
                ML Improvement
              </p>
            </div>

          </div>

        </motion.div>

        {/* ================= RIGHT ================= */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .9 }}
          className="relative flex flex-1 items-center justify-center"
        >

          <motion.img
            src="/images/ai-character.png"
            alt="AI Character"
            animate={{
              y: [0, -20, 0],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="absolute w-[460px] opacity-35 blur-[1px]"
          />

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="relative"
          >

            <div className="absolute inset-0 rounded-3xl bg-cyan-500/20 blur-3xl" />

            <Image
              src="/images/profile.png"
              alt="Manasi Rawas"
              width={360}
              height={360}
              priority
              className="relative rounded-3xl border border-white/10 shadow-[0_0_60px_rgba(34,211,238,0.25)]"
            />

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}