"use client";

import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";
import Head from "next/head";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        {/* Primary Meta */}
        <title>
          Eighteenth Square | Interior Design & Architecture Studio in Ahmedabad
        </title>
        <meta
          name="description"
          content="Eighteenth Square is an interior design and architecture studio in Ahmedabad, offering modern residential and commercial space design."
        />
        <meta
          name="keywords"
          content="interior design Ahmedabad, architecture studio Ahmedabad, modern interiors Ahmedabad, luxury interior design Ahmedabad, residential architecture Ahmedabad, commercial architecture Ahmedabad"
        />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://eighteenthsquare.in" />

        {/* Favicon */}
        <link rel="icon" href="/logo.ico" />

        {/* Open Graph (Social Sharing) */}
        <meta
          property="og:title"
          content="Eighteenth Square | Interior Design & Architecture in Ahmedabad"
        />
        <meta
          property="og:description"
          content="A modern studio in Ahmedabad specializing in elegant interior design and architectural solutions for homes and commercial spaces."
        />
        <meta property="og:url" content="https://eighteenthsquare.in" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Eighteenth Square" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eighteenth Square | Interior Design & Architecture in Ahmedabad" />
        <meta
          name="twitter:description"
          content="A modern studio in Ahmedabad specializing in elegant interior design and architectural solutions for homes and commercial spaces."
        />

        {/* Basic Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Eighteenth Square",
              url: "https://eighteenthsquare.in",
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
      </Head>

      <div className="flex flex-col min-h-screen">
        <Header />
        {/* Responsive top padding to match fixed header height */}
        <main className="flex-1 pt-[80px] md:pt-[124px]">{children}</main>
        <Footer />
      </div>
    </>
  );
}