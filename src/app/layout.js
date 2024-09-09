import { Inter, Reddit_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "productimp",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-[RedditMono] bg-[#121212]">
        <Navbar />
        {children}
        </body>
    </html>
  );
}
