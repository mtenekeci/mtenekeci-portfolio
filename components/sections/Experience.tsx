"use client";

import { useState } from "react";
import { experience } from "@/content/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { MapPin, Calendar, ChevronDown, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const FEATURED_COMPANIES = ["Google", "IMTF"];

export function Experience() {
  const [showAll, setShowAll] = useState(false);

  const visible = experience.filter((e) => !e.collapsed || showAll);
  const hiddenCount = experience.filter((e) => e.collapsed).length;

  return (
    <section className="py-28 bg-background relative" id="experience">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="Career"
          title="Professional Experience"
          align="left"
        />

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px hidden md:block"
            style={{
              background:
                "linear-gradient(to bottom, var(--accent), color-mix(in srgb, var(--accent) 20%, transparent))",
            }}
          />

          <div className="space-y-8">
            {visible.map((item, i) => {
              const isFeatured = FEATURED_COMPANIES.includes(item.company);

              return (
                <motion.div
                  key={`${item.company}-${item.role}-${i}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="relative md:pl-10"
                >
                  {/* Timeline dot */}
                  <div
                    className={cn(
                      "absolute left-0 top-8 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-background hidden md:block z-10",
                      isFeatured
                        ? "bg-accent w-4 h-4"
                        : "bg-muted-foreground/50"
                    )}
                    style={
                      isFeatured
                        ? { boxShadow: "0 0 12px 2px color-mix(in srgb, var(--accent) 50%, transparent)" }
                        : {}
                    }
                  />

                  <div
                    className={cn(
                      "group rounded-2xl p-7 border transition-all duration-[250ms] hover:-translate-y-0.5",
                      isFeatured
                        ? "bg-surface border-accent/20 shadow-sm"
                        : "bg-secondary/25 border-border hover:bg-secondary/40"
                    )}
                  >
                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-4">
                      {/* Company badge */}
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest",
                          isFeatured
                            ? "bg-accent/10 text-accent border border-accent/20"
                            : "bg-secondary text-muted-foreground border border-border"
                        )}
                      >
                        <Building2 className="h-3 w-3" />
                        {item.company}
                      </span>

                      <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        {item.start} – {item.end}
                      </span>

                      <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        {item.location}
                      </span>
                    </div>

                    {/* Role */}
                    <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover-gradient-text transition-all duration-200">
                      {item.role}
                    </h3>

                    {/* Bullets */}
                    <ul className="space-y-2.5">
                      {item.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                        >
                          <span
                            className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: "var(--accent)" }}
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {!showAll && hiddenCount > 0 && (
          <div className="mt-16 flex justify-center">
            <Button
              variant="outline"
              onClick={() => setShowAll(true)}
              id="experience-show-more"
              className="group gap-2 px-8 py-3 text-base rounded-full"
            >
              Show {hiddenCount} earlier positions
              <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
