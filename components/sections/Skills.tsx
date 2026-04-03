"use client";

import { skills } from "@/content/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { motion } from "framer-motion";
import { UserCheck, Code2, Globe } from "lucide-react";

const COLUMNS = [
  { label: "Leadership", items: skills.leadership, icon: UserCheck },
  { label: "Engineering", items: skills.engineering, icon: Code2 },
  { label: "Domain", items: skills.domain, icon: Globe },
];

export function Skills() {
  return (
    <section className="py-24 bg-secondary/30" id="skills">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader title="Skills & Proficiencies" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {COLUMNS.map(({ label, items, icon: Icon }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-border p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-accent/5 rounded-xl flex items-center justify-center text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">{label}</h3>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto">
                {items.map((skill) => (
                  <Tag
                    key={skill}
                    className="px-4 py-1.5 text-sm font-medium border-secondary bg-secondary/50 hover:bg-secondary text-foreground"
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
