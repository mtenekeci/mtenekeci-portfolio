"use client";

import { useState } from "react";
import { experience } from "@/content/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { MapPin, Calendar, ChevronDown, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Experience() {
  const [showAll, setShowAll] = useState(false);

  const visible = experience.filter((e) => !e.collapsed || showAll);
  const hiddenCount = experience.filter((e) => e.collapsed).length;

  return (
    <section className="py-24 bg-background border-y border-border" id="experience">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader title="Professional Experience" />

        <div className="space-y-12 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-border md:before:left-1/2 md:before:-translate-x-1/2">
          {visible.map((item, i) => (
            <motion.div
              key={`${item.company}-${item.role}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className={cn(
                "relative pl-10 md:pl-0 md:w-[calc(50%-2rem)]",
                i % 2 === 0 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8 text-left md:text-right"
              )}
            >
              {/* Dot on timeline */}
              <div
                className={cn(
                  "absolute top-0 md:top-8 w-4 h-4 bg-accent rounded-full border-4 border-background z-10",
                  "left-0 md:left-1/2 md:-translate-x-1/2"
                )}
              />

              <div className="bg-secondary/30 border border-border p-8 rounded-2xl hover:shadow-md transition-shadow">
                <div className="flex flex-col gap-4">
                  <div className={cn(
                    "flex flex-wrap items-center gap-4 text-xs font-semibold text-accent uppercase tracking-widest",
                    i % 2 === 0 ? "" : "md:justify-end"
                  )}>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {item.start} – {item.end}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {item.location}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-1">{item.role}</h3>
                    <div className={cn("flex items-center gap-2 text-lg font-medium text-muted-foreground", i % 2 === 0 ? "" : "md:justify-end")}>
                      <Building2 className="h-5 w-5" />
                      {item.company}
                    </div>
                  </div>

                  <ul className={cn("space-y-3 mt-4", i % 2 === 0 ? "list-disc pl-5" : "md:text-right md:list-none")}>
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-muted-foreground leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && hiddenCount > 0 && (
          <div className="mt-20 flex justify-center">
            <Button
              variant="outline"
              onClick={() => setShowAll(true)}
              className="group gap-2 px-8 py-6 rounded-2xl text-lg border-2"
            >
              Show {hiddenCount} earlier positions
              <ChevronDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
