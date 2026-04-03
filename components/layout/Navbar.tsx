"use client";

import { useEffect, useState } from "react";
import { profile } from "@/content/data";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, FileDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold tracking-tight text-foreground">
          {profile.initials}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                activeSection === href.slice(1) ? "text-accent" : "text-muted-foreground"
              )}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <a
            href="/Profile.pdf"
            download
            className={cn(
              "hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
              "bg-primary text-primary-foreground hover:opacity-90 shadow-sm"
            )}
          >
            <FileDown className="h-4 w-4" />
            Resume
          </a>

          <button
            className="md:hidden p-2 text-foreground focus-visible:outline-none"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-8">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className={cn(
                    "text-lg font-medium transition-colors",
                    activeSection === href.slice(1) ? "text-accent" : "text-muted-foreground"
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
              <a
                href="/Profile.pdf"
                download
                className="flex items-center justify-center gap-2 mt-4 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium"
                onClick={() => setMenuOpen(false)}
              >
                <FileDown className="h-5 w-5" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
