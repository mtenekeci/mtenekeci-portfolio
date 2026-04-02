Portfolio Website Implementation Plan

  ▎ For agentic workers: REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or
  superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (- [ ]) syntax for tracking.

  Goal: Build mehmettenekeci.com — a professional portfolio for Mehmet Tenekeci using Next.js 14 App Router with
  light/dark mode, Playfair Display + Inter typography, sapphire accent, and a plug-and-play section architecture.

  Architecture: Hybrid single-page home (/) that composes isolated RSC sections, with future pages living at their own
  routes. All content in content/data.ts, all colors as CSS tokens in styles/tokens.css. Interactive components are "use
   client" only where strictly necessary.

  Tech Stack: Next.js 14 (App Router), TypeScript, CSS Modules, CSS custom properties, next-themes, Resend, Google Fonts
   (Playfair Display + Inter), Vercel deployment.

  ---
  File Map

  ┌────────────────────────────────────┬───────────────────────────────────────────────────────────────┐
  │                File                │                        Responsibility                         │
  ├────────────────────────────────────┼───────────────────────────────────────────────────────────────┤
  │ app/layout.tsx                     │ Root layout: fonts, ThemeProvider, global metadata            │
  ├────────────────────────────────────┼───────────────────────────────────────────────────────────────┤
  │ app/page.tsx                       │ Home: composes all sections in order                          │
  ├────────────────────────────────────┼───────────────────────────────────────────────────────────────┤
  │ app/api/contact/route.ts           │ Resend form POST handler                                      │
  ├────────────────────────────────────┼───────────────────────────────────────────────────────────────┤
  │ content/data.ts                    │ All site content as typed TS exports                          │
  ├────────────────────────────────────┼───────────────────────────────────────────────────────────────┤
  │ styles/tokens.css                  │ CSS custom properties — full design token system              │
  ├────────────────────────────────────┼───────────────────────────────────────────────────────────────┤
  │ styles/globals.css                 │ Resets, typography scale, utility classes                     │
  ├────────────────────────────────────┼───────────────────────────────────────────────────────────────┤
  │ lib/fonts.ts                       │ next/font definitions for Playfair Display + Inter            │
  ├────────────────────────────────────┼───────────────────────────────────────────────────────────────┤
  │ components/layout/Navbar.tsx       │ Fixed nav, scroll shadow, active link tracking ("use client") │
  ├────────────────────────────────────┼───────────────────────────────────────────────────────────────┤
  │ components/layout/Footer.tsx       │ Minimal footer (RSC)                                          │
  ├────────────────────────────────────┼───────────────────────────────────────────────────────────────┤
  │ components/layout/ThemeToggle.tsx  │ Dark/light toggle button ("use client")                       │
  ├────────────────────────────────────┼───────────────────────────────────────────────────────────────┤
  │ components/ui/Button.tsx           │ Reusable button primitive (RSC)                               │
  ├────────────────────────────────────┼───────────────────────────────────────────────────────────────┤
  │ components/ui/Tag.tsx              │ Skill/label tag primitive (RSC)                               │
  ├────────────────────────────────────┼───────────────────────────────────────────────────────────────┤
  │ components/ui/SectionHeader.tsx    │ Section title + optional subtitle (RSC)                       │
  ├────────────────────────────────────┼───────────────────────────────────────────────────────────────┤
  │ components/ui/Monogram.tsx         │ MT styled circle monogram (RSC)                               │
  ├────────────────────────────────────┼───────────────────────────────────────────────────────────────┤
  │ components/sections/Hero.tsx       │ Full-viewport hero with monogram + CTAs (RSC)                 │
  ├────────────────────────────────────┼───────────────────────────────────────────────────────────────┤
  │ components/sections/About.tsx      │ Two-column about + stats (RSC)                                │
  ├────────────────────────────────────┼───────────────────────────────────────────────────────────────┤
  │ components/sections/Experience.tsx │ Timeline with expander ("use client")                         │
  ├────────────────────────────────────┼───────────────────────────────────────────────────────────────┤
  │ components/sections/Skills.tsx     │ Three-column skill tags (RSC)                                 │
  ├────────────────────────────────────┼───────────────────────────────────────────────────────────────┤
  │ components/sections/Education.tsx  │ Education + certifications cards (RSC)                        │
  ├────────────────────────────────────┼───────────────────────────────────────────────────────────────┤
  │ components/sections/Contact.tsx    │ Links + form with inline state ("use client")                 │
  └────────────────────────────────────┴───────────────────────────────────────────────────────────────┘

  ---
  Task 1: Project Scaffold

  Files:
  - Create: package.json, tsconfig.json, next.config.ts, .env.local, .gitignore
  - Step 1: Initialize Next.js project

  cd /Users/mtenekeci/Documents/Projects/mtenekeci-portfolio
  npx create-next-app@latest . \
    --typescript \
    --eslint \
    --no-tailwind \
    --app \
    --no-src-dir \
    --import-alias "@/*"

  Accept all prompts with defaults.

  - Step 2: Install dependencies

  npm install next-themes resend

  - Step 3: Create .env.local

  cat > .env.local << 'EOF'
  RESEND_API_KEY=re_placeholder
  CONTACT_TO_EMAIL=mehmet@tenekeci.ch
  EOF

  - Step 4: Add .env.local to .gitignore

  Open .gitignore and confirm .env.local is listed (create-next-app adds it by default). Also add:

  .superpowers/

  - Step 5: Verify dev server starts

  npm run dev

  Expected: server running at http://localhost:3000 with default Next.js page.

  - Step 6: Commit

  git init
  git add -A
  git commit -m "feat: initialize Next.js 14 App Router project"

  ---
  Task 2: Design Tokens & Global Styles

  Files:
  - Create: styles/tokens.css
  - Create: styles/globals.css
  - Create: lib/fonts.ts
  - Step 1: Create styles/tokens.css

  :root {
    /* Colors */
    --color-bg:           #ffffff;
    --color-bg-subtle:    #f8f9fb;
    --color-border:       #e2e6ed;
    --color-text:         #111827;
    --color-text-muted:   #6b7280;
    --color-accent:       #1a3faa;
    --color-accent-hover: #1e40af;

    /* Shadows */
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06);
    --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08);
    --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.10);

    /* Spacing */
    --section-padding: 6rem 0;
    --container-width: 1100px;
    --container-padding: 0 1.5rem;

    /* Border radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-full: 9999px;

    /* Transitions */
    --transition: all 200ms ease;
  }

  [data-theme="dark"] {
    --color-bg:           #0d1117;
    --color-bg-subtle:    #161b22;
    --color-border:       #21262d;
    --color-text:         #f0f6fc;
    --color-text-muted:   #8b949e;
    --color-accent:       #4d7fff;
    --color-accent-hover: #6b92ff;
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.3);
    --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.4);
    --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.5);
  }

  - Step 2: Create styles/globals.css

  @import "./tokens.css";

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--color-bg);
    color: var(--color-text);
    font-family: var(--font-body), system-ui, sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    transition: background-color 200ms ease, color 200ms ease;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4 {
    font-family: var(--font-display), Georgia, serif;
    line-height: 1.15;
    letter-spacing: -0.03em;
    color: var(--color-text);
  }

  a {
    color: var(--color-accent);
    text-decoration: none;
    transition: var(--transition);
  }

  a:hover {
    color: var(--color-accent-hover);
  }

  .container {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: var(--container-padding);
  }

  .section {
    padding: var(--section-padding);
  }

  .section--subtle {
    background-color: var(--color-bg-subtle);
  }

  - Step 3: Create lib/fonts.ts

  import { Playfair_Display, Inter } from "next/font/google";

  export const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-display",
    display: "swap",
  });

  export const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-body",
    display: "swap",
  });

  - Step 4: Commit

  git add styles/ lib/
  git commit -m "feat: add design tokens, global styles, and font definitions"

  ---
  Task 3: Content Data

  Files:
  - Create: content/data.ts
  - Step 1: Create content/data.ts

  export interface Stat {
    label: string;
    value: string;
  }

  export interface ExperienceItem {
    company: string;
    role: string;
    start: string;
    end: string;
    location: string;
    bullets: string[];
    logo?: string;
    collapsed?: boolean;
  }

  export interface Degree {
    institution: string;
    degree: string;
    field: string;
    years: string;
  }

  export interface Certification {
    name: string;
    issuer: string;
  }

  export interface Skills {
    leadership: string[];
    engineering: string[];
    domain: string[];
  }

  export interface Education {
    degrees: Degree[];
    certifications: Certification[];
  }

  // ─── Profile ────────────────────────────────────────────────────────────────

  export const profile = {
    name: "Mehmet Tenekeci",
    initials: "MT",
    role: "Engineering Manager",
    company: "IMTF",
    location: "Zurich, Switzerland",
    email: "mehmet@tenekeci.ch",
    linkedin: "https://www.linkedin.com/in/mehmet-tenekeci/",
    tagline: "Building high-performing teams & scalable tech solutions.",
  };

  // ─── About ──────────────────────────────────────────────────────────────────

  export const about = {
    statement:
      "I'm an Engineering Manager with 15+ years of experience leading high-performing teams across cloud architecture,
  machine learning, telecom, and enterprise systems. Most recently at Google and now at IMTF in Zurich, I specialize in
  growing engineers, driving technical strategy, and delivering complex software initiatives from inception to launch.",
    stats: [
      { label: "Years of Experience", value: "15+" },
      { label: "Companies", value: "8+" },
      { label: "Countries", value: "2" },
    ] as Stat[],
  };

  // ─── Experience ─────────────────────────────────────────────────────────────

  export const experience: ExperienceItem[] = [
    {
      company: "IMTF",
      role: "Engineering Manager",
      start: "May 2025",
      end: "Present",
      location: "Zurich, Switzerland",
      bullets: [
        "Leading engineering teams in the RegTech domain, delivering excellence in compliance technology solutions.",
      ],
    },
    {
      company: "Google",
      role: "Engineering Manager",
      start: "August 2022",
      end: "July 2024",
      location: "Switzerland",
      bullets: [
        "Led a team of engineers with diverse technical proficiencies, providing strategic mentorship and driving career
   development.",
        "Built robust partnerships with cross-functional stakeholders across product management, design, and
  engineering.",
        "Oversaw complex software development initiatives from inception to launch, ensuring timely delivery.",
        "Fostered a growth-centric culture that attracts and nurtures top engineering professionals.",
      ],
    },
    {
      company: "KoçSistem",
      role: "Senior Software Development Domain Leader",
      start: "September 2021",
      end: "July 2022",
      location: "Istanbul, Turkey",
      bullets: [
        "Directed significant enhancements to enterprise-level software systems.",
        "Spearheaded cloud architecture design and led successful cloud migrations.",
        "Guided multiple teams through the digital transformation of critical company initiatives.",
      ],
    },
    {
      company: "KoçSistem",
      role: "Software Development Technology Manager",
      start: "September 2019",
      end: "September 2021",
      location: "Istanbul, Turkey",
      bullets: [
        "Directed teams of 40+ developers in comprehensive software engineering initiatives.",
        "Mentored engineers in industry-standard methodologies for optimized product development.",
        "Championed significant enhancements to legacy software systems.",
      ],
    },
    {
      company: "KoçSistem",
      role: "Software Development Leader",
      start: "June 2018",
      end: "August 2019",
      location: "Istanbul, Turkey",
      bullets: [
        "Collaborated with cross-functional design teams to deliver software solutions enhancing user experience.",
        "Researched innovative software applications in the automotive domain.",
      ],
    },
    {
      company: "Ericsson",
      role: "Solution Architect",
      start: "December 2017",
      end: "May 2018",
      location: "Istanbul, Turkey",
      bullets: [
        "Architected integrated solutions, leading in-depth technical dialogues with customers and prospects.",
        "Articulated roadmaps and technology infrastructure, showcasing expertise in APIs and platform architecture.",
      ],
      collapsed: true,
    },
    {
      company: "Ericsson",
      role: "Software Engineer",
      start: "September 2015",
      end: "December 2017",
      location: "Istanbul, Turkey",
      bullets: [
        "Developed and customized advanced telecommunication solutions.",
      ],
      collapsed: true,
    },
    {
      company: "6Kare",
      role: "Senior Software Engineer",
      start: "April 2015",
      end: "August 2015",
      location: "Istanbul, Turkey",
      bullets: [
        "Partnered with project managers, developers, and QA teams to deliver customized BPM solutions.",
      ],
      collapsed: true,
    },
    {
      company: "Intranet Information Technologies",
      role: "Application Development Lead",
      start: "January 2013",
      end: "July 2014",
      location: "Istanbul, Turkey",
      bullets: [
        "Led .NET software architecture and development for an 18-member team.",
      ],
      collapsed: true,
    },
    {
      company: "Intranet Information Technologies",
      role: "Application Development Specialist",
      start: "April 2010",
      end: "January 2013",
      location: "Istanbul, Turkey",
      bullets: [
        "Executed enterprise-wide implementations of new software applications (C#, Java).",
        "Engineered and deployed scalable, modular, globally accessible software products.",
      ],
      collapsed: true,
    },
  ];

  // ─── Skills ─────────────────────────────────────────────────────────────────

  export const skills: Skills = {
    leadership: [
      "Engineering Leadership",
      "Team Building",
      "Career Development",
      "Strategic Mentorship",
      "Cross-functional Collaboration",
      "Hiring & Talent Development",
      "Agile / Scrum",
    ],
    engineering: [
      "Machine Learning",
      "Deep Learning",
      "Cloud Architecture",
      "System Design",
      "Python",
      "Java",
      ".NET / C#",
      "API Design",
      "Microservices",
    ],
    domain: [
      "RegTech",
      "Telecom Systems",
      "Enterprise Software",
      "Digital Transformation",
      "Cloud Migration",
      "BPM Solutions",
    ],
  };

  // ─── Education ──────────────────────────────────────────────────────────────

  export const education: Education = {
    degrees: [
      {
        institution: "İstanbul Technical University",
        degree: "Master's Degree",
        field: "Information Technologies",
        years: "2012 – 2014",
      },
      {
        institution: "Southern States University",
        degree: "MBA",
        field: "Business Administration & Management",
        years: "2010 – 2011",
      },
      {
        institution: "Eastern Mediterranean University",
        degree: "Bachelor of Science",
        field: "Computer Engineering",
        years: "2005 – 2010",
      },
    ],
    certifications: [
      { name: "EF SET English Certificate 84/100 (C2 Proficient)", issuer: "EF SET" },
      { name: "Professional Scrum Master I (PSM I)", issuer: "Scrum.org" },
      { name: "Machine Learning", issuer: "Coursera" },
      { name: "Koç Dialogues Development Program", issuer: "KoçSistem" },
    ],
  };

  - Step 2: Commit

  git add content/
  git commit -m "feat: add typed content data for all sections"

  ---
  Task 4: Root Layout & Theme Provider

  Files:
  - Modify: app/layout.tsx
  - Delete: app/globals.css (replaced by styles/globals.css)
  - Step 1: Delete the default globals.css

  rm app/globals.css

  - Step 2: Rewrite app/layout.tsx

  import type { Metadata } from "next";
  import { ThemeProvider } from "next-themes";
  import { playfair, inter } from "@/lib/fonts";
  import "@/styles/globals.css";

  export const metadata: Metadata = {
    title: "Mehmet Tenekeci — Engineering Manager",
    description:
      "Engineering Manager at IMTF, ex-Google. Building high-performing teams and scalable tech solutions in Zurich,
  Switzerland.",
    openGraph: {
      title: "Mehmet Tenekeci — Engineering Manager",
      description: "Engineering Manager at IMTF, ex-Google. Zurich, Switzerland.",
      url: "https://mehmettenekeci.com",
      siteName: "Mehmet Tenekeci",
      locale: "en_US",
      type: "website",
    },
  };

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html
        lang="en"
        suppressHydrationWarning
        className={`${playfair.variable} ${inter.variable}`}
      >
        <body>
          <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    );
  }

  - Step 3: Verify dev server has no errors

  npm run dev

  Expected: compiles without errors.

  - Step 4: Commit

  git add app/layout.tsx
  git commit -m "feat: set up root layout with ThemeProvider and fonts"

  ---
  Task 5: UI Primitives

  Files:
  - Create: components/ui/Button.tsx
  - Create: components/ui/Button.module.css
  - Create: components/ui/Tag.tsx
  - Create: components/ui/Tag.module.css
  - Create: components/ui/SectionHeader.tsx
  - Create: components/ui/SectionHeader.module.css
  - Create: components/ui/Monogram.tsx
  - Create: components/ui/Monogram.module.css
  - Step 1: Create components/ui/Button.tsx

  import styles from "./Button.module.css";

  interface ButtonProps {
    variant?: "primary" | "ghost";
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    type?: "button" | "submit";
    disabled?: boolean;
  }

  export function Button({
    variant = "primary",
    href,
    onClick,
    children,
    type = "button",
    disabled,
  }: ButtonProps) {
    const className = `${styles.button} ${styles[variant]}`;

    if (href) {
      return (
        <a href={href} className={className} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }

    return (
      <button type={type} onClick={onClick} className={className} disabled={disabled}>
        {children}
      </button>
    );
  }

  - Step 2: Create components/ui/Button.module.css

  .button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1.25rem;
    border-radius: var(--radius-sm);
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    border: 1px solid transparent;
    white-space: nowrap;
  }

  .button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .primary {
    background-color: var(--color-accent);
    color: #ffffff;
    border-color: var(--color-accent);
  }

  .primary:hover:not(:disabled) {
    background-color: var(--color-accent-hover);
    border-color: var(--color-accent-hover);
    color: #ffffff;
  }

  .ghost {
    background-color: transparent;
    color: var(--color-text);
    border-color: var(--color-border);
  }

  .ghost:hover:not(:disabled) {
    border-color: var(--color-accent);
    color: var(--color-accent);
  }

  - Step 3: Create components/ui/Tag.tsx

  import styles from "./Tag.module.css";

  interface TagProps {
    children: React.ReactNode;
  }

  export function Tag({ children }: TagProps) {
    return <span className={styles.tag}>{children}</span>;
  }

  - Step 4: Create components/ui/Tag.module.css

  .tag {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: var(--radius-full);
    background-color: var(--color-bg-subtle);
    border: 1px solid var(--color-border);
    color: var(--color-text-muted);
    font-family: var(--font-body);
    font-size: 0.8125rem;
    font-weight: 500;
    transition: var(--transition);
  }

  - Step 5: Create components/ui/SectionHeader.tsx

  import styles from "./SectionHeader.module.css";

  interface SectionHeaderProps {
    title: string;
    subtitle?: string;
  }

  export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
    return (
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <div className={styles.rule} />
      </div>
    );
  }

  - Step 6: Create components/ui/SectionHeader.module.css

  .header {
    margin-bottom: 3rem;
  }

  .title {
    font-size: clamp(1.75rem, 4vw, 2.25rem);
    color: var(--color-text);
  }

  .subtitle {
    margin-top: 0.5rem;
    color: var(--color-text-muted);
    font-family: var(--font-body);
    font-size: 1rem;
  }

  .rule {
    width: 2.5rem;
    height: 2px;
    background-color: var(--color-accent);
    margin-top: 1rem;
  }

  - Step 7: Create components/ui/Monogram.tsx

  import styles from "./Monogram.module.css";

  interface MonogramProps {
    initials: string;
    size?: "sm" | "md" | "lg";
  }

  export function Monogram({ initials, size = "md" }: MonogramProps) {
    return (
      <div className={`${styles.monogram} ${styles[size]}`}>
        <span className={styles.initials}>{initials}</span>
      </div>
    );
  }

  - Step 8: Create components/ui/Monogram.module.css

  .monogram {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid var(--color-accent);
    background-color: var(--color-bg-subtle);
    flex-shrink: 0;
  }

  .initials {
    font-family: var(--font-display);
    font-weight: 700;
    color: var(--color-accent);
    letter-spacing: 0.05em;
  }

  .sm  { width: 2.5rem;  height: 2.5rem;  }
  .sm .initials  { font-size: 0.875rem; }

  .md  { width: 5rem;   height: 5rem;   }
  .md .initials  { font-size: 1.375rem; }

  .lg  { width: 7rem;   height: 7rem;   }
  .lg .initials  { font-size: 1.875rem; }

  - Step 9: Commit

  git add components/ui/
  git commit -m "feat: add Button, Tag, SectionHeader, Monogram UI primitives"

  ---
  Task 6: ThemeToggle & Navbar

  Files:
  - Create: components/layout/ThemeToggle.tsx
  - Create: components/layout/ThemeToggle.module.css
  - Create: components/layout/Navbar.tsx
  - Create: components/layout/Navbar.module.css
  - Step 1: Create components/layout/ThemeToggle.tsx

  "use client";

  import { useTheme } from "next-themes";
  import { useEffect, useState } from "react";
  import styles from "./ThemeToggle.module.css";

  export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return <div className={styles.placeholder} />;

    return (
      <button
        className={styles.toggle}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "☀️ " : "🌙"}
      </button>
    );
  }

  - Step 2: Create components/layout/ThemeToggle.module.css

  .toggle {
    background: none;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    padding: 0.375rem 0.625rem;
    cursor: pointer;
    font-size: 1rem;
    transition: var(--transition);
    line-height: 1;
  }

  .toggle:hover {
    border-color: var(--color-accent);
  }

  .placeholder {
    width: 2.25rem;
    height: 2.25rem;
  }

  - Step 3: Create components/layout/Navbar.tsx

  "use client";

  import { useEffect, useState } from "react";
  import { profile } from "@/content/data";
  import { ThemeToggle } from "./ThemeToggle";
  import styles from "./Navbar.module.css";

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
          ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
          { rootMargin: "-40% 0px -55% 0px" }
        );
        obs.observe(el);
        return obs;
      });
      return () => observers.forEach((o) => o?.disconnect());
    }, []);

    return (
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.inner}`}>
          <a href="#" className={styles.logo}>{profile.initials}</a>

          <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={`${styles.link} ${activeSection === href.slice(1) ? styles.active : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className={styles.actions}>
            <ThemeToggle />
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>
    );
  }

  - Step 4: Create components/layout/Navbar.module.css

  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: var(--color-bg);
    border-bottom: 1px solid transparent;
    transition: var(--transition);
  }

  .scrolled {
    border-bottom-color: var(--color-border);
    box-shadow: var(--shadow-md);
  }

  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
  }

  .logo {
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-text);
    letter-spacing: -0.02em;
  }

  .logo:hover {
    color: var(--color-accent);
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .link {
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-text-muted);
    text-decoration: none;
    padding-bottom: 2px;
    border-bottom: 2px solid transparent;
    transition: var(--transition);
  }

  .link:hover,
  .link.active {
    color: var(--color-accent);
    border-bottom-color: var(--color-accent);
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .hamburger {
    display: none;
    background: none;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    padding: 0.375rem 0.625rem;
    cursor: pointer;
    font-size: 1rem;
    color: var(--color-text);
    transition: var(--transition);
  }

  @media (max-width: 768px) {
    .hamburger { display: flex; }

    .nav {
      display: none;
      position: absolute;
      top: 4rem;
      left: 0;
      right: 0;
      flex-direction: column;
      background-color: var(--color-bg);
      border-bottom: 1px solid var(--color-border);
      padding: 1rem 1.5rem;
      gap: 1rem;
      box-shadow: var(--shadow-md);
    }

    .nav.open { display: flex; }
  }

  - Step 5: Commit

  git add components/layout/
  git commit -m "feat: add ThemeToggle and Navbar with scroll shadow and active tracking"

  ---
  Task 7: Footer

  Files:
  - Create: components/layout/Footer.tsx
  - Create: components/layout/Footer.module.css
  - Step 1: Create components/layout/Footer.tsx

  import { profile } from "@/content/data";
  import { ThemeToggle } from "./ThemeToggle";
  import styles from "./Footer.module.css";

  export function Footer() {
    const year = new Date().getFullYear();
    return (
      <footer className={styles.footer}>
        <div className={`container ${styles.inner}`}>
          <p className={styles.copy}>
            © {year} {profile.name}
          </p>
          <div className={styles.links}>
            <a href={`mailto:${profile.email}`} className={styles.link}>
              Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              LinkedIn
            </a>
          </div>
          <ThemeToggle />
        </div>
      </footer>
    );
  }

  - Step 2: Create components/layout/Footer.module.css

  .footer {
    border-top: 1px solid var(--color-border);
    padding: 2rem 0;
    background-color: var(--color-bg);
  }

  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .copy {
    font-family: var(--font-body);
    font-size: 0.875rem;
    color: var(--color-text-muted);
  }

  .links {
    display: flex;
    gap: 1.5rem;
  }

  .link {
    font-family: var(--font-body);
    font-size: 0.875rem;
    color: var(--color-text-muted);
    transition: var(--transition);
  }

  .link:hover {
    color: var(--color-accent);
  }

  - Step 3: Commit

  git add components/layout/Footer.tsx components/layout/Footer.module.css
  git commit -m "feat: add Footer component"

  ---
  Task 8: Hero Section

  Files:
  - Create: components/sections/Hero.tsx
  - Create: components/sections/Hero.module.css
  - Step 1: Create components/sections/Hero.tsx

  import { profile } from "@/content/data";
  import { Button } from "@/components/ui/Button";
  import { Monogram } from "@/components/ui/Monogram";
  import { Tag } from "@/components/ui/Tag";
  import styles from "./Hero.module.css";

  const HERO_TAGS = ["Engineering Leadership", "Machine Learning", "Cloud Architecture"];

  export function Hero() {
    return (
      <section className={styles.hero} id="hero">
        <div className={`container ${styles.inner}`}>
          <div className={styles.monogramWrap}>
            <Monogram initials={profile.initials} size="lg" />
          </div>

          <h1 className={styles.name}>{profile.name}</h1>

          <p className={styles.role}>
            {profile.role} · {profile.company} · {profile.location}
          </p>

          <div className={styles.tags}>
            {HERO_TAGS.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <div className={styles.ctas}>
            <Button href="#experience" variant="primary">
              View Experience
            </Button>
            <Button href="#contact" variant="ghost">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    );
  }

  - Step 2: Create components/sections/Hero.module.css

  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6rem 0 4rem;
    background-color: var(--color-bg);
  }

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.25rem;
  }

  .monogramWrap {
    animation: fadeUp 0.5s ease both;
    animation-delay: 0s;
  }

  .name {
    font-size: clamp(2.5rem, 7vw, 4rem);
    letter-spacing: -0.04em;
    color: var(--color-text);
    animation: fadeUp 0.5s ease both;
    animation-delay: 0.1s;
  }

  .role {
    font-family: var(--font-body);
    font-size: 1rem;
    color: var(--color-text-muted);
    font-weight: 500;
    animation: fadeUp 0.5s ease both;
    animation-delay: 0.2s;
  }

  .tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
    animation: fadeUp 0.5s ease both;
    animation-delay: 0.3s;
  }

  .ctas {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    justify-content: center;
    animation: fadeUp 0.5s ease both;
    animation-delay: 0.4s;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(16px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  - Step 3: Commit

  git add components/sections/Hero.tsx components/sections/Hero.module.css
  git commit -m "feat: add Hero section with staggered entrance animation"

  ---
  Task 9: About Section

  Files:
  - Create: components/sections/About.tsx
  - Create: components/sections/About.module.css
  - Step 1: Create components/sections/About.tsx

  import { about } from "@/content/data";
  import { SectionHeader } from "@/components/ui/SectionHeader";
  import styles from "./About.module.css";

  export function About() {
    return (
      <section className={`section section--subtle ${styles.about}`} id="about">
        <div className="container">
          <SectionHeader title="About" />
          <div className={styles.grid}>
            <div className={styles.statement}>
              <p>{about.statement}</p>
            </div>
            <div className={styles.stats}>
              {about.stats.map(({ label, value }) => (
                <div key={label} className={styles.stat}>
                  <span className={styles.statValue}>{value}</span>
                  <span className={styles.statLabel}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  - Step 2: Create components/sections/About.module.css

  .about {}

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
  }

  .statement p {
    font-family: var(--font-body);
    font-size: 1.0625rem;
    line-height: 1.75;
    color: var(--color-text-muted);
  }

  .stats {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .stat {
    padding: 1.5rem;
    background-color: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .statValue {
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-accent);
    letter-spacing: -0.03em;
  }

  .statLabel {
    font-family: var(--font-body);
    font-size: 0.875rem;
    color: var(--color-text-muted);
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
  }

  - Step 3: Commit

  git add components/sections/About.tsx components/sections/About.module.css
  git commit -m "feat: add About section with stats cards"

  ---
  Task 10: Experience Section

  Files:
  - Create: components/sections/Experience.tsx
  - Create: components/sections/Experience.module.css
  - Step 1: Create components/sections/Experience.tsx

  "use client";

  import { useState } from "react";
  import { experience } from "@/content/data";
  import { SectionHeader } from "@/components/ui/SectionHeader";
  import styles from "./Experience.module.css";

  export function Experience() {
    const [showAll, setShowAll] = useState(false);

    const visible = experience.filter((e) => !e.collapsed || showAll);
    const hiddenCount = experience.filter((e) => e.collapsed).length;

    return (
      <section className="section" id="experience">
        <div className="container">
          <SectionHeader title="Experience" />
          <div className={styles.timeline}>
            {visible.map((item, i) => (
              <div key={`${item.company}-${item.role}`} className={styles.item}>
                <div className={styles.line}>
                  <div className={styles.dot} />
                  {i < visible.length - 1 && <div className={styles.connector} />}
                </div>
                <div className={styles.content}>
                  <div className={styles.meta}>
                    <span className={styles.period}>
                      {item.start} – {item.end}
                    </span>
                    <span className={styles.location}>{item.location}</span>
                  </div>
                  <h3 className={styles.role}>{item.role}</h3>
                  <p className={styles.company}>{item.company}</p>
                  <ul className={styles.bullets}>
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {!showAll && hiddenCount > 0 && (
            <button className={styles.expander} onClick={() => setShowAll(true)}>
              Show {hiddenCount} earlier positions ↓
            </button>
          )}
        </div>
      </section>
    );
  }

  - Step 2: Create components/sections/Experience.module.css

  .timeline {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .item {
    display: grid;
    grid-template-columns: 1.5rem 1fr;
    gap: 0 1.5rem;
    padding-bottom: 2.5rem;
  }

  .line {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0.375rem;
  }

  .dot {
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 50%;
    background-color: var(--color-accent);
    border: 2px solid var(--color-bg);
    box-shadow: 0 0 0 2px var(--color-accent);
    flex-shrink: 0;
  }

  .connector {
    flex: 1;
    width: 1px;
    background-color: var(--color-border);
    margin-top: 0.375rem;
  }

  .content {
    padding-bottom: 0.5rem;
  }

  .meta {
    display: flex;
    gap: 1rem;
    margin-bottom: 0.375rem;
    flex-wrap: wrap;
  }

  .period,
  .location {
    font-family: var(--font-body);
    font-size: 0.8125rem;
    color: var(--color-text-muted);
    font-weight: 500;
  }

  .role {
    font-size: 1.125rem;
    letter-spacing: -0.02em;
    color: var(--color-text);
    margin-bottom: 0.125rem;
  }

  .company {
    font-family: var(--font-body);
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--color-accent);
    margin-bottom: 0.75rem;
  }

  .bullets {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
  }

  .bullets li {
    font-family: var(--font-body);
    font-size: 0.9375rem;
    color: var(--color-text-muted);
    line-height: 1.6;
    padding-left: 1rem;
    position: relative;
  }

  .bullets li::before {
    content: "–";
    position: absolute;
    left: 0;
    color: var(--color-accent);
  }

  .expander {
    margin-top: 1rem;
    background: none;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    padding: 0.625rem 1.25rem;
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-text-muted);
    cursor: pointer;
    transition: var(--transition);
  }

  .expander:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
  }

  - Step 3: Commit

  git add components/sections/Experience.tsx components/sections/Experience.module.css
  git commit -m "feat: add Experience section with vertical timeline and expander"

  ---
  Task 11: Skills Section

  Files:
  - Create: components/sections/Skills.tsx
  - Create: components/sections/Skills.module.css
  - Step 1: Create components/sections/Skills.tsx

  import { skills } from "@/content/data";
  import { SectionHeader } from "@/components/ui/SectionHeader";
  import { Tag } from "@/components/ui/Tag";
  import styles from "./Skills.module.css";

  const COLUMNS = [
    { label: "Leadership", items: skills.leadership },
    { label: "Engineering", items: skills.engineering },
    { label: "Domain", items: skills.domain },
  ];

  export function Skills() {
    return (
      <section className="section section--subtle" id="skills">
        <div className="container">
          <SectionHeader title="Skills" />
          <div className={styles.grid}>
            {COLUMNS.map(({ label, items }) => (
              <div key={label} className={styles.column}>
                <h3 className={styles.columnTitle}>{label}</h3>
                <div className={styles.tags}>
                  {items.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  - Step 2: Create components/sections/Skills.module.css

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }

  .column {}

  .columnTitle {
    font-size: 1rem;
    font-family: var(--font-body);
    font-weight: 600;
    color: var(--color-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 1rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  - Step 3: Commit

  git add components/sections/Skills.tsx components/sections/Skills.module.css
  git commit -m "feat: add Skills section with three-column tag layout"

  ---
  Task 12: Education Section

  Files:
  - Create: components/sections/Education.tsx
  - Create: components/sections/Education.module.css
  - Step 1: Create components/sections/Education.tsx

  import { education } from "@/content/data";
  import { SectionHeader } from "@/components/ui/SectionHeader";
  import styles from "./Education.module.css";

  export function Education() {
    return (
      <section className="section" id="education">
        <div className="container">
          <SectionHeader title="Education & Certifications" />
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Education</h3>
              <div className={styles.entries}>
                {education.degrees.map((d) => (
                  <div key={d.institution} className={styles.entry}>
                    <p className={styles.entryTitle}>{d.institution}</p>
                    <p className={styles.entrySubtitle}>
                      {d.degree} · {d.field}
                    </p>
                    <p className={styles.entryYears}>{d.years}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Certifications</h3>
              <div className={styles.entries}>
                {education.certifications.map((c) => (
                  <div key={c.name} className={styles.entry}>
                    <p className={styles.entryTitle}>{c.name}</p>
                    <p className={styles.entrySubtitle}>{c.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  - Step 2: Create components/sections/Education.module.css

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .card {
    background-color: var(--color-bg-subtle);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: 2rem;
    box-shadow: var(--shadow-sm);
  }

  .cardTitle {
    font-size: 1.125rem;
    letter-spacing: -0.02em;
    color: var(--color-text);
    margin-bottom: 1.5rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--color-border);
  }

  .entries {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .entry {}

  .entryTitle {
    font-family: var(--font-body);
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 0.125rem;
  }

  .entrySubtitle {
    font-family: var(--font-body);
    font-size: 0.875rem;
    color: var(--color-text-muted);
  }

  .entryYears {
    font-family: var(--font-body);
    font-size: 0.8125rem;
    color: var(--color-accent);
    font-weight: 500;
    margin-top: 0.125rem;
  }

  @media (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }

  - Step 3: Commit

  git add components/sections/Education.tsx components/sections/Education.module.css
  git commit -m "feat: add Education and Certifications section"

  ---
  Task 13: Contact Section & API Route

  Files:
  - Create: components/sections/Contact.tsx
  - Create: components/sections/Contact.module.css
  - Create: app/api/contact/route.ts
  - Step 1: Create app/api/contact/route.ts

  import { Resend } from "resend";
  import { NextRequest, NextResponse } from "next/server";

  const resend = new Resend(process.env.RESEND_API_KEY);

  export async function POST(req: NextRequest) {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    try {
      await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: process.env.CONTACT_TO_EMAIL!,
        replyTo: email,
        subject: `Portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      });
      return NextResponse.json({ success: true });
    } catch {
      return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
    }
  }

  - Step 2: Create components/sections/Contact.tsx

  "use client";

  import { useState } from "react";
  import { profile } from "@/content/data";
  import { SectionHeader } from "@/components/ui/SectionHeader";
  import { Button } from "@/components/ui/Button";
  import styles from "./Contact.module.css";

  type Status = "idle" | "sending" | "success" | "error";

  export function Contact() {
    const [status, setStatus] = useState<Status>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      setStatus("sending");
      const fd = new FormData(e.currentTarget);
      const payload = {
        name: fd.get("name") as string,
        email: fd.get("email") as string,
        message: fd.get("message") as string,
      };

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok) {
          setErrorMsg(data.error ?? "Something went wrong.");
          setStatus("error");
        } else {
          setStatus("success");
          (e.target as HTMLFormElement).reset();
        }
      } catch {
        setErrorMsg("Network error. Please try again.");
        setStatus("error");
      }
    }

    return (
      <section className="section section--subtle" id="contact">
        <div className="container">
          <SectionHeader
            title="Get in Touch"
            subtitle="Open to conversations about interesting problems and opportunities."
          />

          <div className={styles.grid}>
            <div className={styles.links}>
              <a href={`mailto:${profile.email}`} className={styles.linkItem}>
                <span className={styles.linkLabel}>Email</span>
                <span className={styles.linkValue}>{profile.email}</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkItem}
              >
                <span className={styles.linkLabel}>LinkedIn</span>
                <span className={styles.linkValue}>mehmet-tenekeci</span>
              </a>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input id="name" name="name" type="text" className={styles.input} required />
              </div>
              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input id="email" name="email" type="email" className={styles.input} required />
              </div>
              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea id="message" name="message" className={styles.textarea} rows={5} required />
              </div>

              {status === "success" && (
                <p className={styles.success}>Message sent — I'll be in touch soon.</p>
              )}
              {status === "error" && (
                <p className={styles.error}>{errorMsg}</p>
              )}

              <Button type="submit" variant="primary" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  - Step 3: Create components/sections/Contact.module.css

  .grid {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 4rem;
    align-items: start;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .linkItem {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 1.25rem 1.5rem;
    background-color: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
    text-decoration: none;
  }

  .linkItem:hover {
    border-color: var(--color-accent);
    box-shadow: var(--shadow-md);
  }

  .linkLabel {
    font-family: var(--font-body);
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-accent);
  }

  .linkValue {
    font-family: var(--font-body);
    font-size: 0.9375rem;
    color: var(--color-text);
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
  }

  .label {
    font-family: var(--font-body);
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--color-text-muted);
  }

  .input,
  .textarea {
    font-family: var(--font-body);
    font-size: 0.9375rem;
    color: var(--color-text);
    background-color: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    padding: 0.625rem 0.875rem;
    transition: var(--transition);
    resize: vertical;
    width: 100%;
  }

  .input:focus,
  .textarea:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px rgba(26, 63, 170, 0.1);
  }

  .success {
    font-family: var(--font-body);
    font-size: 0.875rem;
    color: #16a34a;
    font-weight: 500;
  }

  .error {
    font-family: var(--font-body);
    font-size: 0.875rem;
    color: #dc2626;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
  }

  - Step 4: Commit

  git add components/sections/Contact.tsx components/sections/Contact.module.css app/api/
  git commit -m "feat: add Contact section with form and Resend API route"

  ---
  Task 14: Compose Home Page

  Files:
  - Modify: app/page.tsx
  - **Step

⏺ Step 1: Rewrite app/page.tsx

  import { Navbar } from "@/components/layout/Navbar";
  import { Footer } from "@/components/layout/Footer";
  import { Hero } from "@/components/sections/Hero";
  import { About } from "@/components/sections/About";
  import { Experience } from "@/components/sections/Experience";
  import { Skills } from "@/components/sections/Skills";
  import { Education } from "@/components/sections/Education";
  import { Contact } from "@/components/sections/Contact";

  export default function Home() {
    return (
      <>
        <Navbar />
        <main style={{ paddingTop: "4rem" }}>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </>
    );
  }

  - Step 2: Run dev server and verify full page renders

  npm run dev

  Open http://localhost:3000. Expected: full page with all sections visible, navbar fixed at top, theme toggle works.

  - Step 3: Commit

  git add app/page.tsx
  git commit -m "feat: compose home page with all sections"

  ---
  Task 15: Build Verification & Lint

  Files: none

  - Step 1: Run lint

  npm run lint

  Expected: no errors.

  - Step 2: Run production build

  npm run build

  Expected: build completes with no errors. Note any warnings about missing env vars (RESEND_API_KEY) — these are
  expected locally.

  - Step 3: Smoke test production build

  npm run start

  Open http://localhost:3000. Verify: light/dark toggle works, all sections render, no console errors.

  - Step 4: Final commit

  git add -A
  git commit -m "chore: verify production build passes"
