import { Briefcase, GraduationCap, Code2 } from "lucide-react";

export default function OGImageTemplate() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      {/* The exact 1200x630 container. 
        Screenshot exactly this bounding box!
      */}
      <div className="w-[1200px] h-[630px] bg-[#0a0a0a] relative flex items-center justify-center overflow-hidden font-sans border border-zinc-900">
        {/* Ambient Background Glows for Depth */}
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[150px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px]" />

        {/* Main Minimal Glass Card */}
        <div className="w-[1040px] h-[480px] bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-3xl p-12 flex flex-col justify-between shadow-[0_0_80px_rgba(0,0,0,0.8)] z-10">
          {/* Top Header Row */}
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="font-mono text-3xl font-bold tracking-tighter text-zinc-100 flex items-center gap-1">
              <span className="text-cyan-500">&lt;</span>
              MH
              <span className="text-cyan-500">/&gt;</span>
            </div>

            {/* Status Pill */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#121212] border border-white/10 text-zinc-300 font-mono text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              Building at iMS Technologies
            </div>
          </div>

          {/* Center Identity */}
          <div className="mt-8">
            <h1 className="text-[80px] leading-none font-bold tracking-tight mb-4">
              <span className="text-zinc-100">Mehrab </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-cyan-400 to-cyan-800">
                Hossain.
              </span>
            </h1>
            <h2 className="text-3xl font-medium text-zinc-400">
              Full-Stack Developer bridging logic and design.
            </h2>
          </div>

          {/* Bottom Bento Row */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            {/* Experience */}
            <div className="flex items-center gap-5 bg-[#0f172a]/40 border border-cyan-500/10 rounded-2xl p-5">
              <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                <Briefcase className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <p className="text-zinc-500 text-sm font-mono mb-1">
                  Current Role
                </p>
                <p className="text-zinc-100 text-lg font-bold tracking-tight">
                  Junior FS Dev
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="flex items-center gap-5 bg-white/[0.03] border border-white/5 rounded-2xl p-5">
              <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                <GraduationCap className="w-8 h-8 text-emerald-400" />
              </div>
              <div>
                <p className="text-zinc-500 text-sm font-mono mb-1">
                  Education
                </p>
                <p className="text-zinc-100 text-lg font-bold tracking-tight">
                  CSE @ BUP
                </p>
              </div>
            </div>

            {/* Stack */}
            <div className="flex items-center gap-5 bg-white/[0.03] border border-white/5 rounded-2xl p-5">
              <div className="p-3 bg-zinc-800/50 rounded-xl border border-white/10">
                <Code2 className="w-8 h-8 text-zinc-300" />
              </div>
              <div>
                <p className="text-zinc-500 text-sm font-mono mb-1">
                  Core Stack
                </p>
                <div className="flex gap-2 items-center">
                  <span className="text-cyan-400 font-mono text-base font-bold">
                    Next.js
                  </span>
                  <span className="text-zinc-700">|</span>
                  <span className="text-emerald-400 font-mono text-base font-bold">
                    MERN
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
