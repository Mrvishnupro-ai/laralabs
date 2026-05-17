import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Start Your AI Journey",
  description: "Get in touch with Lara Labs AI for a free consultation on how AI automation can transform your business workflows.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
