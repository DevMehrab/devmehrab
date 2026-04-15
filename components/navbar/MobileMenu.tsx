"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github } from "lucide-react";
import { navLinks } from "@/config/nav";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Isolate the body scroll lock logic specifically to the mobile menu
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 flex flex-col justify-center px-6 bg-zinc-950/95 backdrop-blur-2xl"
        >
          {/* Optimized background glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, rgba(9, 9, 11, 0) 70%)",
            }}
          />

          <div className="relative z-10 flex flex-col gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i + 0.1 }}
                key={link.name}
                href={link.href}
                onClick={onClose}
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
              onClick={onClose}
              className="inline-flex items-center justify-center gap-3 w-full py-4 mt-8 bg-zinc-100 text-zinc-950 font-bold rounded-xl"
            >
              <Github className="w-5 h-5" />
              View Github
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
