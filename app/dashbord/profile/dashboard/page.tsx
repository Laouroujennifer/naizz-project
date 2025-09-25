"use client";
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import ProfileLayout from "@/components/Profile/ProfileLayout";

export default function ProfileDashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-xl font-semibold">Hello Mide,</h1>
      <p className="text-sm text-gray-500 mb-6">Profile</p>

      <ProfileLayout section="dashboard">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-md">
              <div className="text-sm text-gray-500">Data usage</div>
              {/* small bars (placeholder) */}
              <div className="mt-3 space-y-3">
                {["Mon","Tue","Wed","Thu","Fri"].map((d,i)=>(
                  <div key={d} className="flex items-center gap-3">
                    <div className="w-16 text-xs text-gray-600">{d}</div>
                    <div className="h-3 bg-slate-100 flex-1 rounded-md relative">
                      <div className="absolute left-0 top-0 h-3 rounded-md bg-blue-700" style={{width: `${[40,60,30,80,40][i]}%`}}/>
                    </div>
                    <div className="w-8 text-xs text-gray-600">{[40,60,30,80,40][i]}%</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-md">
                <div className="text-xs text-gray-600">Total minutes</div>
                <div className="text-4xl font-extrabold">1230</div>
              </div>
              <div className="bg-blue-700 text-white p-6 rounded-md">
                <div>Streaks</div>
                <div className="mt-2">3 days streak!</div>
              </div>
            </div>
          </div>
        </div>
      </ProfileLayout>
    </DashboardLayout>
  );
}
