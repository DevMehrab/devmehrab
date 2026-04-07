"use client";
import { useState, useEffect, useRef } from "react";
import { Send, X, Bot, User, Sparkles } from "lucide-react"; // Install lucide-react if not already

export default function ChatWidget({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [],
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = { role: "user", content: input };

    // Save current messages to history BEFORE adding the new one
    const historyToSend = [...messages];

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          history: historyToSend,
        }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "model", content: data.text }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "model", content: "I hit a snag. Try again?" },
      ]);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-[calc(100vw-32px)] sm:w-[400px] h-[550px] max-h-[80vh] flex flex-col z-[100] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl shadow-[0_0_50px_-12px_rgba(6,182,212,0.2)] animate-in fade-in zoom-in duration-300">
      {/* Header: Dark Glassmorphism */}
      <div className="p-4 border-b border-zinc-800 bg-zinc-900/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
              <Bot className="w-5 h-5 text-cyan-400" />
            </div>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>
          <div>
            <h3 className="text-sm font-bold text-zinc-100 leading-none">
              AI Mehrab
            </h3>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
              Online
            </span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-zinc-800 rounded-full text-zinc-500 hover:text-zinc-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Chat Area: Custom Scrollbar & Animated Messages */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent"
      >
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
            <Sparkles className="w-8 h-8 text-zinc-700 animate-pulse" />
            <p className="text-sm text-zinc-500 font-mono">
              Ask me anything and have a conversation!
            </p>
          </div>
        )}

        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex items-start gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`p-1.5 rounded-md border ${m.role === "user" ? "bg-zinc-100 border-white" : "bg-zinc-900 border-zinc-800"}`}
            >
              {m.role === "user" ? (
                <User className="w-3 h-3 text-zinc-950" />
              ) : (
                <Bot className="w-3 h-3 text-cyan-400" />
              )}
            </div>
            <div
              className={`relative px-4 py-3 rounded-2xl text-sm max-w-[85%] leading-relaxed ${
                m.role === "user"
                  ? "bg-cyan-600 text-white rounded-tr-none shadow-[0_10px_20px_-10px_rgba(8,145,178,0.3)]"
                  : "bg-zinc-900/50 text-zinc-300 border border-zinc-800 rounded-tl-none"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-md bg-zinc-900 border border-zinc-800">
              <Bot className="w-3 h-3 text-cyan-400" />
            </div>
            <div className="flex gap-1.5 p-3 bg-zinc-900/50 border border-zinc-800 rounded-2xl rounded-tl-none">
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce"></span>
            </div>
          </div>
        )}
      </div>

      {/* Footer: Clean Input Area */}
      <form
        onSubmit={sendMessage}
        className="p-4 bg-zinc-950 border-t border-zinc-800"
      >
        <div className="relative flex items-center">
          <input
            className="w-full bg-zinc-900 border border-zinc-800 focus:border-cyan-500/50 text-zinc-200 text-sm rounded-xl py-3 pl-4 pr-12 outline-none transition-all placeholder:text-zinc-600"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="absolute right-2 p-2 bg-cyan-500 hover:bg-cyan-400 disabled:bg-zinc-800 disabled:text-zinc-600 text-zinc-950 rounded-lg transition-all active:scale-95"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="text-[9px] text-center text-zinc-600 mt-3 uppercase tracking-tight">
          AI can make mistakes. Verify important information.
        </p>
      </form>
    </div>
  );
}
