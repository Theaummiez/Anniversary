import type { Metadata } from "next";
import { Quicksand, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const dancing = Dancing_Script({
  variable: "--font-calligraphy",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Alex & Tomy 💕 Notre Belle Histoire",
  description:
    "L'histoire d'amour d'Alex et Tomy — romantiques, joueurs, et aventuriers pour toujours 💕",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${quicksand.variable} ${playfair.variable} ${dancing.variable} dark scroll-smooth`}
    >
      <body className="font-sans bg-[#080114] text-white overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
