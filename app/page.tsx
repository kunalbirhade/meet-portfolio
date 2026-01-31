import type { Metadata } from "next";
import HeroSection from "../components/HeroSection";
import Highlights from "../components/Highlights";
import Work from "../components/Work";
import Playground from "../components/Playground";
import About from "../components/About";
import ContactUs from "../components/ContactUs";
import playgroundProjects from "./playground/playgroundProjects";

export const metadata: Metadata = {
  title: {
    default: "Meet Panchal | Portfolio",
    template: "%s - Meet Panchal",
  },
  description: "Meet Panchal is expert in Business + design + Technology.",
  keywords: [
    "Creative strategist",
    "Digital Transformation Enthusiast",
    "Project Management Expert",
    "Business Analyst",
    "UX Designer",
    "Architect",
  ],
  authors: [{ name: "Meet Panchal", url: "https://meetpanchal.com" }],
  creator: "Meet Panchal",
  publisher: "Meet Panchal",
  metadataBase: new URL("https://meetpanchal.com"),

  openGraph: {
    title: "Meet Panchal | Portfolio",
    description: "Meet Panchal is expert in Business + design + Technology.",
    url: "https://meetpanchal.com",
    siteName: "Meet Panchal",
    images: [
      {
        url: "/og-image.png", // store this in /public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "Meet Panchal | Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Meet Panchal | Portfolio",
    description: "Meet Panchal is expert in Business + design + Technology.",
    images: ["/og-image.png"],
    creator: "@meetpanchal", // optional, if you have a Twitter handle
  },

  alternates: {
    canonical: "https://meetpanchal.com",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <Highlights />
      <Work />
      <Playground projects={playgroundProjects.slice(0, 6)} />
      <About />
      <ContactUs />
    </>
  );
}
