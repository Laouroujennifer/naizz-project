"use client";
import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import ProfileLayout from "@/components/Profile/ProfileLayout";

export default function SettingsPage() {
  const [subtitleOn, setSubtitleOn] = useState(true);
  const [speed, setSpeed] = useState(1);

  return (
    <DashboardLayout>
      <h1 className="text-xl font-semibold">Hello Mide,</h1>
      <p className="text-sm text-gray-500 mb-6">Profile</p>

      <ProfileLayout section="settings">
          <h2 className="text-lg font-semibold mb-4">Settings</h2>
        <div className="bg-white rounded-md shadow-sm divide-y divide-gray-200">
          {/* Subtitle */}
          <div className="flex items-center justify-between p-4">
            <div>
              <div className="text-sm font-medium text-gray-800">Subtitle</div>
              <div className="text-xs text-gray-500">
                Turn on subtitle when on calls
              </div>
            </div>
            <button
              onClick={() => setSubtitleOn(!subtitleOn)}
              className={`w-10 h-5 flex items-center rounded-full p-0.5 transition-colors ${
                subtitleOn ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`h-4 w-4 bg-white rounded-full shadow transform transition-transform ${
                  subtitleOn ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Default subtitle language */}
          <div className="flex items-center justify-between p-4">
            <div>
              <div className="text-sm font-medium text-gray-800">
                Default subtitle language
              </div>
              <div className="text-xs text-gray-500">
                Select your default language for subtitle
              </div>
            </div>
            <select className="text-sm border border-gray-300 rounded px-2 py-1 bg-white focus:outline-none">
              <option>English</option>
              <option>French</option>
              <option>Spanish</option>
            </select>
          </div>

          {/* Speech rate */}
          <div className="p-4">
            <div className="text-sm font-medium text-gray-800">
              Speech rate
            </div>
            <div className="text-xs text-gray-500 mb-3">
              Select how fast you want your speech to be
            </div>
            <div className="flex gap-2">
              {[0.5, 1, 2, 3, 4].map((s) => (
                <button
                  key={s}
                  onClick={() => setSpeed(s)}
                  className={`px-3 py-1 border rounded text-sm ${
                    speed === s
                      ? "bg-blue-100 text-blue-700 border-blue-400"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>
          </div>
        </div>
      </ProfileLayout>
    </DashboardLayout>
  );
}
