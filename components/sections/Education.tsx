"use client";

import { education } from "@/content/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export function Education() {
  return (
    <section className="py-28 bg-background relative" id="education">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader eyebrow="Education" title="Education & Certifications" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-4">

          {/* Degrees */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-accent-gradient flex items-center justify-center text-white shadow-sm">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold">Academic Education</h3>
            </div>

            <div className="relative space-y-10 pl-6">
              {/* Timeline line */}
              <div
                className="absolute left-0 top-2 bottom-2 w-px"
                style={{
                  background:
                    "linear-gradient(to bottom, var(--accent), color-mix(in srgb, var(--accent) 10%, transparent))",
                }}
              />

              {education.degrees.map((d) => (
                <div key={d.institution} className="relative group">
                  {/* Dot */}
                  <div
                    className="absolute -left-[1.55rem] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-background"
                    style={{
                      background: "var(--accent)",
                      boxShadow: "0 0 8px 1px color-mix(in srgb, var(--accent) 40%, transparent)",
                    }}
                  />

                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent mb-2">
                    {d.years}
                  </p>
                  <h4 className="text-xl font-bold mb-1 group-hover:gradient-text transition-all duration-200">
                    {d.institution}
                  </h4>
                  <p className="text-muted-foreground font-medium">
                    {d.degree} · {d.field}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-accent-gradient flex items-center justify-center text-white shadow-sm">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>

            <div className="flex flex-col gap-4">
              {education.certifications.map((c) => (
                <div
                  key={c.name}
                  className="group glass bg-surface border border-border rounded-xl p-6 hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: "color-mix(in srgb, var(--accent) 10%, transparent)",
                      }}
                    >
                      <BookOpen className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1 group-hover:text-accent transition-colors">
                        {c.name}
                      </h4>
                      <p className="text-sm text-muted-foreground font-medium">
                        {c.issuer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
