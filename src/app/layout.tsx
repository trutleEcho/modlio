import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import SwRegister from "@/components/sw-register";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MODLIO | Think Innovation",
  description: "We craft exceptional digital experiences that drive innovation, enhance performance, and deliver measurable results for forward-thinking businesses.",
  keywords: ["web development", "UI/UX design", "digital strategy", "performance optimization", "MODLIO"],
  authors: [{ name: "MODLIO Team" }],
  creator: "MODLIO",
  publisher: "MODLIO",
  applicationName: "MODLIO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://modlio.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-icon.png" }],
    shortcut: [
      { url: "/apple-icon.png" },
    ],
  },
  openGraph: {
    title: "MODLIO - Transform Your Digital Vision",
    description: "We craft exceptional digital experiences that drive innovation, enhance performance, and deliver measurable results for forward-thinking businesses.",
    url: "https://modlio.com",
    siteName: "MODLIO",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/globe.png",
        width: 1200,
        height: 630,
        alt: "MODLIO - Transform Your Digital Vision",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MODLIO - Transform Your Digital Vision",
    description: "We craft exceptional digital experiences that drive innovation, enhance performance, and deliver measurable results for forward-thinking businesses.",
    creator: "@modlio",
    images: ["/globe.png"],
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
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&family=Jura:wght@300..700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"/>
      <link rel="manifest" href="/manifest.webmanifest" />
    </head>
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
    >
      {/* Service worker registration for PWA */}
      <SwRegister />
      {children}
    </ThemeProvider>
    </body>
    </html>
  );
}

