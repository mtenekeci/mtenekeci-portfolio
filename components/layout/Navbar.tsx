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
    const onScroll = () => setScrolled(window.scrollY > 20);
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
          ? "glass-strong border-b border-border/50 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo Mark */}
        <a
          href="#hero"
          id="nav-logo"
          className="group relative flex items-center justify-center w-9 h-9 rounded-xl bg-accent-gradient text-white font-bold text-sm shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
        >
          {profile.initials}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeSection === href.slice(1);
            return (
              <a
                key={href}
                href={href}
                id={`nav-${href.slice(1)}`}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-secondary border border-border"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <a
            href="/Profile.pdf"
            download
            id="nav-resume"
            className={cn(
              "hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 active:scale-95",
              "border border-border text-foreground hover:bg-secondary hover:border-accent/40"
            )}
          >
            <FileDown className="h-3.5 w-3.5" />
            Resume
          </a>

          <button
            className="md:hidden p-2 text-foreground focus-visible:outline-none rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            id="nav-menu-toggle"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass-strong border-b border-border/50 overflow-hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className={cn(
                    "px-4 py-3 rounded-xl text-base font-medium transition-colors",
                    activeSection === href.slice(1)
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
              <a
                href="/Profile.pdf"
                download
                className="flex items-center justify-center gap-2 mt-3 px-6 py-3 rounded-full bg-accent-gradient text-white font-semibold text-sm"
                onClick={() => setMenuOpen(false)}
              >
                <FileDown className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
