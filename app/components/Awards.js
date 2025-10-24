"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function Awards() {
  const awards = [
    {
      title: "National Third Prize",
      issuer: "Future Designer Digital Art Competition",
      year: "2025",
    },
    {
      title: "Second Prize",
      issuer: "Tianjin Micro-Video Competition",
      year: "2024",
    },
    {
      title: "National Third Prize",
      issuer: "Advertising Art Competition",
      year: "2024",
    },
    {
      title: "First Prize",
      issuer: "HEP Cup Short Video Competition",
      year: "2024",
    },
    {
      title: "Third Prize",
      issuer: "National Vocabulary Contest",
      year: "2024",
    },
    {
      title: "First Prize",
      issuer: "NECCS English Competition",
      year: "2023",
    },
  ];

  return (
    <section
      id="awards"
      className="min-h-screen flex items-center justify-center py-20 md:py-32 px-6"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-5xl font-playfair font-semibold mb-6 md:mb-8 text-center uppercase tracking-[0.2em]"
          style={{ color: "var(--accent-gold)" }}
        >
          Awards & Recognition
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-20 h-[1px] mx-auto mb-12 md:mb-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, transparent, var(--accent-gold), transparent)",
          }}
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.4 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, margin: "0px" }}
              className="border p-4 md:p-6 transition-all duration-600 hover:scale-[1.02]"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--card-border)",
                boxShadow: "var(--shadow-soft)",
              }}
            >
              <div className="flex items-start gap-3">
                <Award
                  className="mt-1 flex-shrink-0"
                  size={24}
                  style={{ color: "var(--accent-gold)" }}
                />
                <div className="flex-1">
                  <h3
                    className="text-lg font-playfair font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {award.title}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {award.issuer}
                  </p>
                  <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                    {award.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
