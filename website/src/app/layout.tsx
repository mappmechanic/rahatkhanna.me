import type { Metadata, Viewport } from "next";

// Styles & Fonts
import "./globals.css";

// Components
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/footer";

// Analytics
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  metadataBase: new URL("https://rahatkhanna.me"),
  title: {
    default: "Rahat Khanna | AI Agent Infrastructure",
    template: "%s | Rahat Khanna",
  },
  description:
    "Rahat Khanna is a Staff Engineer building AI agent infrastructure, evaluation, observability, and governance systems for enterprise-ready autonomy.",
  manifest: '/manifest.json',
  openGraph: {
    title: "Rahat Khanna | AI Agent Infrastructure",
    description:
      "Staff Engineer focused on reliable AI agents, observability, evaluation, humanoids, space, and the future of autonomous systems.",
    url: "https://rahatkhanna.me",
    siteName: "Rahat Khanna",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahat Khanna | AI Agent Infrastructure",
    description:
      "Reliable AI agents, observability, evaluation, and frontier autonomy.",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Rahat Khanna.me'
  }
};

export const viewport: Viewport = {
  themeColor: '#05070d',
  colorScheme: "dark",
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover'
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rahat Khanna",
  url: "https://rahatkhanna.me",
  jobTitle: "Staff Software Engineer",
  sameAs: [
    "https://linkedin.com/in/rahatkhanna",
    "https://github.com/mappmechanic",
    "https://x.com/mappmechanic",
  ],
  knowsAbout: [
    "AI Agents",
    "Agent Observability",
    "LLM Evaluation",
    "AI Infrastructure",
    "Humanoids",
    "Space Technology",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Rahat Khanna" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
