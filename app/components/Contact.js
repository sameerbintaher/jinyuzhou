"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 md:py-32 px-6"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="max-w-5xl mx-auto w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-5xl font-playfair font-semibold mb-6 md:mb-8 text-center uppercase tracking-[0.2em]"
          style={{ color: "var(--accent-gold)" }}
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-20 h-[1px] mx-auto mb-12 md:mb-16"
          style={{
            backgroundImage:
              "linear-gradient(to right, transparent, var(--accent-gold), transparent)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "0px" }}
          className="mb-10 md:mb-14 max-w-2xl mx-auto"
        >
          <div className="space-y-3 md:space-y-4 text-base md:text-lg">
            <p className="leading-loose" style={{ color: "var(--text-secondary)" }}>
              <span
                className="font-semibold"
                style={{ color: "var(--accent-gold)" }}
              >
                Email:
              </span>{" "}
              <a
                href="mailto:zhoujinyu1019@163.com"
                className="transition-colors duration-300 underline decoration-[var(--accent-gold)]/30 hover:decoration-[var(--accent-gold)]"
                style={{ color: "var(--text-secondary)" }}
              >
                zhoujinyu1019@163.com
              </a>
            </p>
            <p className="leading-loose" style={{ color: "var(--text-secondary)" }}>
              <span
                className="font-semibold"
                style={{ color: "var(--accent-gold)" }}
              >
                Location:
              </span>{" "}
              Tianjin, China
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "0px" }}
          className="mb-10 md:mb-12"
        >
          <a
            href="mailto:zhoujinyu1019@163.com"
            className="inline-block min-h-[48px] px-12 py-4 border transition-all duration-300 uppercase tracking-widest text-sm font-semibold hover:scale-[1.02] active:scale-[0.97]"
            style={{
              borderColor: "var(--accent-gold)",
              color: "var(--accent-gold)",
            }}
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.9, ease: "easeOut" }}
          viewport={{ once: true, margin: "0px" }}
        >
          <p
            className="italic text-sm md:text-base leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            &ldquo;Thank you for visiting my portfolio.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
