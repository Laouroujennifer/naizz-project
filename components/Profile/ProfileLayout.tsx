"use client";
import React from "react";
import Link from "next/link";
import { User, LayoutDashboard, Settings, Bell } from "lucide-react";

type Props = { children: React.ReactNode; section?: string };

export default function ProfileLayout({ children, section = "profile" }: Props) {
  const items = [
    { key: "profile", label: "Profile", href: "/dashbord/profile", icon: User },
    { key: "dashboard", label: "Dashboard", href: "/dashbord/profile/dashboard", icon: LayoutDashboard },
    { key: "settings", label: "Settings", href: "/dashbord/profile/settings", icon: Settings },
    { key: "notifications", label: "Notifications", href: "/dashbord/profile/notifications", icon: Bell },
  ];

  return (
    <div className="flex gap-6 items-stretch min-h-[80vh]">
      {/* Sidebar */}
      <aside className="w-64 bg-white rounded-md shadow-sm p-4 flex flex-col">
        <div className="mb-4 font-semibold text-gray-700">Profile Details</div>
        <nav className="space-y-2">
          {items.map((i) => {
            const Icon = i.icon;
            return (
              <Link
                key={i.key}
                href={i.href}
                className={`flex items-center gap-2 py-2 px-3 rounded transition ${
                  section === i.key
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Icon size={18} />
                {i.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex">
        <div className="bg-white rounded-md shadow-sm p-6 flex-1">
          {children}
        </div>
      </main>
    </div>
  );
}
