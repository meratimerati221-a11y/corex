import { ToastProvider } from "@/components/ui/Toast";
import CartProvider from "@/context/CartProvider";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Cursor from "@/components/cursor/Cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CoreX",
  description: "Gaming Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050816]">
        
  <ToastProvider>
    <CartProvider>

      <AnimatedBackground />
      <Cursor />
      <Header />

      <main className="relative z-10 flex-1">
        {children}
      </main>

      </CartProvider>
      </ToastProvider>
      
      </body>
    </html>
  );
}