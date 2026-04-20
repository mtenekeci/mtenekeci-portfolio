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
  tagline: "Engineering leader operating at Director scope — big tech, RegTech, and enterprise platforms.",
};

// ─── About ──────────────────────────────────────────────────────────────────

export const about = {
  statement:
    "Engineering leader operating at Director scope across big tech, RegTech, and enterprise platforms. I currently lead the engineering organization behind IMTF's AML / KYC / Embargo / Detect product line — regulated software serving global financial institutions. Previously at Google, I led infrastructure work in the platform powering Google's internal traffic, including the GPU-protection layer Gemini depends on. Earlier, I built and led the Digital Transformation Office at Koç Holding — one of Turkey's largest conglomerates — driving emerging-technology programs across 40+ subsidiaries, including medical-imaging AI and production quantum-computing.",
  stats: [
    { label: "Direct Reports", value: "25+" },
    { label: "Google Platform Adoption", value: "21% → 46%" },
    { label: "Global FIs Served", value: "1,500+" },
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
      "Lead the build-out of Detect — IMTF's next-generation platform replacing the incumbent Siron One (AML, KYC, Embargo Archive, ACM) across 1,500+ global financial institutions.",
      "Lead integration of AI-powered fraud-detection and name-screening capabilities (models built by IMTF's AI teams) into the Detect product — end-to-end productization: product integration, regulatory packaging, rollout planning.",
      "Doubled team agility and drove +30% delivery in the first ~11 months through team restructuring, hiring expansion, infrastructure modernization, and backlog refinement.",
      "Restructured the inherited engineering organization into sub-teams with Tech Leads across frontend, backend, and internal QA; continued hiring to match the expanding scope of the product line.",
      "Partner directly with the CTO on the platform-replacement roadmap, AI-productization strategy, and engineering-wide delivery performance.",
    ],
  },
  {
    company: "Google",
    role: "Engineering Manager",
    start: "August 2022",
    end: "July 2024",
    location: "Zurich, Switzerland",
    bullets: [
      "Grew platform adoption within Google's internal infrastructure from 21% → 46% over the ~20-month tenure — team recognized with a Google Golden Perf Award.",
      "Invented the GPU-protection layer, extending the platform's existing CPU and memory protection to GPU workloads. Shipped to production; Gemini has depended on it from its early phases through current operation.",
      "Initiated and led cross-org engineering working groups addressing multi-quarter infrastructure problems that had previously failed — reporting to SVP leadership; collaborated with L8 (Distinguished) engineers.",
      "Established a metrics framework for measuring supportive engineering work and cross-axis team efficiency across the division.",
      "Attacked cross-team collaboration as an explicit mandate in a notoriously siloed culture — led multi-team initiatives while contributing hands-on in code alongside management.",
    ],
  },
  {
    company: "KoçSistem",
    role: "Senior Software Development Domain Leader",
    start: "June 2018",
    end: "July 2022",
    location: "Istanbul, Turkey",
    bullets: [
      "Built and led the Digital Transformation Office with 21+ direct reports — the corporate coordination layer guiding digital-transformation programs across 40+ Koç Holding subsidiaries.",
      "Led the Azure hybrid-cloud transformation corporate-wide, end-to-end from inception to delivery.",
      "Drove emerging-technology initiatives from research into production: novel AI models for CT-scan anomaly detection adopted by 30+ hospitals; production quantum-computing route optimization for 2,200+ trucks/day; early-GPT PoC integrated into a shipped corporate HR platform.",
      "Turned around a red-zone project with a 6-month survival mandate — led strategically and contributed hands-on; restored positive trajectory by month 4.",
    ],
  },
  {
    company: "Ericsson",
    role: "Solution Architect",
    start: "September 2015",
    end: "May 2018",
    location: "Istanbul, Turkey",
    bullets: [
      "Delivered telecommunication solutions for leading telecom operators in Turkey and Italy — architected integrated solutions and managed customer engagements end-to-end.",
      "Promoted from Software Engineer (Sep 2015 – Dec 2017) to Solution Architect (Dec 2017 – May 2018).",
    ],
    collapsed: true,
  },
  {
    company: "Intranet Information Technologies",
    role: "Application Development Lead",
    start: "April 2010",
    end: "July 2014",
    location: "Istanbul, Turkey",
    bullets: [
      "Led an 8-person .NET application development team; promoted from Application Development Specialist.",
    ],
    collapsed: true,
  },
  {
    company: "Eastern Mediterranean University",
    role: "Software Engineer & Research Assistant",
    start: "2008",
    end: "2010",
    location: "Famagusta, North Cyprus",
    bullets: [
      "Software engineering and research work at the EMU technology park during final-year studies.",
    ],
    collapsed: true,
  },
  {
    company: "Siemens",
    role: "Intern",
    start: "June 2008",
    end: "September 2008",
    location: "Istanbul, Turkey",
    bullets: [],
    collapsed: true,
  },
];

// ─── Skills ─────────────────────────────────────────────────────────────────

export const skills: Skills = {
  leadership: [
    "Engineering Management",
    "Engineering Leadership",
    "Technical Leadership",
    "Team Leadership",
    "Cross-functional Collaboration",
    "Mentoring",
    "Hiring",
  ],
  engineering: [
    "Platform Engineering",
    "Distributed Systems",
    "Large-Scale Systems",
    "Software Architecture",
    "System Design",
    "Infrastructure",
    "GPU",
    "AI Infrastructure",
    "Machine Learning",
    "LLM",
    "RAG",
    "Cloud Architecture",
    "Microsoft Azure",
    "Hybrid Cloud",
  ],
  domain: [
    "RegTech",
    "AML",
    "KYC",
    "Sanctions Screening",
    "Fraud Detection",
    "Financial Services",
    "Banking",
    "Agile Methodologies",
    "Scrum",
    "Digital Transformation",
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
