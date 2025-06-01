import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "D&S Property Management | Great Falls MT Property Managers | Residential Rental Management",
  description: "Professional property management services in Great Falls, Montana. 20+ years experience managing residential rentals, tenant screening, maintenance, and rent collection. Trusted Great Falls property managers serving landlords throughout Montana.",
  keywords: "property management Great Falls MT, Great Falls property managers, rental management Montana, property management services, Great Falls landlord services, tenant screening Great Falls",
  authors: [{ name: "D&S Property Management" }],
  creator: "D&S Property Management",
  publisher: "D&S Property Management",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.dandspropertymanagement.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "D&S Property Management | Great Falls MT Property Managers",
    description: "Professional residential property management in Great Falls, Montana. Expert tenant screening, maintenance, and rent collection services.",
    url: 'https://www.dandspropertymanagement.com',
    siteName: 'D&S Property Management',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/hero.jpg', // Your main hero image
        width: 1200,
        height: 630,
        alt: 'D&S Property Management - Great Falls Montana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "D&S Property Management | Great Falls MT",
    description: "Professional property management services in Great Falls, Montana.",
    images: ['/images/hero.jpg'],
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
    google: 'YOUR_GOOGLE_VERIFICATION_CODE', // Add when you get it
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
