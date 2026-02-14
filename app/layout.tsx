import "./globals.css";
import type { Metadata } from "next";
import { Source_Code_Pro, Bebas_Neue, Montserrat } from "next/font/google";
import LayoutScrollArea from "../components/LayoutScrollArea";
import { ThemeProvider } from "./theme/ThemeProvider";
import { ThemeScript } from "./theme/theme-script";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-code-pro",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-bebasNeue",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Meet Panchal",
  url: "https://meetpanchal.com",
  telephone: "+91 9191919191",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ahmedabad",
    addressLocality: "Ahmedabad",
    postalCode: "380001",
    addressCountry: "IN",
  },
  image: "https://meetpanchal.com/logo.png",
  sameAs: ["https://www.linkedin.com/company/meetpanchal/"],
};

export const metadata: Metadata = {
  title: {
    default: "Meet Panchal | Portfolio",
    template: "Meet Panchal | %s",
  },
  description: "Business + design + Technology.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sourceCodePro.variable} ${montserrat.variable} ${bebasNeue.variable}`}
    >
      <head>
        <ThemeScript />
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="h-screen bg-theme-page overflow-hidden">
        <div className="fixed border border-theme-page rounded-xl pointer-events-none z-50" />
        <ThemeProvider>
          <LayoutScrollArea>{children}</LayoutScrollArea>
        </ThemeProvider>
      </body>
    </html>
  );
}
