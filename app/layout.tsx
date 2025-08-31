import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Synko - Orquestamos IA y automatización para crecer sin fricción",
    template: "%s | Synko",
  },
  description:
    "Transformamos procesos complejos en soluciones elegantes. Especialistas en IA y automatización para empresas que buscan crecer sin fricción.",
  keywords: [
    "IA",
    "automatización",
    "inteligencia artificial",
    "procesos",
    "optimización",
    "tecnología",
    "consultoría",
    "transformación digital",
  ],
  authors: [{ name: "Synko" }],
  creator: "Synko",
  publisher: "Synko",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://synko.dev"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://synko.dev",
    siteName: "Synko",
    title: "Synko - Orquestamos IA y automatización para crecer sin fricción",
    description:
      "Transformamos procesos complejos en soluciones elegantes. Especialistas en IA y automatización para empresas que buscan crecer sin fricción.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Synko - IA y automatización",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synko - Orquestamos IA y automatización para crecer sin fricción",
    description:
      "Transformamos procesos complejos en soluciones elegantes. Especialistas en IA y automatización.",
    images: ["/og-image.png"],
    creator: "@synko_dev",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${sora.variable}`}>
      <body className="bg-bg text-fg min-h-screen antialiased">
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
