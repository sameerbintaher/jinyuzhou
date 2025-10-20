"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-3 md:p-4 min-h-[48px] min-w-[48px] flex items-center justify-center border border-[#d4af37] bg-black/90 backdrop-blur-md text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-400 hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:scale-[1.08] active:scale-[0.95]"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} className="md:w-6 md:h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
