"use client";

import { about } from "@/content/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="py-28 bg-background relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader eyebrow="About" title="The Short Version" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Statement */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative"
          >
            {/* Decorative quote mark */}
            <div
              className="absolute -top-8 -left-4 text-[8rem] leading-none font-serif select-none pointer-events-none"
              style={{ color: "color-mix(in srgb, var(--accent) 12%, transparent)" }}
              aria-hidden="true"
            >
              &ldquo;
            </div>

            <blockquote className="relative z-10">
              <p className="text-xl md:text-2xl font-serif italic text-foreground/90 leading-relaxed">
                {about.statement}
              </p>
            </blockquote>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {about.stats.map(({ label, value }) => (
              <div
                key={label}
                className="group glass bg-surface border border-border rounded-2xl p-7 hover:-translate-y-0.5 hover:border-accent/30 transition-all duration-200"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl md:text-6xl font-bold gradient-text-accent">
                    {value}
                  </span>
                </div>
                <span className="mt-2 block text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
