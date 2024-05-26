import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genc Krom Kaplama",
  description: "Genç Krom Kaplama, müşteri memnuniyetini ön planda tutarak, yüksek kaliteli hizmet sunmayı ilke edinmiştir.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
