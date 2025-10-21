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
        "Taught English to children in local orphanages, creating lesson plans that encouraged curiosity, confidence, and imagination.",
    },
    {
      role: "Overseas Teaching Program",
      organization: "Thailand",
      period: "2024",
      description:
        "Led English and Chinese language classes for primary school students, using interactive activities to build communication skills.",
    },
  ];

  return (
    <section
      id="volunteer"
      className="min-h-screen flex items-center justify-center py-20 md:py-32 px-6 bg-[#0a0a0a]"
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-5xl font-playfair font-semibold mb-6 md:mb-8 text-center text-[#d4af37] uppercase tracking-[0.2em]"
        >
          Volunteer Work
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-12 md:mb-20"
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
              className="border border-[#d4af37]/20 bg-black p-6 md:p-8 hover:border-[#d4af37] hover:shadow-[0_0_35px_rgba(212,175,55,0.2)] transition-all duration-600"
            >
              <div className="flex items-start gap-4">
                <Heart
                  className="mt-1 flex-shrink-0 text-[#d4af37]"
                  size={24}
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-playfair font-bold text-[#d4af37]">
                    {vol.role}
                  </h3>
                  <p className="text-xl text-gray-400">{vol.organization}</p>
                  <p className="text-sm text-gray-500 mt-1">{vol.period}</p>
                  <p className="text-gray-400 mt-4 leading-relaxed">
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
          <p className="text-base md:text-lg text-gray-400 italic leading-loose md:leading-relaxed max-w-3xl mx-auto px-4">
            These experiences deepened my belief that empathy is the beginning
            of understanding.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
