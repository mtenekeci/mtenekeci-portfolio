"use client";

import { skills } from "@/content/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { motion } from "framer-motion";
import { UserCheck, Code2, Globe } from "lucide-react";

const COLUMNS = [
  {
    label: "Leadership",
    eyebrow: "01",
    description: "People, culture & strategy",
    items: skills.leadership,
    icon: UserCheck,
  },
  {
    label: "Engineering",
    eyebrow: "02",
    description: "Technical depth & systems",
    items: skills.engineering,
    icon: Code2,
  },
  {
    label: "Domain",
    eyebrow: "03",
    description: "Industries & problem spaces",
    items: skills.domain,
    icon: Globe,
  },
];

export function Skills() {
  return (
    <section className="py-28 bg-secondary/30 relative" id="skills">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="Skills"
          title="Skills & Proficiencies"
          subtitle="A cross-disciplinary toolkit built over 15 years across engineering, leadership, and domain expertise."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {COLUMNS.map(({ label, eyebrow, description, items, icon: Icon }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group glass bg-surface border border-border rounded-2xl p-8 hover:-translate-y-1 hover:border-accent/25 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-gradient flex items-center justify-center text-white shadow-sm">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent">
                      {eyebrow}
                    </p>
                    <h3 className="text-xl font-bold leading-tight">{label}</h3>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Tag
                    key={skill}
                    className="text-sm py-1.5 px-3"
                  >
                    {skill}
                  </Tag>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
