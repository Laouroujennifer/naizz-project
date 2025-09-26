"use client";
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import ProfileLayout from "@/components/Profile/ProfileLayout";

export default function ProfilePage() {
  return (
    <DashboardLayout>
      {/* Header */}
      <h1 className="text-xl md:text-2xl font-semibold">Hello Mide,</h1>
      <p className="text-sm text-gray-500 mb-6">Profile</p>

      <ProfileLayout section="profile">
        {/* Titre au-dessus de la carte */}
        <h2 className="text-lg md:text-xl font-semibold mb-4">Profile</h2>

        {/* Carte responsive */}
        <div className="bg-gray-50 border border-gray-200 rounded-md p-6 md:p-8 w-full max-w-2xl mx-auto shadow-sm flex flex-col">
          {/* PE centré en haut */}
          <div className="flex justify-center">
            <div className="text-5xl md:text-6xl font-bold text-gray-800">PE</div>
          </div>

          {/* Trait séparateur */}
          <hr className="my-6 md:my-8 border-gray-300" />

          {/* Contenu infos */}
          <div className="flex flex-col flex-1 justify-between">
            <div className="space-y-6">
              {/* Ligne Free user + Upgrade */}
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="font-semibold text-base md:text-lg">Free user</span>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-sm text-sm shadow-sm">
                  Upgrade
                </button>
              </div>

              {/* Ligne Email */}
              <div className="flex items-center justify-between flex-wrap gap-2 text-sm text-gray-600">
                <span>Email address</span>
                <p className="font-medium break-all">pasezeh@gmail.com</p>
              </div>

              {/* Delete account */}
              <div className="text-sm text-red-500 cursor-pointer hover:text-red-700 font-medium">
                Delete account
              </div>
            </div>
          </div>
        </div>
      </ProfileLayout>
    </DashboardLayout>
  );
}
