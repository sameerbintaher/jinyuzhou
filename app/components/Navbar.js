"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Volunteer", href: "#volunteer" },
    { name: "Awards", href: "#awards" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`hidden md:block fixed w-full z-50 transition-all duration-400 border-b ${
        scrolled
          ? "backdrop-blur-md border-[var(--glass-border)]"
          : "bg-transparent border-transparent"
      }`}
      style={{
        backgroundColor: scrolled ? "var(--glass-bg)" : "transparent",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#hero"
              className="text-2xl font-playfair font-bold tracking-wider transition-colors duration-300"
              style={{ color: "var(--accent-gold)" }}
            >
              JINYU ZHOU
            </a>
          </div>

          {/* Desktop Menu + Theme Toggle */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-baseline space-x-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * index,
                    ease: "easeOut",
                  }}
                  className="group relative text-sm uppercase tracking-wider transition-all duration-400 hover:tracking-widest"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.name}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-400"
                    style={{
                      backgroundColor: "var(--accent-gold)",
                      boxShadow: "0 0 10px var(--accent-gold)",
                    }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Theme Toggle */}
            <div className="pl-2 border-l" style={{ borderColor: "var(--glass-border)" }}>
              <ThemeToggle variant="navbar" />
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
