"use client";

import { about } from "@/content/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader title="About" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="prose prose-xl prose-stone dark:prose-invert">
              <p className="text-xl md:text-2xl font-serif italic text-muted-foreground leading-relaxed">
                &ldquo;{about.statement}&rdquo;
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-1 gap-6"
          >
            {about.stats.map(({ label, value }, index) => (
              <div
                key={label}
                className="bg-secondary/50 border border-border p-8 rounded-3xl group hover:bg-secondary/70 transition-colors"
              >
                <div className="flex flex-col items-center text-center">
                  <span className="text-4xl md:text-5xl font-bold tracking-tight text-accent mb-2">
                    {value}
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
