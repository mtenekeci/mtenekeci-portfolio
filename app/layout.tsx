import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { playfair, inter } from "@/lib/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Mehmet Tenekeci — Engineering Manager",
  description:
    "Engineering Manager at IMTF, ex-Google. Building high-performing teams and scalable tech solutions in Zurich, Switzerland.",
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
