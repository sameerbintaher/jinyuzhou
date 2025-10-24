"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Volunteer() {
  const volunteer = [
    {
      role: "Overseas Teaching Program",
      organization: "Sri Lanka",
      period: "2024",
      description:
        "Taught English in local orphanages, encouraging curiosity, play, and communication.",
    },
    {
      role: "Overseas Teaching Program",
      organization: "Thailand",
      period: "2024",
      description:
        "Led English and Chinese lessons for primary students using interactive methods.",
    },
  ];

  return (
    <section
      id="volunteer"
      className="min-h-screen flex items-center justify-center py-20 md:py-32 px-6"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-5xl font-playfair font-semibold mb-6 md:mb-8 text-center uppercase tracking-[0.2em]"
          style={{ color: "var(--accent-gold)" }}
        >
          Volunteer Work
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

        <div className="space-y-10">
          {volunteer.map((vol, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.5 + index * 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, margin: "0px" }}
              className="border p-6 md:p-8 transition-all duration-600"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--card-border)",
                boxShadow: "var(--shadow-soft)",
              }}
            >
              <div className="flex items-start gap-4">
                <Heart
                  className="mt-1 flex-shrink-0"
                  size={24}
                  style={{ color: "var(--accent-gold)" }}
                />
                <div className="flex-1">
                  <h3
                    className="text-2xl font-playfair font-bold"
                    style={{ color: "var(--accent-gold)" }}
                  >
                    {vol.role}
                  </h3>
                  <p
                    className="text-xl"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {vol.organization}
                  </p>
                  <p
                    className="text-sm mt-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {vol.period}
                  </p>
                  <p
                    className="mt-4 leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {vol.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "0px" }}
          className="mt-12 md:mt-16 text-center"
        >
          <p
            className="text-base md:text-lg italic leading-loose md:leading-relaxed max-w-3xl mx-auto px-4"
            style={{ color: "var(--text-secondary)" }}
          >
            These experiences deepened my belief that empathy is the beginning
            of understanding.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
