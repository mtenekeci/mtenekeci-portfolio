import { profile } from "@/content/data";
import { ThemeToggle } from "./ThemeToggle";
import { Mail } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      {/* Gradient separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              id="footer-email"
              className="group flex items-center justify-center w-11 h-11 rounded-xl border border-border bg-surface text-muted-foreground hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              id="footer-linkedin"
              className="group flex items-center justify-center w-11 h-11 rounded-xl border border-border bg-surface text-muted-foreground hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-200 hover:-translate-y-0.5"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
          </div>

          {/* Name + Role */}
          <div className="text-center">
            <p className="text-base font-semibold text-foreground">{profile.name}</p>
            <p className="text-sm text-muted-foreground mt-0.5">
              {profile.role} · {profile.location}
            </p>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground order-2 md:order-1">
              © {year} {profile.name}. All rights reserved.
            </p>

            <nav className="flex items-center gap-6 text-xs font-medium order-1 md:order-2">
              {["about", "experience", "skills", "contact"].map((s) => (
                <a
                  key={s}
                  href={`#${s}`}
                  className="text-muted-foreground hover:text-foreground capitalize transition-colors"
                >
                  {s}
                </a>
              ))}
            </nav>

            <div className="order-3">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
