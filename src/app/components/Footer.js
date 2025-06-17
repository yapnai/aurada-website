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
              src="/aurada-logo.svg"
              alt="Aurada Logo"
              width={48} // Next.js optimization dimensions
              height={48} // Next.js optimization dimensions
              className="w-20 h-20 mr-2" // 80px display size with right spacing
            />
            {/* Brand tagline with left margin and gray styling */}
            <span className="ml-2 text-gray-400">Speak. Text. Serve.</span>
          </div>
          {/* Legal text with responsive font sizing - smaller on mobile */}
          <div className="text-xs md:text-sm text-gray-400">
            © 2025 Aurada. All rights reserved. | Privacy Policy | Terms of Service
          </div>
        </div>
      </div>
    </footer>
  );
} 