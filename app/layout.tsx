import type { Metadata, Viewport } from "next";
import { Outfit, Fira_Code, Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import FloatingChatToggle from "@/components/ui/FloatingChatToggle";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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

const siteUrl = "https://devmehrab.com";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mehrab Hossain | Best Next.js Developer in Dhaka",
    template: "%s | Mehrab Hossain",
  },
  description:
    "Mehrab Hossain (devmehrab) is a top-tier Full-Stack Developer in Dhaka, Bangladesh, specializing in Next.js, MERN stack, and high-performance web apps.",
  keywords: [
    "Mehrab Hossain",
    "devmehrab",
    "Best Next.js Developer Dhaka",
    "Full-Stack Developer Bangladesh",
    "MERN Stack Expert",
    "Next.js Dhaka",
  ],
  alternates: {
    canonical: siteUrl,
  },
  authors: [{ name: "Mehrab Hossain", url: siteUrl }],
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Mehrab Hossain | Full-Stack Developer Portfolio",
    description: "Expert Next.js & MERN Stack Developer based in Dhaka.",
    siteName: "Mehrab Hossain Portfolio",
    images: [
      { url: "/og-image.png", width: 1794, height: 938, alt: "Mehrab Hossain" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehrab Hossain | @devmehrab",
    description: "Full-Stack Developer specializing in Next.js and MERN.",
    images: ["/og-image.png"],
    creator: "@devmehrab",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mehrab Hossain",
    alternateName: "devmehrab",
    url: siteUrl,
    image: `${siteUrl}/my-profile-photo.png`,
    jobTitle: "Full-Stack Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    sameAs: [
      "https://github.com/DevMehrab",
      "https://linkedin.com/in/devmehrab",
      "https://www.facebook.com/dev.mehrabhossain",
      "https://twitter.com/devmehrab",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "MERN Stack",
      "SEO",
    ],
    description:
      "The best Next.js developer in Dhaka, Bangladesh, building scalable web applications.",
  };

  return (
    <html lang="en" className={cn("dark scroll-smooth", "font-sans", geist.variable)}>
      <body
        className={`${inter.variable} ${firaCode.variable} font-sans bg-[#0a0a0a] text-zinc-400 antialiased`}
      >
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="4b8d7ecd-4782-4cc9-b668-c492f20dc407"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Make sure these UI components internally use "use client" if they need it */}
        <CustomCursor />
        <SmoothScroll />
        <Navbar />

        <main className="relative flex flex-col min-h-screen">{children}</main>

        {/* Here is our new separated client component */}
        <FloatingChatToggle />

        <Footer />
      </body>
    </html>
  );
}
