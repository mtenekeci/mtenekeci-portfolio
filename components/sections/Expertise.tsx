"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { Users, Lightbulb, Zap, Rocket } from "lucide-react";

const EXPERTISE = [
  {
    title: "Engineering Leadership",
    description: "Leading teams of 40+ developers, mentoring engineers, and fostering growth-centric cultures.",
    icon: Users,
  },
  {
    title: "Technical Strategy",
    description: "Architecting scalable cloud solutions and guiding digital transformation for critical initiatives.",
    icon: Lightbulb,
  },
  {
    title: "Delivery Excellence",
    description: "Oversight of complex software development from inception to launch with timely delivery.",
    icon: Zap,
  },
  {
    title: "Domain Innovation",
    description: "Specializing in RegTech, ML, and Cloud Architecture to solve high-impact problems.",
    icon: Rocket,
  },
];

export function Expertise() {
  return (
    <section className="py-24 bg-secondary/30" id="expertise">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          title="Core Expertise"
          subtitle="Combining strategic leadership with deep technical proficiency to build high-performing teams."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {EXPERTISE.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6 text-accent">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
