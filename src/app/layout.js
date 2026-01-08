// app/layout.js - Enhanced with comprehensive metadata
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap", // Better performance
});

// Base metadata that applies to all pages
export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://altrabyte.com'),
  alternates: {
    canonical: './',
  },
  // Basic Info
  title: {
    default: "AltraByte - Data Analytics, AI Automation & Digital Solutions",
    template: "%s | AltraByte",
  },
  description:
    "Transform your business with data analytics, AI automation, and process optimization. We deliver results in weeks, not months. Trusted by e-commerce, retail, logistics, and FMCG companies across Southeast Asia.",

  // Keywords for SEO
  keywords: [
    "data analytics",
    "AI automation",
    "business intelligence",
    "process optimization",
    "digital transformation",
    "Southeast Asia",
    "Indonesia",
    "e-commerce analytics",
    "retail analytics",
    "logistics optimization",
    "FMCG analytics",
    "dashboard development",
    "RPA automation",
    "GenAI solutions",
  ],

  // Author and Company Info
  authors: [{ name: "AltraByte Team" }],
  creator: "AltraByte",
  publisher: "AltraByte",

  // Favicon and Icons (using your existing files)
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },

  // Web App Manifest (using your existing file)
  manifest: "/site.webmanifest",

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://altrabyte.com",
    siteName: "AltraByte",
    title: "AltraByte - Data Analytics, AI Automation & Digital Solutions",
    description:
      "Transform your business with data analytics, AI automation, and process optimization. We deliver results in weeks, not months.",
    images: [
      {
        url: "/images/og-image.png", // Create this 1200x630 image
        width: 1200,
        height: 630,
        alt: "AltraByte - Data Analytics and AI Automation Solutions",
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "AltraByte - Data Analytics, AI Automation & Digital Solutions",
    description:
      "Transform your business with data analytics, AI automation, and process optimization. We deliver results in weeks, not months.",
    images: ["/images/twitter-image.png"], // You can use same as OG or create 1200x600
  },

  // Robots and Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Geographic and Business Info
  other: {
    "geo.region": "ID-JK", // Jakarta, Indonesia
    "geo.placename": "Jakarta",
    "geo.position": "-6.2088;106.8456", // Jakarta coordinates
    ICBM: "-6.2088, 106.8456",
  },

  // Verification (add when you have them)
  verification: {
    // google: "your-google-verification-code",
    // bing: "your-bing-verification-code"
  },
};

// Viewport configuration
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Allow zoom for accessibility
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#6366f1" },
    { media: "(prefers-color-scheme: dark)", color: "#6366f1" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags that can't be set via metadata API */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AltraByte" />

        {/* Structured Data - Business Info */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AltraByte",
              description:
                "Data analytics, AI automation, and digital transformation solutions for businesses in Southeast Asia",
              url: "https://altrabyte.com",
              logo: "https://altrabyte.com/images/logo.png",
              sameAs: ["https://www.linkedin.com/company/altrabyte/"],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "", // Add if you have a phone number
                contactType: "customer service",
                email: "hello@altrabyte.com",
                availableLanguage: ["English", "Indonesian"],
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jakarta",
                addressRegion: "Jakarta",
                addressCountry: "Indonesia",
              },
              founder: {
                "@type": "Person",
                name: "AltraByte Team",
              },
              foundingDate: "2023", // Update with actual founding date
              industry: "Technology Consulting",
              services: [
                "Data Analytics",
                "AI Automation",
                "Business Intelligence",
                "Process Optimization",
                "Digital Transformation",
              ],
            }),
          }}
        />
      </head>
      <body className={`${plusJakarta.className} antialiased`}>


        {/* Header with fixed positioning */}
        <Header />

        {/* Main content with top padding for fixed header */}
        <main className="min-h-screen pt-16">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
