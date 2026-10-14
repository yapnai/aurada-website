# Shared layouts
Next.js App Router uses RootLayout globally. Header has Yapn SVG plus an external dashboard login link. Footer has logo, mailto team@yapn.ai, old copyright, inert legal labels.

### src/app/layout.js
```jsx
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
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
  title: "Yapn. - AI Voice Assistant for Restaurants",
  description: "Sign up your restaurant for Yapn's AI voice assistant that takes phone orders automatically. Streamline your order process and never miss a call again.",
  keywords: "restaurant AI, voice assistant, phone orders, restaurant automation, order management",
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

```

### src/app/components/Header.js
```jsx
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-slate-900/50 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Image
              src="/yapn-logo.svg"
              alt="yapn"
              width={300}
              height={90}
              className="h-20 w-auto"
            />
          </div>
          <div className="flex items-center h-full">
            <a
              href="https://dashboard.yapn.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white hover:bg-slate-900/70 px-4 h-full flex items-center font-medium text-xl transition-all duration-200"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </header>
  );
} 
```

### src/app/components/Footer.js
```jsx
import Image from 'next/image';

export default function Footer() {
  return (
    // Creates glass effect footer with semi-transparent background and top border
    <footer className="bg-white/5 backdrop-blur-xl border-t border-white/10">
      {/* Container with max width and no padding */}
      <div className="max-w-7xl mx-auto">
        {/* Flex layout: vertical stack on mobile, horizontal with space-between on desktop */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo section with horizontal alignment */}
          <div className="flex items-center md:mb-0">
            <Image
              src="/yapn-logo.svg"
              alt="yapn Logo"
              width={48} // Next.js optimization dimensions
              height={48} // Next.js optimization dimensions
              className="w-20 h-20 mr-2" // 80px display size with right spacing
            />
            {/* Brand tagline with left margin and gray styling */}
            <span className="ml-2 text-gray-400">Speak. Text. Serve.</span>
          </div>
          {/* Legal text with responsive font sizing - smaller on mobile */}
          <div className="text-xs md:text-sm text-gray-400 flex flex-col md:block items-center">
            <a 
              href="mailto:team@yapn.ai" 
              className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
            >
              team@yapn.ai
            </a>
            <span className="hidden md:inline mx-2">|</span>
            <span className="block md:inline">© 2025 Yapn. All rights reserved.</span>
            <span className="hidden md:inline mx-2">|</span>
            <span className="block md:inline">Privacy Policy | Terms of Service</span>
          </div>
        </div>
      </div>
    </footer> 
  );
} 
```
