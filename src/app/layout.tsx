import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
const playfairdisplay = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio Alan",
  description: "perfil profesional",
  icons: {
    icon: [
      "https://res.cloudinary.com/dn5ltihzv/image/upload/v1710184159/imagenes/favicon.ico.ico",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={playfairdisplay.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
