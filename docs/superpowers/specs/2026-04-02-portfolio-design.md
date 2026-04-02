# Portfolio Website Design Spec
**Date:** 2026-04-02  
**Subject:** mehmettenekeci.com — Personal Portfolio  
**Status:** Approved

---

## Overview

A professional personal portfolio and brand hub for Mehmet Tenekeci, Engineering Manager at IMTF (ex-Google), based in Zurich, Switzerland. The site serves dual purpose: personal brand establishment and career signal for senior engineering leadership roles.

**Primary audience:** Hiring managers, recruiters, tech leads, and professional peers.

---

## Tech Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | CSS Modules + CSS custom properties |
| Theming | `next-themes` (light/dark, localStorage persisted) |
| Fonts | Google Fonts — Playfair Display + Inter |
| Contact form | Resend (API route handler) |
| Deployment | Vercel (recommended) |

---

## Architecture

### File Structure

```
mtenekeci-portfolio/
├── app/
│   ├── layout.tsx              # Root layout: fonts, ThemeProvider, metadata
│   ├── page.tsx                # Home — composes all sections in order
│   ├── api/
│   │   └── contact/route.ts    # Resend form handler
│   └── (future)/               # /blog, /projects, /speaking — add as needed
├── components/
│   ├── sections/               # One file per section
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   ├── ui/                     # Reusable primitives
│   │   ├── Button.tsx
│   │   ├── Tag.tsx
│   │   ├── SectionHeader.tsx
│   │   └── Monogram.tsx
│   └── layout/
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       └── ThemeToggle.tsx
├── content/
│   └── data.ts                 # Single source of truth for all content
├── styles/
│   ├── tokens.css              # All CSS custom properties — palette lives here
│   └── globals.css             # Resets, typography scale, dark mode overrides
└── lib/
    └── fonts.ts                # Playfair Display + Inter Next.js font definitions
```

### Plug-and-Play Rule

- **New section:** Create `components/sections/NewSection.tsx` + add data to `content/data.ts` + import in `app/page.tsx`.
- **New page:** Create `app/[route]/page.tsx`. Nothing else changes.

---

## Design System

### Color Tokens (`styles/tokens.css`)

```css
:root {
  --color-bg:           #ffffff;
  --color-bg-subtle:    #f8f9fb;
  --color-border:       #e2e6ed;
  --color-text:         #111827;
  --color-text-muted:   #6b7280;
  --color-accent:       #1a3faa;
  --color-accent-hover: #1e40af;
  --shadow-sm:          0 1px 3px rgba(0,0,0,0.06);
  --shadow-md:          0 4px 16px rgba(0,0,0,0.08);
}

[data-theme="dark"] {
  --color-bg:           #0d1117;
  --color-bg-subtle:    #161b22;
  --color-border:       #21262d;
  --color-text:         #f0f6fc;
  --color-text-muted:   #8b949e;
  --color-accent:       #4d7fff;
  --color-accent-hover: #6b92ff;
  --shadow-sm:          0 1px 3px rgba(0,0,0,0.3);
  --shadow-md:          0 4px 16px rgba(0,0,0,0.4);
}
```

**Palette swap:** Changing the entire color scheme requires editing only `styles/tokens.css`.

### Typography

- **Display/Headings:** Playfair Display — loaded via `next/font/google`, `font-weight: 700`, `letter-spacing: -0.03em`
- **Body/UI:** Inter — loaded via `next/font/google`, `font-weight: 400/500/600`
- **No gradients anywhere.** Solid colors only.

### Premium Touches

- Subtle `box-shadow` on cards (`--shadow-sm`) and navbar (scroll-activated, `--shadow-md`)
- Fine `1px` borders using `--color-border`
- Generous section padding — `padding: 6rem 0` on desktop
- All interactive elements: `transition: all 200ms ease`
- Navbar active link: small sapphire `2px` underline that tracks scroll position via IntersectionObserver

---

## Layout

