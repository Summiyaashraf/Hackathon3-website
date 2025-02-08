import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import { Navbar } from "./components";
import { CartProvider } from "./context/CartContext";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        {/* ✅ CartProvider ko sirf yahan rakha hai */}
        <CartProvider>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </CartProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
