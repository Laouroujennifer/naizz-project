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
        <div>
          <div className="mb-4">
            <div className="text-sm text-gray-600">Subtitle</div>
            <label className="inline-flex items-center mt-2">
              <input type="checkbox" checked={subtitleOn} onChange={() => setSubtitleOn(v=>!v)} className="mr-2" />
              <span className="text-sm">Turn on subtitle when on calls</span>
            </label>
          </div>

          <div className="mb-4">
            <div className="text-sm text-gray-600">Default subtitle language</div>
            <div className="mt-2 text-sm">English ▾</div>
          </div>

          <div>
            <div className="text-sm text-gray-600">Speech rate</div>
            <div className="mt-3 flex gap-2">
              {[0.5,1,2,3,4].map(s => (
                <button key={s} onClick={() => setSpeed(s)} className={`px-3 py-1 border rounded ${speed===s ? "bg-blue-700 text-white" : "bg-white"}`}>{s}x</button>
              ))}
            </div>
          </div>
        </div>
      </ProfileLayout>
    </DashboardLayout>
  );
}
