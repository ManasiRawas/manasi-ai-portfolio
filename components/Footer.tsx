"use client";

import Link from "next/link";

// SVG ICONS (stable, no dependencies)
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2C6.5 2 2 6.6 2 12.3c0 4.6 3 8.5 7.2 9.9.5.1.7-.2.7-.5v-1.7c-3 .7-3.6-1.3-3.6-1.3-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 2 .8 2 1.5 2.5 4 1.8 5 1.4.1-.8.4-1.3.7-1.6-2.4-.3-4.9-1.2-4.9-5.3 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 1.2.9-.2 1.8-.3 2.7-.3s1.8.1 2.7.3c2.1-1.5 3-1.2 3-1.2.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 3 0 4.1-2.5 5-4.9 5.3.4.4.8 1.1.8 2.3v3.3c0 .3.2.6.7.5A10.2 10.2 0 0 0 22 12.3C22 6.6 17.5 2 12 2z"
      fill="currentColor"
    />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M4.98 3.5C4.98 4.9 3.87 6 2.5 6S0 4.9 0 3.5 1.12 1 2.5 1 4.98 2.1 4.98 3.5zM0 24h5V7H0v17zM8 7h4.8v2.3h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V24h-5v-8.5c0-2-.1-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.5V24H8V7z"
      fill="currentColor"
    />
  </svg>
);

const ExternalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M14 3h7v7h-2V6.4l-9.3 9.3-1.4-1.4L17.6 5H14V3z"
      fill="currentColor"
    />
    <path
      d="M5 5h6V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-2v6H5V5z"
      fill="currentColor"
    />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-black/40 to-black/90 backdrop-blur-2xl">
      
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 text-center md:flex-row md:text-left">
        
        {/* Left Section */}
        <div>
          <h3 className="text-xl font-semibold text-white tracking-wide">
            Manasi Rawas
          </h3>
          <p className="mt-2 text-sm text-gray-400">
            AI • Data Science • Analytics
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">

          <Link
            href="https://github.com/ManasiRawas"
            target="_blank"
            className="group rounded-full border border-white/10 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
          >
            <GithubIcon />
          </Link>

          <Link
            href="https://www.linkedin.com/in/manasi-rawas-analytics"
            target="_blank"
            className="group rounded-full border border-white/10 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
          >
            <LinkedinIcon />
          </Link>

          <Link
            href="/resume.pdf"
            className="group flex items-center gap-2 rounded-full border border-cyan-400 px-5 py-2 text-sm font-medium text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]"
          >
            Resume
            <ExternalIcon />
          </Link>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Manasi Rawas. Built with Next.js & AI.
      </div>
    </footer>
  );
}