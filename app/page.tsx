import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const turnstileSiteKey = process.env.TURNSTILE_SITE_KEY ?? "";

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "4rem" }}>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact turnstileSiteKey={turnstileSiteKey} />
      </main>
      <Footer />
    </>
  );
}
