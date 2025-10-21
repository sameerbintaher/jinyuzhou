"use client";

import { useEffect } from "react";

export default function ViewportHeightFix() {
  useEffect(() => {
    // Set the --vh custom property to the current viewport height
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Set on mount
    setVh();

    // Update on resize and orientation change
    window.addEventListener("resize", setVh);
    window.addEventListener("orientationchange", setVh);

    // Cleanup
    return () => {
      window.removeEventListener("resize", setVh);
      window.removeEventListener("orientationchange", setVh);
    };
  }, []);

  return null; // This component doesn't render anything
}
