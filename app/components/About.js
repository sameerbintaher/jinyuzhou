"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 md:py-32 px-6"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-5xl font-playfair font-semibold mb-6 md:mb-8 text-center text-[#d4af37] uppercase tracking-[0.2em]"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-12 md:mb-20"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "0px" }}
          className="space-y-6 md:space-y-8 text-base md:text-lg text-gray-400 leading-loose md:leading-relaxed max-w-3xl mx-auto"
        >
          <p className="md:first-letter:text-5xl md:first-letter:font-playfair md:first-letter:text-[#d4af37] md:first-letter:mr-1 md:first-letter:float-left text-center md:text-left">
            I am an undergraduate student majoring in Broadcasting and
            Television at Tiangong University, currently holding a GPA of
            3.89/4.0 and honored with the President&apos;s First-Class
            Scholarship for two consecutive years. I explore how visual
            storytelling, culture, and technology can work together to move
            audiences and preserve meaning. My journey has taken me through
            television studios, media centers, cultural projects, VR exhibition
            work, and volunteer teaching abroad — all shaping me into a
            storyteller who values empathy, clarity, and human connection.
          </p>

          <p className="text-center md:text-left">
            I believe that stories—whether captured through a camera lens, a
            broadcast script, or an immersive digital space—have the power to
            bridge worlds. I am continuously learning, creating, and searching
            for new ways to communicate emotion, memory, and culture through
            media.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
