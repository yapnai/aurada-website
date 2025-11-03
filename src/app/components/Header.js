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