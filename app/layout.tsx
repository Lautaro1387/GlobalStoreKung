import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Global Store Kung",
  description: "By Lautaro Illa",
  openGraph: {
    title: "Global Store Kung",
    description: "By Lautaro Illa",
    url: "https://www.globalstorekung.com", // Cambia esto por tu dominio real
    images: [
      {
        url: "/cart.svg", // Imagen para Open Graph, cambia "foto_1.jpg" por tu imagen
        width: 1200,
        height: 630,
        alt: "Descripción de la imagen para Open Graph",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Store Kung",
    description: "By Lautaro Illa",
    images: ["/cart.svg"], // Misma imagen para Twitter
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
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph metatags */}
        <meta property="og:title" content="Global Store Kung" />
        <meta property="og:description" content="By Lautaro Illa" />
        <meta property="og:image" content="/cart.svg" />
        <meta property="og:url" content="https://www.globalstorekung.com" />
        <meta property="og:type" content="website" />
        {/* Twitter metatags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Global Store Kung" />
        <meta name="twitter:description" content="By Lautaro Illa" />
        <meta name="twitter:image" content="/cart.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
