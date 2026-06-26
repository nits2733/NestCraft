import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/analytics/google-analytics";
import WhatsAppFloat from "@/components/ui/whatsapp-float";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0D6B4E",
};

export const metadata: Metadata = {
  title: {
    default: "NestCraft — Trusted Home Interiors in Ranchi | ₹5L–₹20L",
    template: "%s | NestCraft Ranchi",
  },
  description:
    "End the chaos of home renovation in Ranchi. NestCraft delivers reliable, transparent, and beautifully crafted interior design solutions — on time and on budget. Modular kitchens, wardrobes, painting & more.",
  keywords: [
    "interior designer Ranchi",
    "home interior Ranchi",
    "modular kitchen Ranchi",
    "interior decoration Ranchi",
    "home renovation Ranchi",
    "interior design cost Ranchi",
    "wardrobe design Ranchi",
    "house interior Jharkhand",
    "NestCraft",
    "affordable interior design Ranchi",
  ],
  openGraph: {
    title: "NestCraft — Trusted Home Interiors in Ranchi",
    description:
      "End the chaos of home renovation in Ranchi. NestCraft delivers reliable, transparent, and beautifully crafted interior design solutions — on time and on budget.",
    url: "https://nest-craft-six.vercel.app",
    siteName: "NestCraft",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NestCraft — Trusted Home Interiors in Ranchi",
    description:
      "End the chaos of home renovation in Ranchi. NestCraft delivers reliable, transparent, and beautifully crafted interior design solutions — on time and on budget.",
  },
  alternates: {
    canonical: "https://nest-craft-six.vercel.app",
  },
  verification: {
    google: "_4kVQ0gy_ZcYvuh7wfL7wj5b20i3B-TOF0KAL3r08cE",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "NestCraft",
  description:
    "Trusted home interior design and renovation services in Ranchi, Jharkhand.",
  url: "https://nest-craft-six.vercel.app",
  telephone: "+916205121214",
  email: "singhviveksingh022030105@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Boreya",
    addressLocality: "Ranchi",
    addressRegion: "Jharkhand",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "23.3441",
    longitude: "85.3096",
  },
  areaServed: {
    "@type": "City",
    name: "Ranchi",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <GoogleAnalytics />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
