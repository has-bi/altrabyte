// app/layout.js
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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
      <body className={plusJakarta.className}>{children}</body>
    </html>
  );
}
