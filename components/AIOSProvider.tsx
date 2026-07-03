"use client";

import { ReactNode, useEffect } from "react";

import AmbientBackground from "./ai/AmbientBackground";
import CustomCursor from "./ai/CustomCursor";

interface AIOSProviderProps {
  children: ReactNode;
}

export default function AIOSProvider({
  children,
}: AIOSProviderProps) {
  useEffect(() => {
    let raf = 0;

    const updateMouse = (e: MouseEvent) => {
      cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        document.documentElement.style.setProperty(
          "--mouse-x",
          `${e.clientX}px`
        );

        document.documentElement.style.setProperty(
          "--mouse-y",
          `${e.clientY}px`
        );

        document.documentElement.style.setProperty(
          "--mouse-x-percent",
          `${(e.clientX / window.innerWidth) * 100}%`
        );

        document.documentElement.style.setProperty(
          "--mouse-y-percent",
          `${(e.clientY / window.innerHeight) * 100}%`
        );
      });
    };

    window.addEventListener("mousemove", updateMouse, {
      passive: true,
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", updateMouse);
    };
  }, []);

  return (
    <>
      <AmbientBackground />
      <CustomCursor />

      <div className="relative z-10 min-h-screen">
        {children}
      </div>
    </>
  );
}