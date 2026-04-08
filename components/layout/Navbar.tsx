"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowDownToLine, TerminalSquare, Github } from "lucide-react";

const navLinks = [
  { name: "Background", href: "/#about", num: "01" },
  { name: "Projects", href: "/#projects", num: "02" },
  { name: "Contact", href: "/#contact", num: "03" },
  { name: "Blog", href: "/blog", num: "04" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Shrink/Adjust on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ================= DESKTOP & MOBILE COMMAND BAR ================= */}
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
          {/* Logo / System ID */}
          <a
            href="/"
            className="group flex items-center gap-3 px-2 transition-opacity hover:opacity-80"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-cyan-500/50 transition-colors">
              <TerminalSquare className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="flex flex-col hidden sm:flex">
              <span className="font-mono text-xs font-bold text-zinc-100 tracking-wider">
                M.HOSSAIN
              </span>
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                DEVMEHRAB
              </span>
            </div>
          </a>

          {/* Desktop Links (Floating Pill) */}
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

          {/* Desktop Resume Action */}
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

          {/* Mobile Menu Toggle */}
          <div
            className="md:hidden relative z-50 p-2 text-zinc-400 hover:text-cyan-400 transition-colors bg-zinc-900/50 border border-zinc-800/50 rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </div>
        </div>
      </motion.nav>

      {/* ================= MOBILE FULLSCREEN OVERLAY ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center px-6 bg-zinc-950/95 backdrop-blur-2xl"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i + 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex flex-col border-b border-zinc-800 pb-4"
                >
                  <span className="font-mono text-sm text-cyan-500 mb-2">
                    {link.num} //
                  </span>
                  <span className="text-4xl font-bold text-zinc-300 group-hover:text-cyan-400 group-hover:translate-x-2 transition-all duration-300">
                    {link.name}
                  </span>
                </motion.a>
              ))}

              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                href="https://github.com/DevMehrab"
                target="_blank"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-3 w-full py-4 mt-8 bg-zinc-100 text-zinc-950 font-bold rounded-xl"
              >
                <Github className="w-5 h-5" />
                View Github
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
