import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manasi Rawas | AI & Data Analytics Portfolio",
  description:
    "AI, Data Science & Analytics Portfolio showcasing ML, Python, SQL, Power BI, and end-to-end AI projects.",

  metadataBase: new URL("https://manasi-ai-portfolio.vercel.app"),

  openGraph: {
    title: "Manasi Rawas | AI Portfolio",
    description: "AI + Data Science Portfolio built with Next.js",
    url: "https://manasi-ai-portfolio.vercel.app",
    siteName: "Manasi Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}