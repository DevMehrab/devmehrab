import Reveal from "@/components/ui/Reveal";
import ProjectGrid from "../projects/ProjectGrid";

const projects = [
  {
    title: "Investor Portal",
    description:
      "A modern investor platform that makes equity accessible: buy fractional ownership via digital tokens, monitor portfolio, and participate in company growth with transparent, secure transactions.",
    tech: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "Stripe"],
    live: "https://investment.digital-trading-platforms.com",
    featured: false,
  },
  {
    title: "Atenier | E-Commerce",
    description:
      "A full-stack SEO optimised luxury e-commerce website with a custom admin dashboard for inventory management and order processing.",
    tech: ["Next.js", "TypeScript", "Tailwind", "MongoDB"],
    live: "https://atenier.com",
    featured: false,
  },
  {
    title: "Prestt Plumbing",
    description:
      "A responsive website for a plumbing business featuring a modern design, mobile-friendly, service listings, and contact forms.",
    tech: ["Next.js", "Tailwind", "Shadcn/UI", "web3forms"],
    live: "https://presttplumbing.netlify.app/",
    featured: false,
  },
  {
    title: "Outreach AI",
    description:
      "A productivity-focused SaaS tool designed to automate and personalize cold outreach at scale using AI-driven message generation and bulk processing.",
    tech: ["Next.js", "Tailwind", "MongoDB", "Gemini API"],
    live: "https://outreach-ai-theta.vercel.app/",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-12 md:py-32 w-full bg-zinc-950 overflow-hidden"
    >
      <div
        className="absolute top-1/2 right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, rgba(9, 9, 11, 0) 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row gap-12 lg:gap-20 relative z-10">
        <div className="lg:w-24 flex-shrink-0">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-4 lg:flex-col lg:h-full lg:justify-start">
              <span className="text-cyan-500 font-mono text-sm">02.</span>
              <div className="h-[1px] hidden md:block w-12 lg:w-[1px] lg:h-24 bg-zinc-800" />
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-100 tracking-widest uppercase lg:-rotate-180 lg:[writing-mode:vertical-rl] whitespace-nowrap">
                Projects
              </h2>
            </div>
          </Reveal>
        </div>

        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}
