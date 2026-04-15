"use client";

import Reveal from "@/components/ui/Reveal";
import { ArrowUpRight, Activity, GitBranch } from "lucide-react";

// Define the type for your project data
type Project = {
  title: string;
  description: string;
  tech: string[];
  live: string;
  featured: boolean;
};

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <Reveal
          key={index}
          delay={0.2 + index * 0.1}
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
                  className={`font-bold text-zinc-100 group-hover:text-cyan-400 transition-colors ${
                    project.featured ? "text-3xl sm:text-4xl" : "text-2xl"
                  }`}
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
  );
}
