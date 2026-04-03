import { profile } from "@/content/data";
import { ThemeToggle } from "./ThemeToggle";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";
import { Mail } from "lucide-react";

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
