"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Immersive VR Exhibition",
      description:
        "Interactive VR experience combining traditional musical instruments with immersive media. Responsible for project coordination, exhibition design concepts, content strategy, and presentation delivery. The goal: encourage cultural appreciation through new technology.",
      tech: ["VR Design", "Unity", "Cultural Media", "Project Management"],
      role: "Project Lead",
      period: "2024–2025",
    },
    {
      title: "Research Paper — VR for Traditional Music Dissemination",
      description:
        "Published research proposing virtual museums, interactive performances, and digital preservation strategies to extend the reach of traditional music culture.",
      tech: ["Research", "VR Strategy", "Cultural Preservation"],
      role: "First Author",
      period: "2024",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 md:py-32 px-6"
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-5xl font-playfair font-semibold mb-6 md:mb-8 text-center text-[#d4af37] uppercase tracking-[0.2em]"
        >
          Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-12 md:mb-20"
        />

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.5 + index * 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, margin: "0px" }}
              className="border border-[#d4af37]/20 bg-[#0a0a0a] p-6 md:p-8 hover:border-[#d4af37] hover:shadow-[0_0_35px_rgba(212,175,55,0.2)] transition-all duration-600 group"
            >
              <div className="mb-3">
                <h3 className="text-2xl font-playfair font-bold text-white group-hover:text-[#d4af37] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#d4af37] mt-2">
                  {project.role} • {project.period}
                </p>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-[#1a1a1a] text-[#d4af37] border border-[#d4af37]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
