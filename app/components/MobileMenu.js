"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

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
      {/* Floating Circular Menu Button - Bottom Right (Mobile Only) */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5, ease: [0.34, 1.56, 0.64, 1] }}
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center border border-[#d4af37] bg-black/95 backdrop-blur-md text-[#d4af37] shadow-[0_4px_20px_rgba(0,0,0,0.6)] active:scale-95 transition-all duration-200"
        style={{
          bottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))",
          right: "calc(1.5rem + env(safe-area-inset-right, 0px))",
        }}
        aria-label="Open menu"
      >
        <Menu size={22} strokeWidth={2} />
      </motion.button>

      {/* Full-Screen Navigation Overlay - Mobile Only */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden fixed inset-0 z-[70] flex flex-col items-center justify-center"
            >
              {/* Close Button - Circular */}
              <motion.button
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center border border-[#d4af37] text-[#d4af37] bg-black/60 active:scale-95 transition-all duration-200"
                style={{
                  top: "calc(1.5rem + env(safe-area-inset-top, 0px))",
                  right: "calc(1.5rem + env(safe-area-inset-right, 0px))",
                }}
                aria-label="Close menu"
              >
                <X size={20} strokeWidth={2} />
              </motion.button>

              {/* Gold Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mb-12 text-center"
              >
                <h2 className="text-2xl font-playfair font-bold text-[#d4af37] tracking-[0.3em]">
                  MENU
                </h2>
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-3" />
              </motion.div>

              {/* Navigation Links */}
              <nav className="flex flex-col items-center space-y-4 px-6 max-w-sm w-full">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 * index + 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full text-center text-xl font-playfair text-gray-300 hover:text-[#d4af37] active:text-[#f4d03f] transition-colors duration-200 uppercase tracking-[0.2em] py-3 px-4 min-h-[44px] flex items-center justify-center border-b border-gray-800/30 hover:border-[#d4af37]/20"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>

              {/* Bottom Decoration */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-8 text-center"
                style={{
                  bottom: "calc(2rem + env(safe-area-inset-bottom, 0px))",
                }}
              >
                <p className="text-xs text-gray-600 italic tracking-wider">
                  Navigate your story
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
