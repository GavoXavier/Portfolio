import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/app-shell";
import { CursorSparkle } from "@/components/cursor-sparkle";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gavinleefernandes.com"),
  title: {
    default: "Gavinlee Fernandes | IT Production Support & Developer",
    template: "%s | Gavinlee Fernandes",
  },
  description:
    "Manager – IT Digital Production Support at Diamond Trust Bank. Keeping banking systems resilient and building fast, reliable digital products across East Africa's fintech ecosystem.",
  keywords: [
    "Gavinlee Fernandes",
    "IT Production Support",
    "Diamond Trust Bank",
    "Fiorano ESB",
    "Banking Systems",
    "API Integrations",
    "Web Developer Kenya",
    "Next.js developer",
    "Nairobi Kenya",
    "SLA management",
    "incident management",
  ],
  authors: [{ name: "Gavinlee Xavier Fernandes" }],
  openGraph: {
    title: "Gavinlee Fernandes | IT Production Support & Developer",
    description:
      "Manager – IT Digital Production Support keeping banking systems alive and building fast, reliable digital products.",
    url: "https://gavinleefernandes.com",
    siteName: "Gavinlee Fernandes",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gavinlee Fernandes | IT Production Support & Developer",
    description:
      "Manager – IT Digital Production Support keeping banking systems alive and building fast, reliable digital products.",
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
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <CursorSparkle />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
