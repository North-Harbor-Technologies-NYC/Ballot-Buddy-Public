import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/* Vercel exposes the production hostname at build time; a custom domain can override it with NEXT_PUBLIC_SITE_URL. */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ballot Buddy",
  description:
    "A nonpartisan walkthrough of the NYC November 3, 2026 ballot for Lower Manhattan (AD 65): the real ballot layout, every race and proposal explained with sources, and a PDF of your plan. Picks never leave your device.",
  openGraph: {
    title: "Ballot Buddy by North Harbor Technologies",
    description: "The NYC Nov 3 ballot exactly as it looks in the booth, every race and proposal explained with sources. Nothing you mark leaves your device.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#e6e3dc",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
