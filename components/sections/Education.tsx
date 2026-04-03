"use client";

import { education } from "@/content/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GraduationCap, Award, BookOpen, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export function Education() {
  return (
    <section className="py-24 bg-background" id="education">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader title="Education & Certifications" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-accent/5 rounded-xl flex items-center justify-center text-accent">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-bold tracking-tight">Academic Education</h3>
            </div>

            <div className="space-y-10 pl-6 border-l-2 border-border relative">
              {education.degrees.map((d, index) => (
                <div key={d.institution} className="relative group">
                  <div className="absolute -left-[1.625rem] top-1.5 w-3 h-3 bg-accent rounded-full border-2 border-background group-hover:scale-125 transition-transform" />
                  <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">
                    {d.years}
                  </p>
                  <h4 className="text-2xl font-bold mb-1">{d.institution}</h4>
                  <p className="text-lg font-medium text-muted-foreground leading-relaxed">
                    {d.degree} · {d.field}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-accent/5 rounded-xl flex items-center justify-center text-accent">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-bold tracking-tight">Certifications</h3>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {education.certifications.map((c) => (
                <div
                  key={c.name}
                  className="bg-secondary/30 border border-border p-8 rounded-3xl hover:bg-secondary/50 hover:shadow-sm transition-all group"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{c.name}</h4>
                      <p className="text-muted-foreground font-medium flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        {c.issuer}
                      </p>
                    </div>
                    <ExternalLink className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
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
