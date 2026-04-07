"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import {
  Terminal,
  Send,
  Mail,
  CheckCircle2,
  Loader2,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Web3Forms seamless submission handler
  interface Web3FormsResponse {
    success?: boolean;
    [key: string]: any;
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    // Add your Web3Forms Access Key here!
    formData.append("access_key", "b771c5c6-4e79-4ef2-83b1-bb185290fcca");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = (await response.json()) as Web3FormsResponse;
      if (data.success) {
        setIsSubmitted(true);
        (e.target as HTMLFormElement).reset(); // Clear the form
        // Optional: Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-12 md:py-32 w-full bg-zinc-950 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/1 blur-[150px] rounded-t-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row gap-12 lg:gap-20 relative z-10">
        {/* ================= LEFT: VERTICAL HEADER ================= */}
        <div className="lg:w-24 flex-shrink-0">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-4 lg:flex-col lg:h-full lg:justify-start">
              <span className="text-cyan-500 font-mono text-sm">03.</span>
              <div className="h-[1px] hidden md:block w-12 lg:w-[1px] lg:h-24 bg-zinc-800" />
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-100 tracking-widest uppercase lg:-rotate-180 lg:[writing-mode:vertical-rl] whitespace-nowrap">
                Network
              </h2>
            </div>
          </Reveal>
        </div>

        {/* ================= RIGHT: SPLIT CONTENT ================= */}
        <div className="flex-1 w-full">
          <Reveal delay={0.2}>
            <div className="max-w-2xl mb-12">
              <h3 className="text-5xl lg:text-6xl font-bold text-zinc-100 mb-6 tracking-tighter">
                Initiate{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-600">
                  Connection.
                </span>
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Have a complex project in mind? Need a full-stack developer to
                join your team? Send a message directly through the terminal
                below, or use the direct email route.
              </p>
            </div>
          </Reveal>

          {/* DUAL CHANNEL GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* --- CHANNEL A: WEB3FORMS (Spans 3 Columns) --- */}
            <div className="lg:col-span-3">
              <Reveal delay={0.3}>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 shadow-xl backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2 mb-6 border-b border-zinc-800/50 pb-4">
                    <Terminal className="w-4 h-4 text-zinc-500" />
                    <span className="font-mono text-xs text-zinc-500 tracking-widest uppercase">
                      New_Message_Thread
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="font-mono text-xs text-zinc-400 pl-1"
                      >
                        Name_
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all font-sans"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="font-mono text-xs text-zinc-400 pl-1"
                      >
                        Email_
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all font-sans"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="font-mono text-xs text-zinc-400 pl-1"
                    >
                      Payload_
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={5}
                      className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all font-sans resize-none"
                      placeholder="Discussing architecture, opportunities, or just saying hi..."
                    />
                  </div>

                  {/* Submit Button & Status */}
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="submit"
                      disabled={isSubmitting || isSubmitted}
                      className="group/btn relative flex items-center gap-3 px-8 py-3.5 bg-zinc-100 text-zinc-950 font-semibold rounded-lg overflow-hidden transition-all hover:bg-white disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <div className="absolute inset-0 bg-cyan-400 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out" />
                      <span className="relative z-10 group-hover/btn:text-zinc-950 transition-colors flex items-center gap-2">
                        {isSubmitting
                          ? "Transmitting..."
                          : isSubmitted
                            ? "Payload Sent"
                            : "Send"}
                        {isSubmitting ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : isSubmitted ? (
                          <CheckCircle2 className="w-4 h-4" />
                        ) : (
                          <Send className="w-4 h-4" />
                        )}
                      </span>
                    </button>

                    {isSubmitted && (
                      <span className="text-emerald-400 text-sm font-mono animate-pulse">
                        Transmission successful.
                      </span>
                    )}
                  </div>
                </form>
              </Reveal>
            </div>

            {/* --- CHANNEL B: DIRECT EMAIL (Spans 2 Columns) --- */}
            <div className="lg:col-span-2">
              <Reveal delay={0.4} className="">
                <div className="h-full flex flex-col justify-center p-8 rounded-2xl bg-zinc-900/10 border border-zinc-800/30">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                      <Mail className="w-5 h-5 text-zinc-400" />
                    </div>
                    <div>
                      <h4 className="text-zinc-100 font-semibold">
                        Direct Route
                      </h4>
                      <p className="font-mono text-xs text-zinc-500">
                        #*&$@^$+%
                      </p>
                    </div>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                    You can reach me directly at the address below. I monitor
                    this inbox regularly.
                  </p>

                  <a
                    href="mailto:dev.mehrabhossain@gmail.com"
                    className="group flex flex-col gap-2 p-4 rounded-xl bg-zinc-950/50 border border-zinc-800 hover:border-cyan-500/50 transition-colors"
                  >
                    <span className="font-mono text-xs text-zinc-500 group-hover:text-cyan-500 transition-colors flex justify-between items-center">
                      MAIL_TO
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </span>
                    <span className="text-zinc-200 text-sm sm:text-base font-medium break-all">
                      dev.mehrabhossain@gmail.com
                    </span>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
