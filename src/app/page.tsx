import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      <Intro />
      <CursorGlow />
      <Header />
      <main className="flex-grow">
        <Hero />
        <TechMarquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

