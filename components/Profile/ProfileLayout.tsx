"use client";
import React from "react";
import Link from "next/link";

type Props = { children: React.ReactNode; section?: string };

export default function ProfileLayout({ children, section="profile" }: Props) {
  const items = [
    { key: "profile", label: "Profile", href: "/dashboard/profile" },
    { key: "dashboard", label: "Dashboard", href: "/dashbord/profile/dashboard" },
    { key: "settings", label: "Settings", href: "/dashbord/profile/settings" },
    { key: "notifications", label: "Notifications", href: "/dashbord/profile/notifications" },
  ];
  return (
    <div className="flex gap-6">
      <aside className="w-64 bg-white rounded-md shadow-sm p-4">
        <div className="mb-4 font-semibold">Profile Details</div>
        <nav className="space-y-2">
          {items.map(i => (
            <Link key={i.key} href={i.href} className={`block py-2 px-3 rounded ${section===i.key ? "bg-blue-50 text-blue-700" : "text-gray-700"}`}>
              {i.label}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="flex-1">
        <div className="bg-white rounded-md shadow-sm p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
