"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle({ variant = "navbar" }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  // Navbar variant (desktop)
  if (variant === "navbar") {
    return (
      <button
        onClick={toggleTheme}
        className="relative w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-800/50 dark:hover:bg-gray-700/50 transition-all duration-300"
        aria-label="Toggle theme"
      >
        <AnimatePresence mode="wait">
          {resolvedTheme === "dark" ? (
            <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <Sun size={18} strokeWidth={1.5} className="text-[var(--accent-gold)]" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ opacity: 0, rotate: 90, scale: 0.6 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.6 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <Moon size={18} strokeWidth={1.5} className="text-[var(--text-muted)]" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    );
  }

  // Menu variant (mobile drawer)
  return (
    <button
      onClick={toggleTheme}
      className="w-full min-h-[48px] flex items-center justify-between px-4 py-3 transition-colors duration-300 border-b"
      style={{
        borderColor: "var(--glass-border)",
        color: "var(--text-secondary)",
      }}
      aria-label="Toggle theme"
    >
      <span className="text-sm uppercase tracking-[0.15em] font-playfair">
        {resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
      </span>
      <AnimatePresence mode="wait">
        {resolvedTheme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Sun size={18} strokeWidth={1.5} style={{ color: "var(--accent-gold)" }} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Moon size={18} strokeWidth={1.5} style={{ color: "var(--text-muted)" }} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

