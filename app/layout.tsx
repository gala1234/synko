import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";


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
  metadataBase: new URL("https://synko.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://synko.com",
    siteName: "Synko",
    title: "Synko - Orquestamos IA y automatización para crecer sin fricción",
    description:
      "Transformamos procesos complejos en soluciones elegantes. Especialistas en IA y automatización para empresas que buscan crecer sin fricción.",
    images: [
      {
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
    creator: "@synko",
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
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen bg-bg text-fg antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}