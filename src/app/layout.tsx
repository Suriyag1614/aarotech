import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MobileCTA } from "@/components/layout/MobileCTA";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://aarotech.in"),
  alternates: {
    canonical: "/",
  },
  title: "Aarotech | Digital Marketing Agency in Tamil Nadu",
  description: "We help businesses generate more leads, improve online visibility, and grow revenue through websites, SEO, advertising, and social media.",
  openGraph: {
    title: "Aarotech | Digital Marketing Agency in Tamil Nadu",
    description: "We help businesses generate more leads, improve online visibility, and grow revenue through websites, SEO, advertising, and social media.",
    siteName: "Aarotech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aarotech | Digital Marketing Agency in Tamil Nadu",
    description: "We help businesses generate more leads, improve online visibility, and grow revenue through websites, SEO, advertising, and social media.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col pb-20 sm:pb-0">
        {children}
        <MobileCTA />
      </body>
    </html>
  );
}
