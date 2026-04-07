"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { MessageSquareCode, X, Sparkles } from "lucide-react";

// Lazy load the widget for performance
const LazyChatWidget = dynamic(() => import("@/components/ui/ChatWidget"), {
  ssr: false,
});

export default function FloatingChatToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Chat"
        className={`fixed bottom-6 right-6 z-[100] flex items-center justify-center 
          h-14 w-14 rounded-2xl border transition-all duration-500 ease-out shadow-2xl
          ${
            isOpen
              ? "bg-zinc-900 border-zinc-700 rotate-90 scale-90"
              : "bg-blue-500 border-blue-400 hover:scale-110 active:scale-95 shadow-cyan-500/20"
          }`}
      >
        {/* Ambient Pulse Effect (only when closed) */}
        {/* {!isOpen && (
          <span className="absolute inset-0 rounded-2xl bg-blue-400 opacity-20 pointer-events-none" />
        )} */}

        <div className="relative flex items-center justify-center">
          {isOpen ? (
            <X className="h-6 w-6 text-zinc-100 transition-transform duration-500" />
          ) : (
            <>
              <MessageSquareCode className="h-6 w-6 text-zinc-950" />
              {/* Small "Sparkle" to indicate AI */}
              {/* <Sparkles className="absolute -top-3 -right-3 h-4 w-4 text-white animate-pulse" /> */}
            </>
          )}
        </div>

        {/* Hover Label (Desktop Only) */}
        {!isOpen && (
          <span className="absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100 text-xs font-mono tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
            Ask AI Mehrab
          </span>
        )}
      </button>

      {/* The Heavy Widget - Logic remains exactly as you had it */}
      {isOpen && <LazyChatWidget onClose={() => setIsOpen(false)} />}
    </>
  );
}
