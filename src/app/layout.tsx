import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Amiri } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const amiri = Amiri({
  subsets: ["arabic"],
  variable: "--font-amiri",
  weight: ["400", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "Organization of Islamic Micronations | Official Portal - منظمة الدول الإسلامية المجهرية",
  description: "Official diplomatic portal, charter archive, legislative registry, and press releases of the Organization of Islamic Micronations (OIM). Founded March 12, 2024, to foster unity and solidarity.",
  keywords: ["OIM", "Organization of Islamic Micronations", "Micronations", "Islamic Micronations", "Diplomatic Portal", "Charter", "Peace Treaty 2026"],
  authors: [{ name: "OIM Secretariat" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${amiri.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-parchment text-gray-800 selection:bg-islamic-gold/30 selection:text-islamic-green-hover">
        {children}
      </body>
    </html>
  );
}
