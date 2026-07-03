"use client";

import { motion } from "framer-motion";
import {
    Mail,
    Download,
    Phone,
    MapPin,
    Code2,
    Link2,
  } from "lucide-react";

  const contacts = [
    {
        icon: Mail,
        title: "Email",
        value: "manasirawas26@gmail.com",
        href: "mailto:manasirawas26@gmail.com",
      },
    {
      icon: Link2,
      title: "LinkedIn",
      value: "linkedin.com/in/manasi-rawas-analytics",
      href: "https://www.linkedin.com/in/manasi-rawas-analytics",
    },
    {
        icon: Code2,
        title: "GitHub",
        value: "github.com/ManasiRawas",
        href: "https://github.com/ManasiRawas",
      },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 98607 92769",
      href: "tel:+919860792769",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Pune, Maharashtra, India",
      href: "https://maps.google.com/?q=Pune,Maharashtra,India",
    },
  ];
export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Let's Build Something Amazing
        </h2>

        <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
          Open to AI, Data Science and Analytics opportunities worldwide.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {contacts.map((item) => {
          const Icon = item.icon;

          return (
            <a
  key={item.title}
  href={item.href}
  className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 hover:border-cyan-400/40 transition-all"
>
              <Icon className="h-8 w-8 text-cyan-400 mb-5" />

              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 break-all">
                {item.value}
              </p>
            </a>
          );
        })}
      </div>

      <div className="text-center">
        <a
          href="/resume.pdf"
          className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3 font-semibold text-black hover:scale-105 transition"
        >
          <Download className="h-5 w-5" />
          Download Resume
        </a>
      </div>
    </section>
  );
}