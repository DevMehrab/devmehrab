import React from "react";

interface TerminalWindowProps {
  children: React.ReactNode;
  title?: string;
}

export default function TerminalWindow({
  children,
  title = "mehrab_hossain.ts",
}: TerminalWindowProps) {
  return (
    <div className="w-full rounded-xl bg-[#0a0a0a] border border-zinc-800 shadow-2xl overflow-hidden">
      {/* Mac-style Window Header */}
      <div className="flex items-center px-4 py-3 border-b border-zinc-800 bg-[#121212]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
        </div>
        <div className="flex-1 text-center pr-8">
          <span className="text-xs text-zinc-500 font-mono">{title}</span>
        </div>
      </div>

      {/* Terminal Content Area */}
      <div className="p-5 sm:p-6 font-mono text-sm sm:text-base text-zinc-300 overflow-x-auto leading-relaxed">
        {children}
      </div>
    </div>
  );
}
