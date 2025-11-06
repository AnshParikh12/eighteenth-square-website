import Header from "@/app/Components/Layout/Header";
import Footer from "@/app/Components/Layout/Footer";
import "./globals.css";

export const metadata = {
  title: "Eighteenth Square | Interior Design & Architecture Studio in Ahmedabad",
  description:
    "Eighteenth Square is an interior design and architecture studio in Ahmedabad, offering modern residential and commercial space design.",
  keywords:
    "interior design Ahmedabad, architecture Ahmedabad, modern interiors Ahmedabad, luxury interior design Ahmedabad, residential architecture Ahmedabad, commercial architecture Ahmedabad",
  robots: "index, follow",
  canonical: "https://eighteenthsquare.vercel.app",
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
