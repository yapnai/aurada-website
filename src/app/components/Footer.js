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