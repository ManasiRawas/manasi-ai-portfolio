"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 450,
    damping: 35,
    mass: 0.2,
  });

  const y = useSpring(mouseY, {
    stiffness: 450,
    damping: 35,
    mass: 0.2,
  });

  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if ("ontouchstart" in window) return;

    document.body.style.cursor = "none";

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    const interactiveSelector =
      "a,button,input,textarea,select,[role='button'],.cursor-hover";

    const addHoverEvents = () => {
      const elements = document.querySelectorAll(interactiveSelector);

      elements.forEach((el) => {
        el.addEventListener("mouseenter", handleEnter);
        el.addEventListener("mouseleave", handleLeave);
      });

      return () => {
        elements.forEach((el) => {
          el.removeEventListener("mouseenter", handleEnter);
          el.removeEventListener("mouseleave", handleLeave);
        });
      };
    };

    const handleEnter = () => setHovering(true);
    const handleLeave = () => setHovering(false);

    const cleanup = addHoverEvents();

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    window.addEventListener("mouseenter", enter);

    return () => {
      cleanup();
      document.body.style.cursor = "auto";

      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      window.removeEventListener("mouseenter", enter);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Soft Glow */}
      <motion.div
        style={{ x, y }}
        animate={{
          opacity: visible ? 0.25 : 0,
          scale: hovering ? 2.5 : 1.6,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 22,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9997] h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 blur-2xl"
      />

      {/* Energy Core */}
      <motion.div
        style={{ x, y }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovering ? 1.7 : [1, 1.2, 1],
        }}
        transition={{
          scale: {
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          },
          opacity: {
            duration: 0.15,
          },
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(34,211,238,1)]"
      />

      {/* Inner Spark */}
      <motion.div
        style={{ x, y }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovering ? 0.7 : 1,
        }}
        transition={{
          duration: 0.25,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
      />
    </>
  );
}