import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StructuredData } from "@/components/StructuredData";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Memories Lab | 高級オーダーメイド家族ギフト",
    template: "%s | Memories Lab"
  },
  description: site.description,
  keywords: [
    "Memories Lab",
    "高級ギフト",
    "家族ギフト",
    "クリスタルブロック",
    "ガラス時計",
    "ガラスフォトフレーム",
    "記念品",
    "オーダーメイドギフト"
  ],
  openGraph: {
    title: "Memories Lab | 大切な瞬間を、未来へ残す。",
    description:
      "家族の節目を、上質なガラスとクリスタルに刻む高級オーダーメイドギフト。",
    url: site.url,
    siteName: "Memories Lab",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/hero.svg",
        width: 1200,
        height: 630,
        alt: "Memories Labの高級家族ギフト"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Memories Lab | 高級オーダーメイド家族ギフト",
    description: "大切な瞬間を、未来へ残す。"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: site.email,
      availableLanguage: "Japanese"
    }
  };

  return (
    <html lang="ja">
      <body>
        <StructuredData data={organizationJsonLd} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
