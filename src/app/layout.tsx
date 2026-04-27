import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/app-shell";
import { CursorSparkle } from "@/components/cursor-sparkle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gavinlee.dev"),
  title: {
    default: "Gavinlee Fernandes | Integrations / Implementation Engineer",
    template: "%s | Gavinlee Fernandes",
  },
  description:
    "Integrations / Implementation (Fiorano ESB) Engineer specialising in API development, fintech integrations, and DevOps automation for enterprise banking systems across East Africa.",
  keywords: [
    "Gavinlee Fernandes",
    "Fiorano ESB Engineer",
    "Technical Implementation Engineer",
    "FinTech",
    "API Integrations",
    "DevOps",
    "Diamond Trust Bank",
    "Next.js portfolio",
  ],
  authors: [{ name: "Gavinlee Fernandes" }],
  openGraph: {
    title: "Gavinlee Fernandes | Integrations / Implementation Engineer",
    description:
      "Fiorano ESB engineer building secure API integrations, DevOps tooling, and resilient banking middleware.",
    url: "https://gavinlee.dev",
    siteName: "Gavinlee Fernandes Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gavinlee Fernandes | Integrations / Implementation Engineer",
    description:
      "Fiorano ESB engineer building secure API integrations, DevOps tooling, and resilient banking middleware.",
    creator: "@gavoxavier",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <CursorSparkle />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
