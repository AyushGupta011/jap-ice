import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "フロスティ・スクープ (Frosty Scoops)",
  description: "手作りの愛を込めて。厳選された素材と濃厚な味わいの手作りアイスクリーム。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${notoSansJP.variable} font-sans antialiased bg-[#f8b4c4] text-[#4a2e35] overflow-x-hidden`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
