import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white/5 backdrop-blur-xl border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center md:mb-0">
            <Image
              src="/aurada-logo.svg"
              alt="Aurada Logo"
              width={48}
              height={48}
              className="w-20 h-20 mr-2"
            />
            <span className="ml-2 text-gray-400">Speak. Text. Serve.</span>
          </div>
          <div className="text-sm text-gray-400">
            © 2024 Aurada. All rights reserved. | Privacy Policy | Terms of Service
          </div>
        </div>
      </div>
    </footer>
  );
} 