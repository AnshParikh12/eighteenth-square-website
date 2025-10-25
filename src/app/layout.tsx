import Header from "@/app/Components/Layout/Header";
import Footer from "@/app/Components/Layout/Footer";
import "./globals.css";

export const metadata = {
  title: "Eighteenth Square",
  description: "Interior Design and Architecture",
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
