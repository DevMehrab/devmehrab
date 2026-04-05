import type { Metadata } from "next";
import { Outfit, Fira_Code } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Outfit({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

// IMPORTANT: Replace with your actual deployed domain
const siteUrl = "https://devmehrab.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mehrab Hossain | Full-Stack Developer",
    template: "%s | Mehrab Hossain", // Useful if you add separate pages later (e.g., "Blog | Mehrab Hossain")
  },
  description:
    "Portfolio of Mehrab Hossain, a Junior Full-Stack Developer specializing in the MERN stack and Next.js. Currently building at iMS Technologies.",
  keywords: [
    "Mehrab Hossain",
    "Full-Stack Developer",
    "MERN Stack",
    "Next.js",
    "React",
    "TypeScript",
    "Bangladesh",
    "Web Developer",
  ],
  authors: [{ name: "Mehrab Hossain", url: siteUrl }],
  creator: "Mehrab Hossain",

  // Open Graph (LinkedIn, Facebook, Discord, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Mehrab Hossain | Full-Stack Developer",
    description:
      "Junior Full-Stack Developer specializing in the MERN stack and Next.js.",
    siteName: "Mehrab Hossain Portfolio",
    images: [
      {
        url: "/og-image.png", // Points to public/og-image.png
        width: 1200,
        height: 630,
        alt: "Mehrab Hossain - Full-Stack Developer Portfolio",
      },
    ],
  },

  // Twitter/X specific cards
  twitter: {
    card: "summary_large_image",
    title: "Mehrab Hossain | Full-Stack Developer",
    description:
      "Junior Full-Stack Developer specializing in the MERN stack and Next.js.",
    images: ["/og-image.png"], // Points to public/og-image.png
    creator: "@yourtwitterhandle", // Update or remove this
  },

  // Tells search engines to crawl and index your site
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${firaCode.variable} font-sans bg-[#0a0a0a] text-zinc-400 antialiased`}
      >
        <CustomCursor />
        <SmoothScroll />
        <Navbar />

        <main className="relative flex flex-col min-h-screen selection:bg-cyan-500/30 selection:text-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
