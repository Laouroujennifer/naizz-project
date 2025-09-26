"use client";
import React from "react";
import Link from "next/link";
import { User, LayoutDashboard, Settings, Bell, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

type Props = { children: React.ReactNode; section?: string };

export default function ProfileLayout({ children, section = "profile" }: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const items = [
    { key: "profile", label: "Profile", href: "/dashbord/profile", icon: User },
    { key: "dashboard", label: "Dashboard", href: "/dashbord/profile/dashboard", icon: LayoutDashboard },
    { key: "settings", label: "Settings", href: "/dashbord/profile/settings", icon: Settings },
    { key: "notifications", label: "Notifications", href: "/dashbord/profile/notifications", icon: Bell },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-[80vh] bg-gray-50">
      {/* Mobile Header */}
      <div className="md:hidden bg-white shadow-sm border-b p-4">
        <div className="flex items-center justify-between">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <h1 className="text-lg font-semibold text-gray-800">
            {items.find(item => item.key === section)?.label || "Profile"}
          </h1>
          <div className="w-10"></div> {/* Spacer for balance */}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto p-4 md:p-6">
        {/* Sidebar Overlay for Mobile */}
        {isSidebarOpen && isMobile && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={`
          fixed md:static top-0 left-0 h-full md:h-auto z-50
          w-64 md:w-72 bg-white rounded-lg shadow-sm
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          ${isMobile ? "border-r" : ""}
        `}>
          <div className="p-4 md:p-6 flex flex-col h-full">
            {/* Mobile Sidebar Header */}
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <h2 className="text-lg font-semibold text-gray-800">Profile Menu</h2>
              {isMobile && (
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-1 rounded-md text-gray-500 hover:text-gray-700"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            <nav className="space-y-1 flex-1">
              {items.map((i) => {
                const Icon = i.icon;
                const isActive = section === i.key;
                return (
                  <Link
                    key={i.key}
                    href={i.href}
                    onClick={() => isMobile && setIsSidebarOpen(false)}
                    className={`
                      flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-200
                      ${isActive
                        ? "bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-l-4 border-transparent"
                      }
                    `}
                  >
                    <Icon size={20} className={isActive ? "text-blue-700" : "text-gray-400"} />
                    <span className="text-sm md:text-base">{i.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* User info or additional content */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-xs text-gray-500">
                Need help? <a href="#" className="text-blue-600 hover:text-blue-800">Contact support</a>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 lg:p-8">
            {/* Breadcrumb for larger screens */}
            <div className="hidden md:block mb-6">
              <nav className="text-sm text-gray-500">
                <ol className="list-none p-0 inline-flex">
                  <li className="flex items-center">
                    <Link href="/dashboard" className="hover:text-blue-600 transition-colors">
                      Dashboard
                    </Link>
                    <span className="mx-2">/</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-gray-800 font-medium">
                      {items.find(item => item.key === section)?.label}
                    </span>
                  </li>
                </ol>
              </nav>
            </div>

            {/* Content */}
            <div className="w-full">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}