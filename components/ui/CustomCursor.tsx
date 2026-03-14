"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);

  // Motion values track the raw mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics make the movement feel buttery and premium
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Offset by 16px to center the 32px wide cursor
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over a link or button
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  // Hide the custom cursor on mobile devices
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches
  ) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-500/50 pointer-events-none z-[100] flex items-center justify-center backdrop-invert-[0.1]"
      style={{
        x: cursorX,
        y: cursorY,
      }}
      animate={{
        scale: isHovering ? 1.5 : 1,
        backgroundColor: isHovering ? "rgba(6, 182, 212, 0.1)" : "transparent",
        borderColor: isHovering
          ? "rgba(6, 182, 212, 0.8)"
          : "rgba(6, 182, 212, 0.4)",
      }}
      transition={{ duration: 0.15, ease: "easeOut" }}
    >
      {/* Inner dot that disappears on hover */}
      <div
        className={`w-1 h-1 bg-cyan-400 rounded-full transition-opacity duration-300 ${
          isHovering ? "opacity-0" : "opacity-100"
        }`}
      />
    </motion.div>
  );
}
