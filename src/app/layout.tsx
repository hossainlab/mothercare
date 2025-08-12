import type { Metadata } from "next";
import { Inter, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  variable: "--font-noto-sans-bengali",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Matriseba - Ultrasound at Home | Safer Pregnancy Begins Here",
  description: "Get AI-powered ultrasound scans from the comfort of your home in Bangladesh. Book professional maternal care with BabyChecker technology. 24/7 support available.",
  keywords: "ultrasound, home service, Bangladesh, pregnancy, maternal care, AI technology, BabyChecker, healthcare",
  authors: [{ name: "Matriseba" }],
  creator: "Matriseba",
  publisher: "Matriseba",
  robots: "index, follow",
  openGraph: {
    title: "Matriseba - Ultrasound at Home",
    description: "Professional AI-powered ultrasound services at your doorstep",
    type: "website",
    locale: "en_US",
    siteName: "Matriseba",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matriseba - Ultrasound at Home",
    description: "Professional AI-powered ultrasound services at your doorstep",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`${inter.variable} ${notoSansBengali.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
