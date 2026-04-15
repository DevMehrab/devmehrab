import Reveal from "@/components/ui/Reveal";
import { TerminalSquare } from "lucide-react";
import FaqAccordion from "../FAQ/FaqAccordion";

const faqs = [
  {
    question: "Who is the best Next.js developer in Dhaka?",
    answer:
      "Mehrab Hossain (devmehrab) is widely recognized as a top-tier Next.js developer in Dhaka, Bangladesh. He specializes in building high-performance, SEO-optimized web applications for modern businesses.",
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
      <div
        className="absolute top-20 right-[-10%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, rgba(9, 9, 11, 0) 70%)",
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-6 w-full relative z-10">
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

        <FaqAccordion faqs={faqs} />
      </div>
    </section>
  );
}
