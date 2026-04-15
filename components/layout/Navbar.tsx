"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, TerminalSquare, Github } from "lucide-react";
import { navLinks } from "@/config/nav";
import MobileMenu from "../navbar/MobileMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const shouldBeScrolled = latest > 50;
    if (isScrolled !== shouldBeScrolled) {
      setIsScrolled(shouldBeScrolled);
    }
  });

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 inset-x-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none"
      >
        <div
          className={`pointer-events-auto flex items-center justify-between transition-all duration-500 ease-in-out ${
            isScrolled
              ? "w-full max-w-4xl bg-zinc-950/80 backdrop-blur-xl border border-zinc-800/60 shadow-[0_0_30px_rgba(0,0,0,0.5)] py-3 px-4 rounded-2xl"
              : "w-full max-w-7xl bg-transparent py-4 px-2 rounded-none border-transparent"
          }`}
        >
          <a
            href="/"
            className="group flex items-center gap-3 px-2 transition-opacity hover:opacity-80"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-cyan-500/50 transition-colors">
              <TerminalSquare className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="flex flex-col hidden sm:flex">
              <span className="font-mono text-xs font-bold text-zinc-100 tracking-wider">
                MEHRAB HOSSAIN
              </span>
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                DEVMEHRAB
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1 p-1 bg-zinc-900/50 border border-zinc-800/50 rounded-lg backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative px-4 py-2 text-sm font-mono rounded-md text-zinc-400 hover:text-zinc-100 transition-colors overflow-hidden"
              >
                <div className="absolute inset-0 bg-zinc-800/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-cyan-500/50 text-xs">{link.num}.</span>
                  {link.name}
                </span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <a
              href="https://github.com/DevMehrab"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 text-sm font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded-lg hover:bg-cyan-500 hover:text-zinc-950 transition-all duration-300"
            >
              <Github className="w-4 h-4" />
              Github
            </a>
          </div>

          <button
            aria-label="Toggle Navigation Menu"
            className="md:hidden relative z-50 p-2 text-zinc-400 hover:text-cyan-400 transition-colors bg-zinc-900/50 border border-zinc-800/50 rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
