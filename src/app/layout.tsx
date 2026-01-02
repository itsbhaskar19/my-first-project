import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lakshmi Shanmukhi Nursery Gardens - Premium Plants & Gardening",
  description: "Discover our premium collection of indoor and outdoor plants. Wide selection of healthy plants with expert care guidance.",
  openGraph: {
    title: "Lakshmi Shanmukhi Nursery Gardens - Premium Plants & Gardening",
    description: "Discover our premium collection of indoor and outdoor plants. Wide selection of healthy plants with expert care guidance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ background: 'var(--color-bg)' }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
