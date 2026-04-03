"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { Users, Lightbulb, Zap, Rocket } from "lucide-react";

const EXPERTISE = [
  {
    num: "01",
    title: "Engineering Leadership",
    description:
      "Leading teams of 40+ developers, mentoring engineers, and fostering growth-centric cultures that attract top talent.",
    icon: Users,
  },
  {
    num: "02",
    title: "Technical Strategy",
    description:
      "Architecting scalable cloud solutions and guiding digital transformation for high-impact, mission-critical initiatives.",
    icon: Lightbulb,
  },
  {
    num: "03",
    title: "Delivery Excellence",
    description:
      "Overseeing complex software development from inception to launch — on time, at quality, every time.",
    icon: Zap,
  },
  {
    num: "04",
    title: "Domain Innovation",
    description:
      "Specializing in RegTech, ML, and Cloud Architecture to solve the hardest problems in high-stakes domains.",
    icon: Rocket,
  },
];

export function Expertise() {
  return (
    <section className="py-28 bg-secondary/30 relative overflow-hidden" id="expertise">
      {/* Subtle accent glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, color-mix(in srgb, var(--accent) 35%, transparent), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="Core Expertise"
          title="What I Bring"
          subtitle="Combining strategic leadership with deep technical proficiency to ship great products and build exceptional teams."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {EXPERTISE.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative glass bg-surface rounded-2xl p-8 hover:-translate-y-1 hover-glow-accent-sm transition-all duration-300"
            >
              {/* Decorative number */}
              <span
                className="absolute top-6 right-6 text-5xl font-bold font-sans leading-none select-none pointer-events-none"
                style={{
                  color: "color-mix(in srgb, var(--accent) 8%, transparent)",
                }}
              >
                {item.num}
              </span>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white bg-accent-gradient shadow-sm"
              >
                <item.icon className="h-5 w-5" />
              </div>

              <h3 className="text-lg font-bold mb-3 group-hover-gradient-text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 0 1px color-mix(in srgb, var(--accent) 30%, transparent)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
