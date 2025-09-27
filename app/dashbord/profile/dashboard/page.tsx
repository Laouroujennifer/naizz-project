"use client";

import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import ProfileLayout from "@/components/Profile/ProfileLayout";
import { Flame } from "lucide-react";

export default function ProfileDashboard() {
  return (
    <DashboardLayout>
      {/* Header */}
      <h1 className="text-xl md:text-2xl font-semibold">Hello Mide,</h1>
      <p className="text-sm text-gray-500 mb-6">Profile</p>

      <ProfileLayout section="dashboard">
        {/* Titre au-dessus */}
        <h2 className="text-lg md:text-xl font-semibold mb-4">Dashboard</h2>

        <div className="space-y-6">
          {/* Data usage full width en haut */}
          <div className="bg-blue-50 p-4 md:p-6 rounded-md shadow-sm">
            <div className="text-sm text-gray-600 mb-4 font-medium">
              Data usage
            </div>
            <div className="space-y-3">
              {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d, i) => (
                <div key={d} className="flex items-center gap-2 md:gap-3">
                  <div className="w-10 md:w-12 text-[10px] md:text-xs text-gray-700">
                    {d}
                  </div>
                  <div className="h-2 md:h-3 bg-gray-200 flex-1 rounded-md relative">
                    <div
                      className="absolute left-0 top-0 h-2 md:h-3 rounded-md bg-blue-700"
                      style={{ width: `${[40, 60, 30, 80, 40][i]}%` }}
                    />
                  </div>
                  <div className="w-6 md:w-8 text-[10px] md:text-xs text-gray-600 text-right">
                    {[40, 60, 30, 80, 40][i]}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deux cartes en bas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Total minutes */}
            <div className="bg-blue-50 p-4 md:p-6 rounded-md shadow-sm flex flex-col gap-4 md:gap-6">
              <div className="flex items-center justify-between">
                <div className="text-xs md:text-sm text-gray-600">
                  Total minutes
                </div>
                <select className="text-xs md:text-sm text-gray-600 bg-transparent focus:outline-none">
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
              <div className="text-4xl md:text-6xl font-extrabold tracking-tight">
                1230
              </div>
              <div className="text-xs md:text-sm text-gray-500">
                Minutes conversations had
              </div>
            </div>

            {/* Streaks */}
            <div className="bg-blue-900 text-white p-4 md:p-6 rounded-md shadow-sm flex flex-col items-center text-center gap-3 md:gap-4">
              {/* Titre en haut */}
              <span className="text-xs md:text-sm font-medium">Streaks</span>

              {/* Flamme */}
              <Flame size={36} className="md:w-12 md:h-12 mb-2" />

              {/* Jours de la semaine */}
              <div className="flex gap-1 md:gap-2 text-[10px] md:text-xs mb-2">
                {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                  <div
                    key={i}
                    className={`w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded ${
                      i < 3
                        ? "bg-white text-blue-700 font-semibold"
                        : "border border-white/50"
                    }`}
                  >
                    {d}
                  </div>
                ))}
              </div>

              {/* Texte principal */}
              <div className="text-base md:text-lg font-semibold">
                3 days streak!
              </div>
              <div className="text-xs md:text-sm opacity-90">
                You’re fire! Keep being it
              </div>
            </div>
          </div>
        </div>
      </ProfileLayout>
    </DashboardLayout>
  );
}
