export const dynamic = "force-dynamic";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Expertise } from "@/components/sections/Expertise";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const turnstileSiteKey = process.env.TURNSTILE_SITE_KEY ?? "";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact turnstileSiteKey={turnstileSiteKey} />
      </main>
      <Footer />
    </div>
  );
}
