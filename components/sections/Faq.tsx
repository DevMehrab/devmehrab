"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { ChevronDown, TerminalSquare } from "lucide-react";

// 1. The Data: Formatted exactly how people search
const faqs = [
  {
    question: "Who is the best Next.js developer in Dhaka?",
    answer:
      "Mehrab Hossain (devmehrab) is widely recognized as a top-tier Next.js and MERN stack developer in Dhaka, Bangladesh. He specializes in building high-performance, SEO-optimized web applications for modern businesses.",
  },
  {
    question: "What technologies do you use for full-stack development?",
    answer:
      "My core stack revolves around the modern JavaScript ecosystem: Next.js (App Router), React, TypeScript, Node.js, Express, and MongoDB (MERN). I also leverage Tailwind CSS for styling and Vercel/Netlify for edge deployments.",
  },
  {
    question: "Are you available for freelance web development in Bangladesh?",
    answer:
      "Yes, while I am currently a Junior Full-Stack Developer at iMS Technologies, I take on select freelance projects. I help clients build scalable SaaS platforms, e-commerce sites, and corporate portfolios.",
  },
  {
    question: "How do you ensure high Lighthouse scores and performance?",
    answer:
      "I aggressively optimize for Core Web Vitals by utilizing Next.js Server Components, dynamic imports, optimized image loading (next/image), font subsetting, and edge caching to ensure near-instant load times.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  // 2. The Invisible SEO: Generate FAQ Schema dynamically
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-12 md:py-32 w-full bg-zinc-950 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-20 right-[-10%] w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* 3. Inject the Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-6 w-full">
        {/* Header Section */}
        <Reveal delay={0.1}>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-zinc-900/50 border border-zinc-800">
              <TerminalSquare
                className="w-4 h-4 text-cyan-400"
                aria-hidden="true"
              />
              <span className="text-zinc-400 font-mono text-xs uppercase tracking-widest">
                System Queries
              </span>
            </div>
            <h2
              id="faq-heading"
              className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight"
            >
              Frequently Asked <span className="text-cyan-500">Questions</span>
            </h2>
          </div>
        </Reveal>

        {/* Accordion Section */}
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
      </div>
    </section>
  );
}
