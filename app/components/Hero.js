"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mobile: slower, more emotional timing
  // Desktop: luxurious film opening
  const nameDuration = isMobile ? 1.4 : 1.2;
  const nameDelay = isMobile ? 0.6 : 0.5;
  const subtitleDelay = isMobile ? 1.3 : 0.8;
  const taglineDelay = isMobile ? 2.0 : 1.1;
  const buttonDelay = isMobile ? 2.6 : 1.4;

  return (
    <section
      id="hero"
      className="h-screen md:min-h-screen flex items-center justify-center relative overflow-hidden snap-start snap-always"
    >
      {/* Soft Parallax Background */}
      <motion.div
        style={{ y: isMobile ? 0 : y }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black"
      />

      <div className="relative z-10 text-center px-6 md:px-8 max-w-5xl mx-auto py-12 md:py-24">
        {/* Top Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-12" />
        </motion.div>

        {/* Name - Film Opening */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: nameDuration,
            delay: nameDelay,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-5xl md:text-8xl lg:text-9xl font-playfair font-bold mb-6 md:mb-8 text-[#d4af37] tracking-wider leading-tight"
        >
          JINYU ZHOU
        </motion.h1>

        {/* Subtitle - Individual Fade */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: subtitleDelay,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-lg md:text-2xl text-gray-300 mb-5 md:mb-6 tracking-wide font-light leading-relaxed px-4 max-w-3xl mx-auto"
        >
          Broadcasting & Television <span className="text-[#d4af37]">|</span>{" "}
          Content Creator <span className="text-[#d4af37]">|</span> Visual
          Storyteller
        </motion.p>

        {/* Tagline - Poetic Fade */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: taglineDelay, ease: "easeOut" }}
          className="text-base md:text-lg text-gray-500 mb-12 md:mb-16 italic font-light max-w-2xl mx-auto leading-loose px-4"
        >
          "Stories shape memory, and memory shapes culture."
        </motion.p>

        {/* Buttons - Soft Motion */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: buttonDelay, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center"
        >
          <a
            href="#contact"
            className="inline-block min-h-[48px] w-full sm:w-auto px-12 py-4 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-400 uppercase tracking-widest text-sm font-semibold hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="inline-block min-h-[48px] w-full sm:w-auto px-12 py-4 bg-[#d4af37] text-black hover:bg-[#f4d03f] transition-all duration-400 uppercase tracking-widest text-sm font-semibold hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] hover:scale-[1.02] active:scale-[0.98]"
          >
            View Projects
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 3, ease: "easeOut" }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <a
          href="#about"
          className="text-[#d4af37] hover:text-[#f4d03f] transition-colors duration-300 block p-2"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="animate-bounce" size={32} />
        </a>
      </motion.div>
    </section>
  );
}
