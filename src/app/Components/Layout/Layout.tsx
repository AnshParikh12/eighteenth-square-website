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
        <title>Eighteenth Square | Interior Design & Architecture Studio</title>
        <meta
          name="description"
          content="Eighteenth Square is a creative studio specializing in modern interior design and architectural solutions for residential and commercial spaces."
        />
        <meta
          name="keywords"
          content="interior design, architecture studio, modern interiors, residential architecture, commercial architecture, luxury interior design, contemporary spaces"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://eighteenthsquare.vercel.app" />

        {/* Favicon */}
        <link rel="icon" href="/logo.ico" />

        {/* Open Graph (for social sharing) */}
        <meta property="og:title" content="Eighteenth Square | Interior Design & Architecture Studio" />
        <meta
          property="og:description"
          content="Modern interior and architectural experiences crafted with detail and precision."
        />
        <meta property="og:url" content="https://eighteenthsquare.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Eighteenth Square" />

        {/* Schema Markup (Basic, expandable later when we have more data) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Eighteenth Square",
              url: "https://eighteenthsquare.vercel.app",
              description:
                "A creative architecture and interior design studio delivering modern and functional spaces."
            }),
          }}
        />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
