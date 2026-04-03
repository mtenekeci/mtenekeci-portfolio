import { profile } from "@/content/data";
import { ThemeToggle } from "./ThemeToggle";
import { Mail, UserCircle as LinkedIn, Code as Github } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="flex items-center gap-6 mb-8 text-muted-foreground">
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-foreground transition-colors p-2"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors p-2"
            aria-label="LinkedIn"
          >
            <LinkedIn className="h-6 w-6" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
          <p className="text-sm text-muted-foreground">
            © {year} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">Experience</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
