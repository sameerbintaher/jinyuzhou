"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 md:py-32 px-6"
    >
      <div className="max-w-5xl mx-auto w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-5xl font-playfair font-semibold mb-6 md:mb-8 text-center text-[#d4af37] uppercase tracking-[0.2em]"
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-12 md:mb-16"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "0px" }}
          className="mb-10 md:mb-14 max-w-2xl mx-auto"
        >
          <div className="space-y-4 md:space-y-5 text-base md:text-lg">
            <p className="text-gray-300 leading-loose">
              <span className="text-[#d4af37] font-semibold">Email:</span>{" "}
              <a
                href="mailto:zhoujinyu1019@163.com"
                className="hover:text-[#d4af37] transition-colors duration-300 underline decoration-[#d4af37]/30 hover:decoration-[#d4af37]"
              >
                zhoujinyu1019@163.com
              </a>
            </p>
            <p className="text-gray-300 leading-loose">
              <span className="text-[#d4af37] font-semibold">Location:</span>{" "}
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
            className="inline-block min-h-[48px] px-12 py-4 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-400 uppercase tracking-widest text-sm font-semibold hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-[1.02] active:scale-[0.98]"
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
          <p className="text-gray-500 italic text-sm md:text-base leading-relaxed">
            &ldquo;Thank you for visiting my portfolio.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
