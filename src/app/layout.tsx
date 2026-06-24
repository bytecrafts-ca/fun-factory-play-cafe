import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { PartyPromoPopup } from "@/components/PartyPromoPopup";
import { TopBar } from "@/components/TopBar";
import { createPageMetadata, getGlobalSchemas, pageSeo, seoConfig } from "@/lib/seo";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const baseMetadata = createPageMetadata(pageSeo.home);

export const metadata: Metadata = {
  ...baseMetadata,
  metadataBase: new URL(seoConfig.siteUrl),
  title: {
    default: pageSeo.home.title,
    template: `%s | ${seoConfig.shortName}`,
  },
  applicationName: seoConfig.siteName,
  authors: [{ name: seoConfig.siteName, url: seoConfig.siteUrl }],
  creator: seoConfig.siteName,
  publisher: seoConfig.siteName,
  category: "entertainment",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  other: {
    "geo.region": "CA-ON",
    "geo.placename": "Pickering",
    "geo.position": "43.83115;-79.0812758",
    ICBM: "43.83115, -79.0812758",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM site summary" />
      </head>
      <body className={jakarta.variable}>
        <JsonLd data={getGlobalSchemas()} />
        <TopBar />
        <AnnouncementBar />
        <Header />
        <main id="main-content">{children}</main>
        <PartyPromoPopup />
        <Footer />
      </body>
    </html>
  );
}
