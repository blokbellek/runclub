import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Cappadocia Run Club",
  description:
    "Kapadokya'nın ilk koşu kulübü. Her pazar Rose Valley'de, her seviyeye açık sosyal koşu. Tempon senin, yolculuk bizimle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" data-scroll-behavior="smooth" className={`${archivo.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
