import Header from "@/app/Components/Layout/Header";
import Footer from "@/app/Components/Layout/Footer";
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Eighteenth Square | Interior Design & Architecture Studio in Ahmedabad",
  description:
    "Eighteenth Square is an interior design and architecture studio in Ahmedabad, offering modern residential and commercial space design.",
  keywords:
    "interior design Ahmedabad, architecture Ahmedabad, modern interiors Ahmedabad, luxury interior design Ahmedabad, residential architecture Ahmedabad, commercial architecture Ahmedabad",
  openGraph: {
    title: "Eighteenth Square | Interior Design & Architecture in Ahmedabad",
    description:
      "A modern studio in Ahmedabad specializing in elegant interior design and architectural solutions for homes and commercial spaces.",
    url: "https://www.eighteenthsquare.in",
    siteName: "Eighteenth Square",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eighteenth Square | Interior Design & Architecture in Ahmedabad",
    description:
      "A modern studio in Ahmedabad specializing in elegant interior design and architectural solutions for homes and commercial spaces.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.eighteenthsquare.in" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:type" content={metadata.openGraph.type} />

        {/* Twitter Card */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Eighteenth Square",
              url: "https://www.eighteenthsquare.in",
              description:
                "A creative interior design and architecture studio based in Ahmedabad, specializing in residential and commercial spaces.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                addressCountry: "India",
              },
              sameAs: [
                "https://www.instagram.com/eighteenthsquare/",
              ]
            }),
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
