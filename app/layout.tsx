import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree, Cinzel } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "../components/layout/SmoothScroll";

// Modern sans-serif for readable tech descriptions
const figtree = Figtree({ subsets: ['latin'], variable: '--font-sans' });

// Fantasy elegant serif for headings
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-serif' }); 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Realm of Ar-Cryoyohan",
  description: "The digital portfolio of Cyril John T. Ypil, a data-driven strategist, proactive problem solver, and Magna Cum Laude IT graduate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // Added 'dark' class to lock in the dark fantasy theme
      className={cn(
        "h-full dark antialiased", 
        geistSans.variable, 
        geistMono.variable, 
        figtree.variable,
        cinzel.variable,
        "font-sans"
      )}
    >
      {/* Set the deep, near-black background */}
      <body className="min-h-full flex flex-col bg-[#020617] text-slate-200">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}