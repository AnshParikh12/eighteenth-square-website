// app/layout.tsx
import { ReactNode } from "react";

export const metadata = {
  title: "Eighteenth Square | Interior Design & Architecture Studio in Ahmedabad",
  description:
    "Eighteenth Square is an interior design and architecture studio in Ahmedabad, offering modern residential and commercial space design.",
  keywords:
    "interior design Ahmedabad, architecture studio Ahmedabad, modern interiors Ahmedabad, luxury interior design Ahmedabad, residential architecture Ahmedabad, commercial architecture Ahmedabad",
  openGraph: {
    title: "Eighteenth Square | Interior Design & Architecture in Ahmedabad",
    description:
      "A modern studio in Ahmedabad specializing in elegant interior design and architectural solutions for homes and commercial spaces.",
    url: "https://eighteenthsquare.vercel.app",
    siteName: "Eighteenth Square",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eighteenth Square | Interior Design & Architecture in Ahmedabad",
    description:
      "A modern studio in Ahmedabad specializing in elegant interior design and architectural solutions for homes and commercial spaces.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Eighteenth Square",
    url: "https://eighteenthsquare.vercel.app",
    description:
      "A creative interior design and architecture studio based in Ahmedabad, specializing in residential and commercial spaces.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "India",
    },
  };

  return (
    <html lang="en">
      <head>
        {/* Add your JSON-LD structured data here */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Your Header and Footer components */}
        {children}
      </body>
    </html>
  );
}
