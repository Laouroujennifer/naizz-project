"use client";
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import ProfileLayout from "@/components/Profile/ProfileLayout";

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <h1 className="text-xl font-semibold">Hello Mide,</h1>
      <p className="text-sm text-gray-500 mb-6">Profile</p>

      <ProfileLayout section="profile">
        <div className="flex items-center gap-8">
          <div className="w-28 h-28 bg-gray-100 rounded-md flex items-center justify-center text-4xl font-bold">PE</div>
          <div>
            <div className="font-semibold">Free user <button className="ml-3 px-3 py-1 bg-blue-600 text-white rounded-sm">Upgrade</button></div>
            <div className="text-sm text-gray-600 mt-2">Email address<p className="font-medium">pasezeh@gmail.com</p></div>
            <div className="text-sm text-red-500 mt-4 cursor-pointer">Delete account</div>
          </div>
        </div>
      </ProfileLayout>
    </DashboardLayout>
  );
}