**Structure:** Hybrid  
- Home (`/`) is a single scrolling page composed of all sections  
- Future pages (`/blog`, `/projects`, `/speaking`) live at their own routes  
- No full-page reload on section navigation — anchor scroll with `scroll-behavior: smooth`

---

## Sections

### Navbar
- Fixed top, full-width
- Left: "MT" text monogram (Playfair Display)
- Right: anchor links (About · Experience · Skills · Education · Contact) + ThemeToggle
- Scroll-activated shadow
- Mobile: hamburger → slide-down menu

### Hero
- Full-viewport height, centered layout
- MT monogram: styled circle, sapphire `1px` border, Playfair Display initials
- Name: Playfair Display, large, `letter-spacing: -0.04em`
- Role line: Inter, muted color — "Engineering Manager · IMTF · Zurich"
- Skill tags: Engineering Leadership · Machine Learning · Cloud Architecture
- Two CTAs: "View Experience" (filled sapphire) + "Get in Touch" (ghost/outline)
- Entrance animation: elements stagger fade-in on load (CSS `animation-delay`)

### About
- Two-column desktop, single-column mobile
- Left: 3–4 sentence personal statement (editable in `content/data.ts`)
- Right: three quick-stat cards — Years of Experience · Companies · Countries

### Experience
- Vertical timeline, most recent first
- Each entry: company, role, dates, location, bullet points
- Logos for Google, IMTF, Ericsson, KoçSistem
- Entries before 2018 collapsed under a "Show earlier experience" expander

**Timeline entries (from data.ts):**
1. IMTF — Engineering Manager (May 2025–Present)
2. Google — Engineering Manager (Aug 2022–Jul 2024)
3. KoçSistem — Senior Software Development Domain Leader (Sep 2021–Jul 2022)
4. KoçSistem — Software Development Technology Manager (Sep 2019–Sep 2021)
5. KoçSistem — Software Development Leader (Jun 2018–Aug 2019)
6. *(collapsed)* Ericsson — Solution Architect / Software Engineer
7. *(collapsed)* 6Kare — Senior Software Engineer
8. *(collapsed)* Intranet Information Technologies — Application Development Lead / Specialist
9. *(collapsed)* EMU Teknopark, EMU, Siemens

### Skills
- Three columns: Leadership · Engineering · Domain
- Rendered as clean tags (no progress bars)
- Sample groupings:
  - **Leadership:** Engineering Leadership, Team Building, Career Development, Cross-functional Collaboration, Hiring
  - **Engineering:** Machine Learning, Deep Learning, Cloud Architecture, .NET, Java, Python, System Design
  - **Domain:** RegTech, Telecom, Enterprise Systems, Digital Transformation

### Education & Certifications
- Two side-by-side cards
- **Education:** İstanbul Technical University (MSc IT), Southern States University (MBA), Eastern Mediterranean University (BSc CS)
- **Certifications:** EF SET C2 English, PSM I, Machine Learning, Koç Dialogues Development Program

### Contact
- Email link (`mehmet@tenekeci.ch`) + LinkedIn button — prominent, above the form
- Minimal form: Name · Email · Message · Submit
- Form submitted to `/api/contact` → Resend
- Inline success/error state, no page reload
- Form handler uses `RESEND_API_KEY` environment variable

### Footer
- Minimal: copyright + LinkedIn + email icon links
- Theme toggle (secondary location)

---

## Content Data Structure (`content/data.ts`)

```typescript
export const profile: Profile           // name, role, company, location, email, linkedin
export const about: About               // statement: string, stats: Stat[]
export const experience: ExperienceItem[] // company, role, start, end, location, bullets[], logo?: string, collapsed?: boolean
export const skills: Skills             // leadership: string[], engineering: string[], domain: string[]
export const education: Education       // degrees: Degree[], certifications: Certification[]
```

---

## Environment Variables

```
RESEND_API_KEY=...
CONTACT_TO_EMAIL=mehmet@tenekeci.ch
```

---

## Out of Scope (for now)

- Blog / writing
- Projects showcase
- Speaking engagements
- CMS integration
- Analytics
- i18n

All of the above can be added as new routes/sections without modifying existing code.
