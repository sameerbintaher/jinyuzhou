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

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        paddingTop: "env(safe-area-inset-top, 0px)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      {/* Soft Parallax Background - Desktop Only */}
      <motion.div
        style={{
          y: isMobile ? 0 : y,
          background:
            "linear-gradient(to bottom, var(--bg), var(--bg-secondary), var(--bg))",
        }}
        initial={{ scale: isMobile ? 1 : 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: isMobile ? 0.8 : 2.5, ease: "easeOut" }}
        className="absolute inset-0"
      />

      {/* Gradient Overlay for Mobile Readability - Theme Aware */}
      <div
        className="md:hidden absolute inset-0 z-[5]"
        style={{
          background:
            "linear-gradient(to bottom, var(--hero-overlay-start), var(--hero-overlay-mid), var(--hero-overlay-end))",
        }}
      />

      <div className="relative z-10 text-center px-6 md:px-8 max-w-5xl mx-auto py-16 md:py-24">
        {/* Top Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{
            duration: isMobile ? 0.4 : 1.4,
            delay: isMobile ? 0.1 : 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10"
        >
          <div
            className="w-24 h-[1px] mx-auto mb-12"
            style={{
              backgroundImage:
                "linear-gradient(to right, transparent, var(--accent-gold), transparent)",
            }}
          />
        </motion.div>

        {/* Name - Minimal fade on mobile, cinematic on desktop */}
        <motion.h1
          initial={{ opacity: 0, y: isMobile ? 10 : 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: isMobile ? 0.5 : 1.2,
            delay: isMobile ? 0.2 : 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-5xl md:text-8xl lg:text-9xl font-playfair font-bold mb-6 md:mb-8 tracking-wider leading-tight"
          style={{
            color: "var(--accent-gold)",
            fontSize: isMobile ? "clamp(2.25rem, 11vw, 3.5rem)" : undefined,
            textShadow: isMobile
              ? "0 3px 24px rgba(0,0,0,0.95), 0 6px 48px rgba(0,0,0,0.8)"
              : "none",
          }}
        >
          JINYU ZHOU
        </motion.h1>

        {/* Subtitle - Minimal fade on mobile */}
        <motion.p
          initial={{ opacity: 0, y: isMobile ? 8 : 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: isMobile ? 0.5 : 1.2,
            delay: isMobile ? 0.3 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-lg md:text-2xl mb-5 md:mb-6 tracking-wide font-light leading-relaxed px-4 max-w-3xl mx-auto"
          style={{
            color: "var(--text-secondary)",
            fontSize: isMobile ? "clamp(0.938rem, 4.2vw, 1.125rem)" : undefined,
            textShadow: isMobile ? "0 2px 16px rgba(0,0,0,0.9)" : "none",
            lineHeight: isMobile ? "1.6" : undefined,
          }}
        >
          Broadcasting & Television{" "}
          <span style={{ color: "var(--accent-gold)" }}>|</span> Content Creator{" "}
          <span style={{ color: "var(--accent-gold)" }}>|</span> Visual
          Storyteller
        </motion.p>

        {/* Tagline - Minimal fade on mobile */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: isMobile ? 0.5 : 1.5,
            delay: isMobile ? 0.4 : 1.1,
            ease: "easeOut",
          }}
          className="text-base md:text-lg mb-12 md:mb-16 italic font-light max-w-2xl mx-auto leading-loose px-4"
          style={{
            color: "var(--text-muted)",
            fontSize: isMobile ? "clamp(0.875rem, 3.6vw, 0.95rem)" : undefined,
            textShadow: isMobile ? "0 2px 12px rgba(0,0,0,0.8)" : "none",
            lineHeight: isMobile ? "1.7" : undefined,
          }}
        >
          &ldquo;Stories shape memory, and memory shapes culture.&rdquo;
        </motion.p>

        {/* Buttons - Soft Motion */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 8 : 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: isMobile ? 0.5 : 1,
            delay: isMobile ? 0.5 : 1.4,
            ease: "easeOut",
          }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center"
        >
          <motion.a
            href="#contact"
            whileTap={{ scale: 0.97 }}
            className="inline-block min-h-[48px] w-full sm:w-auto px-12 py-4 border transition-all duration-300 uppercase tracking-widest text-sm font-semibold hover:scale-[1.02] active:scale-[0.97]"
            style={{
              borderColor: "var(--accent-gold)",
              color: "var(--accent-gold)",
            }}
          >
            Contact Me
          </motion.a>
          <motion.a
            href="#projects"
            whileTap={{ scale: 0.97 }}
            className="inline-block min-h-[48px] w-full sm:w-auto px-12 py-4 transition-all duration-300 uppercase tracking-widest text-sm font-semibold hover:scale-[1.02] active:scale-[0.97]"
            style={{
              backgroundColor: "var(--accent-gold)",
              color: "var(--bg)",
            }}
          >
            View Projects
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: isMobile ? 0.5 : 1.2,
          delay: isMobile ? 0.6 : 3,
          ease: "easeOut",
        }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <a
          href="#about"
          className="transition-colors duration-300 block p-2"
          style={{ color: "var(--accent-gold)" }}
          aria-label="Scroll to About section"
        >
          <ChevronDown className="animate-bounce" size={32} />
        </a>
      </motion.div>
    </section>
  );
}
