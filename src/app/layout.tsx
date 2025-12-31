import type { Metadata } from "next";
import { Inter, Playfair_Display, Tinos } from "next/font/google";
import "./globals.css";
import FooterWrapper from "@/components/FooterWrapper";

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
  title: "New Genre | AI Automation",
  description: "Success as a Service. We build digital workers that work for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${tinos.variable} antialiased bg-[#0a0a16] text-white`}
      >
        {children}
        <FooterWrapper />
      </body>
    </html>
  );
}
