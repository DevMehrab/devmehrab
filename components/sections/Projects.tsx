"use client";

import Reveal from "@/components/ui/Reveal";
import { ArrowUpRight, Activity, GitBranch } from "lucide-react";

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
      className="relative py-32 w-full bg-zinc-950 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-[-10%] w-[600px] h-[600px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* ================= LEFT: VERTICAL HEADER ================= */}
        <div className="lg:w-24 flex-shrink-0">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-4 lg:flex-col lg:h-full lg:justify-start">
              <span className="text-cyan-500 font-mono text-sm">02.</span>
              <div className="h-[1px] w-12 lg:w-[1px] lg:h-24 bg-zinc-800" />
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-100 tracking-widest uppercase lg:-rotate-180 lg:[writing-mode:vertical-rl] whitespace-nowrap">
                Projects
              </h2>
            </div>
          </Reveal>
        </div>

        {/* ================= RIGHT: ASYMMETRIC GRID ================= */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Reveal
              key={index}
              delay={0.2 + index * 0.1}
              // If featured, span both columns on medium screens and up
              className={project.featured ? "md:col-span-2" : "md:col-span-1"}
            >
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="group block relative h-full bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-6 sm:p-8 overflow-hidden hover:border-cyan-500/50 transition-all duration-500"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Background Grid Accent for Featured Project */}
                {project.featured && (
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] opacity-50" />
                )}

                <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                  {/* Card Header */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-950 border border-zinc-800 group-hover:border-cyan-500/30 transition-colors">
                        <Activity className="w-4 h-4 text-cyan-400" />
                      </div>
                      <span className="font-mono text-xs text-zinc-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Status: Live
                      </span>
                    </div>

                    {/* Giant Watermark Number */}
                    <span className="text-5xl font-bold text-zinc-800/30 font-mono -mt-4 -mr-2 group-hover:text-cyan-900/20 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="space-y-4">
                    <h3
                      className={`font-bold text-zinc-100 group-hover:text-cyan-400 transition-colors ${project.featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}
                    >
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl">
                      {project.description}
                    </p>
                  </div>

                  {/* Card Footer (Tech Stack & Link) */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-zinc-800/50">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <GitBranch className="w-3 h-3 text-zinc-600" />
                          <span className="text-xs font-mono text-zinc-400">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="md:flex items-center gap-2 text-cyan-400 hidden font-mono text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <span>View_Deployment</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
