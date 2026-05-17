import React from 'react';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lara Labs AI",
    "url": "https://www.laralabs.in",
    "logo": "https://www.laralabs.in/ultimate.jpg", // Replace with actual logo URL when available
    "description": "Success as a Service. We build intelligent digital workers that automate complex workflows.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "sameAs": [
      // Add social links here if provided later
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
