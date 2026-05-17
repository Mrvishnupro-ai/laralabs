import React from 'react';

export default function StructuredData() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Lara Labs AI",
      "url": "https://www.laralabs.in",
      "logo": "https://www.laralabs.in/ultimate.jpg",
      "description": "An AI Automation Agency specializing in custom AI agents, RAG systems, and workflow automation for businesses.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "hello@laralabs.in"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://www.laralabs.in",
      "name": "Lara Labs AI",
      "description": "Transform your Business with AI | AI Automation Agency"
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
