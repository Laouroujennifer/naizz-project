// components/Footer.tsx
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-200 via-blue-200 to-blue-300 py-6 flex justify-center">
      <div className="w-[90%] max-w-6xl flex items-center justify-between rounded-2xl bg-white/20 backdrop-blur-md shadow-md px-6 py-4">
        
        {/* Left section */}
        <div className="flex flex-col space-y-1">
          <div className="flex items-center space-x-2">
            <Image src="/images/Vector.png" alt="Valzz Logo" width={80} height={40} />
          </div>
          <span className="text-sm text-gray-700">A product of Zarnite</span>
        </div>

        {/* Center section */}
        <div className="text-gray-700 text-sm">© 2025</div>

        {/* Right section */}
        <div className="flex flex-col items-end space-y-1 text-gray-800">
          <a href="#how" className="hover:underline">How it works</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#agents" className="hover:underline">Agents</a>
        </div>
      </div>
      
    </footer>
  );
}
