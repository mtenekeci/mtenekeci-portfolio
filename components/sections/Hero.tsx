"use client";

import { profile, about } from "@/content/data";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      id="hero"
    >
      {/* Dot-grid background */}
      <div className="absolute inset-0 bg-dot-grid opacity-50 dark:opacity-25 -z-10" />

      {/* Gradient orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-60 -left-32 w-[800px] h-[800px] rounded-full animate-drift"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, hsl(243, 80%, 68%) 0%, transparent 65%)",
            opacity: 0.18,
            filter: "blur(72px)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full animate-drift-alt"
          style={{
            background:
              "radial-gradient(circle at 60% 60%, hsl(270, 65%, 60%) 0%, transparent 65%)",
            opacity: 0.14,
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-28 pb-24">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <motion.div {...fadeUp(0)} className="mb-8 flex flex-wrap items-center gap-3">
            <span
              id="hero-eyebrow-badge"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-[0.15em]"
              style={{
                background: "color-mix(in srgb, var(--accent) 10%, transparent)",
                borderColor: "color-mix(in srgb, var(--accent) 25%, transparent)",
                color: "var(--accent)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse-glow"
                style={{ background: "var(--accent)" }}
              />
              ex-Google · Engineering Manager
            </span>

            <span className="hidden sm:inline-flex items-center gap-1.5 text-sm text-muted-foreground font-medium">
              <MapPin className="h-3.5 w-3.5" />
              {profile.location}
            </span>
          </motion.div>

          {/* Name — the marquee */}
          <motion.h1
            {...fadeUp(0.1)}
            id="hero-name"
            className="font-bold leading-[0.88] tracking-tight mb-8 gradient-text"
            style={{ fontSize: "clamp(3.5rem, 11vw, 9rem)" }}
          >
            {profile.name}
          </motion.h1>

          {/* Role line */}
          <motion.div
            {...fadeUp(0.2)}
            className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-6"
          >
            <Briefcase className="h-5 w-5 text-accent shrink-0" />
            <span className="text-lg md:text-xl font-medium text-muted-foreground">
              {profile.role}
            </span>
            <span className="text-muted-foreground/40 select-none">·</span>
            <span className="text-lg md:text-xl font-semibold text-foreground">
              {profile.company}
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            {...fadeUp(0.25)}
            className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl leading-relaxed mb-10"
          >
            {profile.tagline}
          </motion.p>

          {/* Stat strip */}
          <motion.div
            {...fadeUp(0.35)}
            className="flex flex-wrap items-stretch gap-y-6 mb-12"
            id="hero-stats"
          >
            {about.stats.map(({ label, value }, i) => (
              <div key={label} className="flex items-center">
                {i > 0 && (
                  <div
                    className="w-px h-9 mx-7 shrink-0"
                    style={{ background: "var(--border)" }}
                  />
                )}
                <div className="flex flex-col gap-1.5">
                  <span className="text-xl md:text-2xl font-bold gradient-text-accent leading-none">
                    {value}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            {...fadeUp(0.45)}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="#experience" id="hero-cta-experience" className="gap-2 px-8 py-3 text-base">
              View Experience
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#contact" variant="outline" id="hero-cta-contact" className="px-8 py-3 text-base">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
          Scroll
        </span>
        <div
          className="w-px h-10 rounded-full"
          style={{
            background:
              "linear-gradient(to bottom, var(--accent), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
