import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieBar from "@/components/CookieBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1e293b",
};

export const metadata: Metadata = {
  title: "La Marshalada - Apuestas Deportivas, Análisis y Entretenimiento",
  description:
    "Plataforma de apuestas deportivas con análisis de partidos, directos en Twitch y comunidad de jugadores. Deportes, apuestas y humor.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "La Marshalada",
  },
  keywords: [
    "apuestas deportivas",
    "análisis deportivos",
    "Twitch",
    "Marshall",
    "apuestas en vivo",
    "picks deportivos",
  ],
  authors: [{ name: "La Marshalada", url: "https://lamarshalada.com" }],
  creator: "La Marshalada",
  publisher: "La Marshalada",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://lamarshalada.com",
    title: "La Marshalada",
    description:
      "Plataforma de apuestas deportivas, análisis de partidos y entretenimiento en vivo.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "La Marshalada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Marshalada",
    description:
      "Apuestas deportivas, análisis y entretenimiento en vivo con Marshall",
    creator: "@LaMarshalada",
    images: ["/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#1e293b" />
        <meta name="apple-mobile-web-app-capable" content="true" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="La Marshalada" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased m-0 p-0`}
      >
        {children}
        {/* <CookieBar /> */}
        <script>
          {`
            if ('serviceWorker' in navigator && typeof window !== 'undefined') {
              window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js').catch(err => 
                  console.log('Service Worker registration failed: ', err)
                );
              });
            }
          `}
        </script>
      </body>
    </html>
  );
}
