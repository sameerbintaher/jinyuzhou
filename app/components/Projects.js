"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Immersive VR Exhibition",
      description:
        "An interactive VR cultural exhibition designed to connect users with traditional musical instruments through immersive experience. Led coordination, research, content design, and final presentation.",
      tech: ["VR Design", "Unity", "Cultural Media", "Project Management"],
      role: "Project Lead",
      period: "2024–2025",
    },
    {
      title: "Research Paper (First Author)",
      description:
        "A study exploring VR museums, interactive performances, and digital communication strategies for the preservation of traditional music culture.",
      tech: ["Research", "VR Strategy", "Cultural Preservation"],
      role: "First Author",
      period: "2024",
    },
  ];

  return (
    <section
      id="projects"
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
          Projects
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
              className="border p-6 md:p-8 transition-all duration-600 group"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--card-border)",
                boxShadow: "var(--shadow-soft)",
              }}
            >
              <div className="mb-3">
                <h3
                  className="text-2xl font-playfair font-bold transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm mt-2"
                  style={{ color: "var(--accent-gold)" }}
                >
                  {project.role} | {project.period}
                </p>
              </div>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {project.description}
              </p>
              {project.tech && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        color: "var(--text-muted)",
                        backgroundColor: "var(--bg-tertiary)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
