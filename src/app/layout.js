// app/layout.js
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "AltraByte - Digital Solutions",
  description: "Digital Solutions & Consulting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.className} antialiased`}>
        {/* Header is now self-contained with fixed positioning */}
        <Header />

        {/* Main content with top padding to account for fixed header */}
        <main className="min-h-screen pt-16">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
