"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Student Affairs Assistant",
      company: "Tiangong University",
      period: "2025–Present",
      description:
        "Supported international student services and video content production. Organized cultural and academic events. Helped manage communication and student affairs.",
    },
    {
      title: "Director's Assistant",
      company: 'CCTV "Voice" Program',
      period: "2024",
      description:
        "Supported outdoor filming and on-site coordination. Assisted script and topic development for broadcast segments. Participated in social media strategy for audience engagement.",
    },
    {
      title: "Editorial Intern",
      company: "China Railway Kunming Media Center",
      period: "2023",
      description:
        "Edited and structured news manuscripts. Enhanced visual narrative quality using digital tools. Delivered 42 completed news pieces, one selected for national broadcast.",
    },
  ];

  return (
    <section
      id="experience"
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
          Experience
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

        <div className="space-y-8 md:space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.5 + index * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, margin: "0px" }}
              className="relative pl-10 border-l transition-colors duration-500"
              style={{
                borderColor: "var(--divider)",
              }}
            >
              <div
                className="absolute -left-[5px] top-0 w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--accent-gold)" }}
              />

              <div className="flex items-start gap-4 mb-2">
                <Briefcase
                  className="mt-1 flex-shrink-0"
                  size={24}
                  style={{ color: "var(--accent-gold)" }}
                />
                <div className="flex-1">
                  <h3
                    className="text-2xl font-playfair font-bold"
                    style={{ color: "var(--accent-gold)" }}
                  >
                    {exp.title}
                  </h3>
                  <p className="text-xl" style={{ color: "var(--text-secondary)" }}>
                    {exp.company}
                  </p>
                </div>
              </div>
              <p className="text-sm ml-10" style={{ color: "var(--text-muted)" }}>
                {exp.period}
              </p>
              <p className="mt-4 ml-10 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
