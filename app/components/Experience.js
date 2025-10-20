"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Student Affairs Assistant",
      company: "Tiangong University",
      period: "2025 – Present",
      description:
        "Supported international student services, records, and communication. Co-produced educational video content for official platforms. Helped organize ceremonies, cultural activities, and orientation events.",
    },
    {
      title: "Director's Assistant",
      company: 'CCTV "Voice" Program',
      period: "2024",
      description:
        "Assisted with outdoor filming and on-site coordination for broadcast production. Participated in script refinement and topic planning. Supported digital content strategy to expand audience reach.",
    },
    {
      title: "Editorial Intern",
      company: "China Railway Kunming Media Center",
      period: "2023",
      description:
        "Edited, structured, and polished news manuscripts for clarity and impact. Used digital tools to improve visual storytelling and narrative flow. Delivered 42 completed news pieces, one selected for national broadcast.",
    },
  ];

  return (
    <section
      id="experience"
      className="h-screen md:min-h-screen flex items-start md:items-center justify-center pt-24 pb-16 md:py-32 px-6 bg-[#0a0a0a] snap-start snap-always overflow-y-auto md:overflow-visible"
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-5xl font-playfair font-semibold mb-6 md:mb-8 text-center text-[#d4af37] uppercase tracking-[0.2em]"
        >
          Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-12 md:mb-20"
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
              className="relative pl-10 border-l border-[#d4af37]/30 hover:border-[#d4af37] transition-colors duration-500"
            >
              <div className="absolute -left-[5px] top-0 w-2 h-2 bg-[#d4af37] rounded-full" />

              <div className="flex items-start gap-4 mb-2">
                <Briefcase
                  className="mt-1 flex-shrink-0 text-[#d4af37]"
                  size={24}
                />
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-[#d4af37]">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-gray-400">{exp.company}</p>
                  <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
                  <p className="text-gray-400 mt-4 leading-relaxed">
                    {exp.description}
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
