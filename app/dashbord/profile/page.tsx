"use client";
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import ProfileLayout from "@/components/Profile/ProfileLayout";

export default function ProfilePage() {
  return (
    <DashboardLayout>
      {/* Header */}
      <h1 className="text-xl font-semibold">Hello Mide,</h1>
      <p className="text-sm text-gray-500 mb-6">Profile</p>

      <ProfileLayout section="profile">
        {/* Titre au-dessus de la carte */}
        <h2 className="text-lg font-semibold mb-4">Profile</h2>

        {/* Carte PE fixe */}
        <div className="bg-gray-50 border border-gray-200 rounded-md p-8 w-[732px] h-[561px] mx-auto shadow-sm flex flex-col">
          {/* PE centré en haut */}
          <div className="flex justify-center">
            <div className="text-6xl font-bold text-gray-800">PE</div>
          </div>

          {/* Trait séparateur */}
          <hr className="my-8 border-gray-300" />

          {/* Contenu infos */}
          <div className="flex flex-col flex-1 justify-between">
            {/* Bloc infos */}
            <div className="space-y-6">
              {/* Ligne Free user + Upgrade */}
              <div className="flex items-center justify-between">
                <span className="font-semibold text-lg">Free user</span>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-sm text-sm shadow-sm">
                  Upgrade
                </button>
              </div>

              {/* Ligne Email + adresse poussée à droite */}
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Email address</span>
                <p className="font-medium">pasezeh@gmail.com</p>
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
