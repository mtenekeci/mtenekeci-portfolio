"use client";

import { profile } from "@/content/data";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const HERO_TAGS = ["Engineering Leadership", "Machine Learning", "Cloud Architecture"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32" id="hero">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full -z-10 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="flex gap-2">
            {HERO_TAGS.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 font-medium"
        >
          {profile.role} · {profile.company} · {profile.location}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button href="#experience" className="gap-2">
            View Experience
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="#contact" variant="outline">
            Get in Touch
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 animate-bounce"
        >
          <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
