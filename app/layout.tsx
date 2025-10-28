import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MEFRUP | Automotive Gaskets & Rubber Components Manufacturer Mexico",
  description: "IATF 16949:2016 certified manufacturer of automotive gaskets, seals, and precision rubber components. OEM/ORM supplier with 22+ years experience. Fast delivery to USA & Mexico.",
  keywords: "automotive gaskets, tri-clamp gaskets, rubber seals, automotive components, IATF 16949, OEM supplier, ORM parts, vulcanized rubber, injection molding, Mexico manufacturer, NBR gaskets, EPDM seals, Viton gaskets, silicone seals, industrial gaskets",
  authors: [{ name: "MEFRUP Group LLC" }],
  creator: "MEFRUP Group LLC",
  publisher: "MEFRUP Group LLC",
  metadataBase: new URL('https://www.mefrup.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "MEFRUP | Automotive Gaskets & Seals Manufacturer",
    description: "IATF 16949:2016 certified manufacturer of automotive gaskets and rubber components. OEM/ORM supplier serving Mexico & USA.",
    url: 'https://www.mefrup.com',
    siteName: 'MEFRUP',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logomefrup.png',
        width: 1200,
        height: 630,
        alt: 'MEFRUP - Automotive Components Manufacturer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "MEFRUP | Automotive Gaskets Manufacturer",
    description: "IATF 16949 certified manufacturer of automotive gaskets, seals, and rubber components.",
    images: ['/logomefrup.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Replace with actual code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
