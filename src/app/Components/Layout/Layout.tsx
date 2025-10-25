"use client";

import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";
import Head from "next/head";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Eighteenth Square</title>
        <meta name="description" content="Eighteenth Square Website" />

        {/* Favicon / browser tab icon */}
        <link rel="icon" href="/logo.ico" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
