import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";
import { Header } from "@/components/layout/header";
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
      <head>
        <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <div className="w-full min-h-screen flex flex-col bg-#382c85">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
