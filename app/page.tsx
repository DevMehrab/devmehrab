import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Mehrab Hossain | Full-Stack Developer & Next.js Specialist",
  description:
    "Portfolio of Mehrab Hossain, a Junior Full-Stack Developer at iMS Technologies. Specialist in high-performance Next.js apps, MERN stack, and UI/UX design based in Dhaka.",
  keywords: [
    "Mehrab Hossain",
    "devmehrab",
    "Next.js Developer",
    "Full-Stack Developer Dhaka",
    "React Developer",
    "iMS Technologies",
    "BUP CSE",
  ],
  authors: [{ name: "Mehrab Hossain" }],
  creator: "Mehrab Hossain",
  metadataBase: new URL("https://devmehrab.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mehrab Hossain | Full-Stack Developer",
    description:
      "Building high-performance web applications with Next.js and MERN stack.",
    url: "https://devmehrab.com",
    siteName: "Mehrab Hossain Portfolio",
    images: [
      {
        url: "/my-profile-photo.png",
        width: 1200,
        height: 1200,
        alt: "Mehrab Hossain Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehrab Hossain | Next.js Developer",
    description:
      "Junior Full-Stack Developer specializing in high-performance web apps.",
    images: ["/og-image.png"],
    creator: "@devmehrab",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <main className="flex bg-[#0a0a0a] flex-col">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Faq />
    </main>
  );
}
