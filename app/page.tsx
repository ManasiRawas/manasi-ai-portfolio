"use client";

import { useState } from "react";

import AIOSProvider from "@/components/AIOSProvider";
import BootScreen from "@/components/BootScreen";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  const [bootCompleted, setBootCompleted] = useState(false);

  if (!bootCompleted) {
    return <BootScreen onComplete={() => setBootCompleted(true)} />;
  }

  return (
    <AIOSProvider>
      <main className="relative flex min-h-screen flex-col">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </AIOSProvider>
  );
}