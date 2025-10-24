"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // Show button when scrolled down more than 200px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility(); // Check initial position

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Hide button temporarily when scrolling (show when stopped)
  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      setIsVisible(false);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Show initially
    setIsVisible(true);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {showButton && isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed z-50 w-14 h-14 rounded-full flex items-center justify-center glass-button text-[var(--accent-gold)] active:scale-95 transition-transform"
          style={{
            bottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))",
            left: "calc(1.5rem + env(safe-area-inset-left, 0px))",
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
