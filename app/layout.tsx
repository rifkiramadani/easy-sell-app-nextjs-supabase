import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import "animate.css"
import { getCannonicalUrl } from "./utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Easy Sell",
  description: 'Discover the power of simplicity with Easy Sell - the ultimate solution for effortless selling products. Unlock convenience and boost your sales.',
  openGraph: {
    images: [`${getCannonicalUrl}/assets/og-image.png`]
  },
  alternates: {
    canonical: getCannonicalUrl()
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en" className="dark">
      <body
        className="flex flex-col min-h-screen mx-auto max-w-[100rem]">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
