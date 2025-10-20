"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-[#d4af37]/20 py-12 bg-[#0a0a0a] snap-start">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-6" />

          <p className="text-sm text-gray-500 tracking-wide">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#d4af37]">Jinyu Zhou</span>. All rights
            reserved.
          </p>
          <p className="text-xs text-gray-600 mt-3 font-light">
            Crafted by{" "}
            <a
              href="https://sameerbintaher.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4af37] hover:text-[#f4d03f] transition-colors duration-300 underline decoration-[#d4af37]/30 hover:decoration-[#f4d03f]"
            >
              Sameer
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
