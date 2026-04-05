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
    "I'm an Engineering Manager with 15+ years of experience leading high-performing teams across cloud architecture, machine learning, telecom, and enterprise systems. Most recently at Google and now at IMTF in Zurich, I specialize in growing engineers, driving technical strategy, and delivering complex software initiatives from inception to launch.",
  stats: [
    { label: "Years of Experience", value: "15+" },
    { label: "Engineer + Leader", value: "IC → EM" },
    { label: "Technical Domains", value: "ML · Cloud · RegTech" },
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
      "Led a team of engineers with diverse technical proficiencies, providing strategic mentorship and driving career development.",
      "Built robust partnerships with cross-functional stakeholders across product management, design, and engineering.",
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
