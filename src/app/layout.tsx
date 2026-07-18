import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

// Primary font: Similar to Gill Sans (using Roboto as web-safe alternative)
const roboto = Roboto({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Cappadocia Run Club",
  description: "İlk kez koşmaya başlayacaklardan yeni başlayanlara ve deneyimli koşuculara kadar herkese uygun bir kulüp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${roboto.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
