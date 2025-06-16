import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-slate-900/50 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-1">
          <div className="flex items-center">
            <Image
              src="/aurada-logo.svg"
              alt="Aurada"
              width={300}
              height={90}
              className="h-16 w-auto"
            />
          </div>
          <div className="text-sm text-gray-300">
            Questions? Call us at <span className="font-semibold text-cyan-400">(703) 969-9580</span>
          </div>
        </div>
      </div>
    </header>
  );
} 