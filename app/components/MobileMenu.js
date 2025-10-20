"use client";

import { useState } from "react";
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

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <>
      {/* Floating Menu Button - Mobile Only */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-6 right-6 z-40 p-3 min-h-[48px] min-w-[48px] flex items-center justify-center border border-[#d4af37] bg-black/90 backdrop-blur-md text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-400 active:scale-95"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </motion.button>

      {/* Full-Screen Navigation Overlay - Mobile Only */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-50 bg-black"
          >
            <div className="relative h-full flex flex-col items-center justify-center">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-3 min-h-[48px] min-w-[48px] flex items-center justify-center border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-400 active:scale-95"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>

              {/* Gold Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-playfair font-bold text-[#d4af37] tracking-wider">
                  JINYU ZHOU
                </h2>
                <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4" />
              </motion.div>

              {/* Navigation Links */}
              <nav className="flex flex-col items-center space-y-6 md:space-y-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 * index + 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-2xl md:text-3xl font-playfair text-gray-300 hover:text-[#d4af37] transition-all duration-400 uppercase tracking-widest py-2 px-4 min-h-[48px] flex items-center"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>

              {/* Bottom Decoration */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-12"
              >
                <p className="text-sm text-gray-600 italic">Swipe to explore</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
