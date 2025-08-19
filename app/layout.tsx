import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";

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
    "Fit Physique — ваш надійний партнер у світі фітнесу та здорового способу життя. Ми пропонуємо персональні тренування, програми харчування та експертні поради, щоб допомогти вам досягти ідеальної форми, зміцнити здоров’я та почуватися впевнено щодня.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
