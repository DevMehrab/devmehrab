"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { ChevronDown } from "lucide-react";

// Accept the FAQ data as props from the Server Component
type FaqItem = { question: string; answer: string };

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <Reveal key={index} delay={0.2 + index * 0.1}>
            <div
              className={`group rounded-xl border transition-all duration-300 ${
                isOpen
                  ? "bg-zinc-900/50 border-cyan-500/30"
                  : "bg-zinc-950/50 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/30"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-xl"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <h3
                  className={`text-lg font-medium transition-colors ${
                    isOpen
                      ? "text-cyan-400"
                      : "text-zinc-200 group-hover:text-cyan-100"
                  }`}
                >
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 text-zinc-500 ${
                    isOpen ? "rotate-180 text-cyan-400" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-zinc-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
