"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    // Initialize Lenis with premium physics settings
    const lenis = new Lenis({
      duration: 1.2, // Slightly longer duration for a more luxurious feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo Out easing
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Sync Lenis with the browser's refresh rate
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount to prevent memory leaks
    return () => {
      lenis.destroy();
    };
  }, []);

  // This component doesn't render anything to the DOM
  return null;
}
