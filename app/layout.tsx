import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
// TypeScript may complain about missing type declarations for this side-effect CSS import.
// Suppress the error here since Next.js handles CSS imports in the app directory.
// @ts-ignore
import "./globals.css";
import WhatsAppButton from "@/components/sections/whatsapp-button";

// next/font baixa e hospeda a fonte localmente no build (sem request externo
// no navegador do usuário = mais rápido, sem CLS/layout shift).
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://www.templatephotographer.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fotógrafo e Filmmaker | Template",
    template: "%s | Nome Fotografias",
  },
  description:
    "Fotografia e filmagem para casamentos, ensaios, gestantes, famílias e eventos. Registramos histórias com sensibilidade e profissionalismo. Solicite seu orçamento pelo WhatsApp.",
  keywords: [
    "fotógrafo de casamento",
    "filmmaker",
    "ensaio fotográfico",
    "fotografia de eventos",
  ],
  authors: [{ name: "Seu Nome" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Fotógrafo",
    title: "Seu Nome — Fotógrafo | Fotógrafo e Filmmaker",
    description:
      "Cada momento merece ser lembrado da melhor forma. Fotografia e filmagem para casamentos, eventos, ensaios e famílias.",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Fotógrafo — portfólio de fotografia e filmagem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seu Nome — Fotógrafo",
    description:
      "Fotografia e filmagem para casamentos, eventos, ensaios e famílias.",
    images: ["/images/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F3EE",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
