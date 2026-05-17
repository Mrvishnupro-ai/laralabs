import type { Metadata } from "next";
import { Inter, Playfair_Display, Tinos } from "next/font/google";
import "./globals.css";
import FooterWrapper from "@/components/FooterWrapper";
import ChatWidgetWrapper from "@/components/ChatWidgetWrapper";
import ExportedImage from "next-image-export-optimizer";
import StructuredData from "@/components/StructuredData";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const tinos = Tinos({
  variable: "--font-tinos",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.laralabs.in"),
  title: {
    default: "Lara Labs AI | Transform your Business with AI",
    template: "%s | Lara Labs AI"
  },
  description: "Success as a Service. We build intelligent digital workers that automate complex workflows, reducing costs and increasing efficiency.",
  keywords: ["AI Automation", "Digital Workers", "Business Process Automation", "Custom AI Development", "Lara Labs", "AI Agents"],
  authors: [{ name: "Lara Labs AI" }],
  creator: "Lara Labs AI",
  publisher: "Lara Labs AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.laralabs.in",
    siteName: "Lara Labs AI",
    title: "Lara Labs AI | Workforce of the Future",
    description: "Intelligent digital workers that automate complex workflows, so you can focus on what matters.",
    images: [
      {
        url: "/ultimate.jpg", // Using the existing ultimate background as a placeholder OG image
        width: 1200,
        height: 630,
        alt: "Lara Labs AI - Digital Workforce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lara Labs AI | Workforce of the Future",
    description: "We build digital workers that work for you. Automate your complex business logic today.",
    images: ["/ultimate.jpg"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${tinos.variable} antialiased bg-[#0a0a16] text-white`}
      >

        {/* Base Gradient Background */}
        <div className="fixed inset-0 z-[-2] animate-gradient-bg" />

        {/* Static Image Overlay */}
        <div className="fixed inset-0 z-[-1] opacity-15">
          <ExportedImage
            src="/ultimate.jpg"
            alt="Background Overlay"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {children}
        <FooterWrapper />
        <ChatWidgetWrapper />
      </body>
    </html>
  );
}
