"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Volunteer", href: "#volunteer" },
    { name: "Awards", href: "#awards" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  // Hide buttons when scrolling, show when stopped
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  return (
    <>
      {/* Glass Floating Menu Button - Bottom Right (Mobile Only) */}
      <AnimatePresence>
        {!isOpen && isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            onClick={() => setIsOpen(true)}
            className="md:hidden fixed z-50 w-14 h-14 rounded-full flex items-center justify-center glass-button text-[var(--accent-gold)] active:scale-95"
            style={{
              bottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))",
              right: "calc(1.5rem + env(safe-area-inset-right, 0px))",
            }}
            aria-label="Open menu"
          >
            <Menu size={20} strokeWidth={2} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Full-Screen Overlay Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop - Theme Aware with Fade */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="md:hidden fixed inset-0 z-[100]"
              style={{ backgroundColor: "var(--overlay-bg)" }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden fixed inset-0 z-[110] flex flex-col items-center justify-center"
            >
              {/* Close Button - Glass */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                onClick={() => setIsOpen(false)}
                className="absolute w-12 h-12 rounded-full flex items-center justify-center glass-button text-[var(--accent-gold)] active:scale-95"
                style={{
                  top: "calc(1.5rem + env(safe-area-inset-top, 0px))",
                  right: "calc(1.5rem + env(safe-area-inset-right, 0px))",
                }}
                aria-label="Close menu"
              >
                <X size={18} strokeWidth={2} />
              </motion.button>

              {/* Gold Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mb-8 text-center"
              >
                <h2
                  className="text-2xl font-playfair font-bold tracking-[0.3em]"
                  style={{ color: "var(--accent-gold)" }}
                >
                  MENU
                </h2>
                <div
                  className="w-12 h-[1px] mx-auto mt-3"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, transparent, var(--accent-gold), transparent)",
                  }}
                />
              </motion.div>

              {/* Navigation Links - Gold */}
              <nav className="flex flex-col items-center space-y-2 px-6 max-w-sm w-full mb-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.08 * index + 0.2,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full text-center text-lg font-playfair transition-colors duration-300 uppercase tracking-[0.25em] py-3 px-4 min-h-[48px] flex items-center justify-center border-b active:scale-95"
                    style={{
                      color: "var(--accent-gold)",
                      borderColor: "var(--glass-border)",
                    }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>

              {/* Theme Toggle - Inside Drawer */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="w-full max-w-sm px-6"
              >
                <ThemeToggle variant="menu" />
              </motion.div>

              {/* Bottom Line */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute bottom-8 w-12 h-[1px]"
                style={{
                  bottom: "calc(2rem + env(safe-area-inset-bottom, 0px))",
                  backgroundImage:
                    "linear-gradient(to right, transparent, var(--accent-gold), transparent)",
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
