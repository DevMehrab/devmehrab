import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Faq from "@/components/sections/Faq";

export default function Home() {
  return (
    <div className="flex bg-[#0a0a0a] flex-col">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Faq />
    </div>
  );
}
