"use client";

import { motion } from "framer-motion";
import { Code, Palette, Database, Globe } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      icon: Palette,
      title: "Media & Editing",
      skills: ["Photoshop", "Premiere", "CapCut", "Canva"],
    },
    {
      icon: Code,
      title: "Technology",
      skills: ["AI Media Tools", "Unity (VR/AR)", "Digital Content Strategy"],
    },
    {
      icon: Globe,
      title: "Languages",
      skills: ["Chinese (Native)", "English (IELTS 7.5)"],
    },
    {
      icon: Database,
      title: "Interests",
      skills: [
        "Film Studies",
        "Figure Skating",
        "Swimming",
        "Traveling",
        "Cultural Exchange",
      ],
    },
  ];

  return (
    <section
      id="skills"
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
          Skills & Expertise
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + index * 0.12,
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
                <Icon
                  className="mb-4"
                  size={32}
                  style={{ color: "var(--accent-gold)" }}
                />
                <h3
                  className="text-lg font-playfair font-bold mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
