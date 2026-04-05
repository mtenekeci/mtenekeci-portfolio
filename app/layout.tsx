import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { dmSerifDisplay, inter } from "@/lib/fonts";
import "@/styles/globals.css";

const BASE_URL = "https://mehmettenekeci.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  title: "Mehmet Tenekeci — Engineering Manager",
  description:
    "Engineering Manager at IMTF, ex-Google. 15+ years building high-performing engineering teams across ML, Cloud, and RegTech in Zurich, Switzerland.",
  keywords: [
    "Mehmet Tenekeci",
    "Engineering Manager",
    "ex-Google",
    "IMTF",
    "Zurich",
    "Switzerland",
    "Machine Learning",
    "Cloud Architecture",
    "RegTech",
    "Team Leadership",
    "Software Engineering",
  ],
  authors: [{ name: "Mehmet Tenekeci", url: BASE_URL }],
  creator: "Mehmet Tenekeci",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Mehmet Tenekeci — Engineering Manager",
    description:
      "Engineering Manager at IMTF, ex-Google. 15+ years building high-performing engineering teams across ML, Cloud, and RegTech in Zurich, Switzerland.",
    url: BASE_URL,
    siteName: "Mehmet Tenekeci",
    locale: "en_US",
    type: "profile",
    firstName: "Mehmet",
    lastName: "Tenekeci",
  },
  twitter: {
    card: "summary",
    title: "Mehmet Tenekeci — Engineering Manager",
    description:
      "Engineering Manager at IMTF, ex-Google. 15+ years across ML, Cloud, and RegTech. Based in Zurich.",
    creator: "@mtenekeci",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mehmet Tenekeci",
  url: BASE_URL,
  jobTitle: "Engineering Manager",
  worksFor: {
    "@type": "Organization",
    name: "IMTF",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "İstanbul Technical University",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Eastern Mediterranean University",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Zurich",
    addressCountry: "CH",
  },
  sameAs: ["https://www.linkedin.com/in/mehmet-tenekeci/"],
  knowsAbout: [
    "Engineering Management",
    "Machine Learning",
    "Cloud Architecture",
    "RegTech",
    "Telecom Systems",
    "Team Leadership",
    "System Design",
  ],
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
      className={`${dmSerifDisplay.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
