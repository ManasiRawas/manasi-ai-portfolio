"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Database, Sparkles, LineChart } from "lucide-react";
import Container from "./Container";

const highlights = [
  {
    icon: BrainCircuit,
    title: "AI Engineering",
    description:
      "Building production-ready AI applications with LLMs, prompt engineering and modern AI workflows.",
  },
  {
    icon: Database,
    title: "Data Science",
    description:
      "Transforming raw data into actionable insights using Python, SQL and Machine Learning.",
  },
  {
    icon: LineChart,
    title: "Business Intelligence",
    description:
      "Creating dashboards and analytics solutions with Power BI and data visualization.",
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    description:
      "Developing intelligent assistants and AI-powered products using the latest foundation models.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#030712] py-28"
    >
      <Container>
        <div className="mx-auto max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="mb-4 text-cyan-400 font-semibold">ABOUT ME</p>

            <h2 className="text-4xl font-black text-white md:text-5xl">
              Building AI That Solves
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Real Business Problems
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              I'm Manasi Rawas, an AI Engineer and Data Scientist passionate
              about building intelligent products using Generative AI,
              Machine Learning, Python, SQL and modern web technologies.
              My goal is to create AI experiences that deliver measurable
              business value while providing exceptional user experiences.
            </p>
          </motion.div>

          <div className="mt-20 grid gap-8 md:grid-cols-2">
            {highlights.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-cyan-500/10 p-4">
                  <Icon className="h-8 w-8 text-cyan-400" />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}