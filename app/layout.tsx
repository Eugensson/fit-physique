import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: {
    default: "Fit Physique",
    template: "%s | Fit Physique",
  },
  description:
    "Fit Physique is your trusted partner in fitness and a healthy lifestyle. We provide personalized training, nutrition plans, and expert coaching to help you build strength, improve health, and feel confident every day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-200">
      <body className={`${oswald.variable} ${roboto.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
