import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://yapn.ai"),
  title: "Yapn | Never miss a call",
  description:
    "Make room for every conversation. Yapn helps your business answer inbound calls and connect with customers through outbound campaigns.",
  openGraph: {
    title: "Yapn | Never miss a call",
    description:
      "Inbound calls. Outbound campaigns. More room for conversation.",
    url: "https://yapn.ai",
    siteName: "Yapn",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
