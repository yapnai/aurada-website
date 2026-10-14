import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz"],
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
});

const description =
  "Yapn is an AI phone agent for small businesses. It answers questions, takes phone orders, texts callers the link they need, passes calls to your team and calls customers to confirm appointments.";

export const metadata = {
  metadataBase: new URL("https://yapn.ai"),
  title: "Yapn | Your phone rings. Yapn picks up.",
  description,
  openGraph: {
    title: "Yapn | Your phone rings. Yapn picks up.",
    description,
    url: "https://yapn.ai",
    siteName: "Yapn",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#FCFAF6",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
