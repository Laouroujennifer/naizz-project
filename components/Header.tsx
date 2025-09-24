"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-4 px-6 md:px-12 bg-gray-50 relative z-20">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image src="/images/Vector.png" alt="Naizz Logo" width={100} height={40} />
      </Link>

      {/* Navigation Desktop */}
      <nav className="hidden md:flex items-center space-x-6">

        <a href="#" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200">
          <PhoneIcon className="h-5 w-5 mr-1" />
        </a>
        <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
          How it works
        </Link>
        <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
          Pricing
        </Link>
        <Link href="/agents" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
          Agents
        </Link>
        
        <button className="bg-blue-900 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
          Get Started
        </button>
        <Link href="/login" className="text-blue-500 hover:text-gray-900 transition-colors duration-200 font-medium">
          Login
        </Link>
      </nav>

      {/* Hamburger Icon Mobile */}
      <div className="md:hidden flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-900">
          <PhoneIcon className="h-6 w-6" />
        </button>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          {isMenuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col items-center space-y-6 animate-fade-in-down">
          <Link href="/how-it-works" onClick={() => setIsMenuOpen(false)} className="text-gray-800 text-lg hover:text-blue-600">
            How it works
          </Link>
          <Link href="/pricing" onClick={() => setIsMenuOpen(false)} className="text-gray-800 text-lg hover:text-blue-600">
            Pricing
          </Link>
          <Link href="/agents" onClick={() => setIsMenuOpen(false)} className="text-gray-800 text-lg hover:text-blue-600">
            Agents
          </Link>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
            Get Started
          </button>
          <Link
            href="/login"
            onClick={() => setIsMenuOpen(false)}
            className="w-full text-center text-gray-800 text-lg hover:text-blue-600 font-medium"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
