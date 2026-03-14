import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import OGImageTemplate from "@/components/ui/GlowingButton";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 sm:gap-32 pb-24">
      {/* We add gap-24 to ensure consistent spacing between sections without manual margins */}
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
