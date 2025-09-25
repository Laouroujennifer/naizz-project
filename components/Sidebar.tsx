"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  Wallet,
  CreditCard,
  User,
  MessageSquare,
  Book,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [language, setLanguage] = useState("English Model");
  const [isLangOpen, setIsLangOpen] = useState(false);

  const menuItems = [
    { label: "Home", icon: <Home size={18} />, section: "Main", path: "/dashbord" },
    { label: "Agents", icon: <Users size={18} />, section: "Main", path: "/dashbord/agents" },
    { label: "Wallet", icon: <Wallet size={18} />, section: "Main", path: "/dashbord/wallet" },
    { label: "Transactions", icon: <CreditCard size={18} />, section: "Main", path: "/dashbord/transactions" },
    { label: "Profile Details", icon: <User size={18} />, section: "Main", path: "/dashbord/profile" },
    { label: "Conversations", icon: <MessageSquare size={18} />, section: "Evaluate", path: "/dashbord/conversations" },
    { label: "Words", icon: <Book size={18} />, section: "Evaluate", path: "/dashbord/words" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      {/* Header mobile */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-40 flex items-center justify-between px-4">
        <div className="flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 mr-3"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <img src="/images/Vector.png" alt="Naizz Logo" className="h-6" />
        </div>
        
        {/* Sélecteur de langue mobile */}
        <div className="relative">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-2 rounded-md border border-gray-300 bg-gray-100 py-1 px-3 text-xs text-gray-700"
          >
            <img src="/images/White bg.png" alt="Lang Logo" className="h-3 w-3" />
            {language.split(' ')[0]}
            <ChevronDown size={12} className="text-gray-500" />
          </button>

          {isLangOpen && (
            <div className="absolute right-0 mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              <button
                onClick={() => {
                  setLanguage("English Model");
                  setIsLangOpen(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-2 text-xs hover:bg-gray-100"
              >
                <img src="/images/White bg.png" alt="English" className="h-3 w-3" />
                English
              </button>
              <button
                onClick={() => {
                  setLanguage("French Model");
                  setIsLangOpen(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-2 text-xs hover:bg-gray-100"
              >
                <img src="/images/White bg.png" alt="French" className="h-3 w-3" />
                French
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Overlay mobile */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-screen bg-white border-r border-gray-200 flex flex-col z-40
        transform transition-transform duration-300 ease-in-out
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        w-60 lg:w-64`}
      >
        {/* Logo Desktop */}
        <div className="h-16 flex items-center px-4 border-b border-gray-200 hidden lg:flex">
          <img src="/images/Vector.png" alt="Naizz Logo" className="h-8" />
        </div>

        {/* Custom Select avec logo - Desktop */}
        <div className="px-4 py-3 hidden lg:block relative">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="w-full flex items-center justify-between rounded-md border border-gray-300 bg-gray-100 py-2 px-3 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-50 transition-colors"
          >
            <span className="flex items-center gap-2">
              <img src="/images/White bg.png" alt="Lang Logo" className="h-4 w-4" />
              {language}
            </span>
            <ChevronDown 
              size={16} 
              className={`text-gray-500 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} 
            />
          </button>

          {isLangOpen && (
            <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50">
              <button
                onClick={() => {
                  setLanguage("English Model");
                  setIsLangOpen(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 transition-colors"
              >
                <img src="/images/White bg.png" alt="English" className="h-4 w-4" />
                English Model
              </button>
              <button
                onClick={() => {
                  setLanguage("French Model");
                  setIsLangOpen(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 transition-colors"
              >
                <img src="/images/White bg.png" alt="French" className="h-4 w-4" />
                French Model
              </button>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-2 mt-16 lg:mt-0">
          {["Main", "Evaluate"].map((section) => (
            <div key={section} className="mb-2">
              <div className="px-4 py-2">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {section}
                </p>
              </div>
              {menuItems
                .filter((item) => item.section === section)
                .map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={item.label}
                      href={item.path}
                      onClick={() => {
                        setIsMobileOpen(false);
                        setIsLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors mx-2 rounded-md ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      <span className={isActive ? "text-white" : "text-gray-500"}>
                        {item.icon}
                      </span>
                      {item.label}
                    </Link>
                  );
                })}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}