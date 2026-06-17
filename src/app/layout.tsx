import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aarotech | Digital Marketing Agency in Tamil Nadu",
  description: "We help businesses generate more leads, improve online visibility, and grow revenue through websites, SEO, advertising, and social media.",
  openGraph: {
    title: "Aarotech | Digital Marketing Agency in Tamil Nadu",
    description: "We help businesses generate more leads, improve online visibility, and grow revenue through websites, SEO, advertising, and social media.",
    url: "https://aarotech.example.com",
    siteName: "Aarotech",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
