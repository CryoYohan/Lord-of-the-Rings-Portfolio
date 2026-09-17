import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications"; // Import the new section
import Contact from "@/components/sections/Contact";
import RealmNav from "@/components/layout/RealmNav";

export default function Home() {
  return (
    <main id="top" className="flex min-h-screen flex-col items-center">
      <RealmNav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications /> {/* The Seals of Mastery */}
      <Contact />
    </main>
  );
}
