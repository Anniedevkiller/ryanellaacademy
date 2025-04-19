import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/page";
import Footer from "./footer/page";

const nunitoSans = Nunito({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const nunitoMono = Nunito({
  variable: "--font-nunito-mono",
  subsets: ["latin"],
});
const inter = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});
const roboto = Nunito({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});
const montserrat = Nunito({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});
const poppins = Nunito({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});
const openSans = Nunito({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ryanella Academy",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${nunitoMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
