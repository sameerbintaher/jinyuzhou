"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="border-t py-12"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--section-border)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="w-12 h-[1px] mx-auto mb-6"
            style={{
              backgroundImage:
                "linear-gradient(to right, transparent, var(--accent-gold), transparent)",
            }}
          />

          <p
            className="text-sm tracking-wide"
            style={{ color: "var(--text-muted)" }}
          >
            © {new Date().getFullYear()}{" "}
            <span style={{ color: "var(--accent-gold)" }}>Jinyu Zhou</span>. All
            rights reserved.
          </p>
          <p
            className="text-xs mt-3 font-light"
            style={{ color: "var(--text-muted)" }}
          >
            Crafted by{" "}
            <a
              href="https://sameerbintaher.me"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 underline decoration-[var(--accent-gold)]/30 hover:decoration-[var(--accent-gold)]"
              style={{ color: "var(--accent-gold)" }}
            >
              Sameer
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
