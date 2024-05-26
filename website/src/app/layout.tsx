import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title:
    "Unleash Your Potential with AI - Personal Growth and Tech Excellence by Rahat Khanna",
  description:
    "Explore Rahat's personal brand website to unlock your potential with cutting-edge AI insights, career guidance, and personal growth strategies. Discover how AI can empower you to achieve excellence in tech and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full min-h-screen flex flex-col bg-gradient-to-r from-[#4c6ef5] to-[#2cb67d]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
