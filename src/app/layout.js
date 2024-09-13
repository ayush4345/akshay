import { Inter, Reddit_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "pokerclub",
  description: "The only Poker guide you need to master the game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-[RedditMono] bg-[#121212]">
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
