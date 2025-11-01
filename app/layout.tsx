import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | 432-hz.org`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "432 Hz",
    "432Hz generator",
    "432 Hz audio",
    "432Hz frequency",
    "432Hz download",
    "healing frequency",
    "meditation audio",
    "sound healing",
    "binaural beats",
    "natural frequency",
    "432Hz sound",
    "relaxation music",
    "432Hz meditation",
  ],
  authors: [{ name: "432-hz.org" }],
  creator: "432-hz.org",
  publisher: "432-hz.org",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "432-hz.org",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
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
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={SITE_URL} />
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
