"use client";

import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import ProfileLayout from "@/components/Profile/ProfileLayout";

export default function NotificationsPage() {
  const [dailyReminder, setDailyReminder] = useState(true);
  const [weeklyReport, setWeeklyReport] = useState(true);
  const [lowBalance, setLowBalance] = useState(true);
  const [updates, setUpdates] = useState(false);

  return (
    <DashboardLayout>
      {/* Header */}
      <h1 className="text-xl md:text-2xl font-semibold">Hello Mide,</h1>
      <p className="text-sm text-gray-500 mb-6">Profile</p>

      <ProfileLayout section="notifications">
        <h2 className="text-lg md:text-xl font-semibold mb-4">Notifications</h2>

        <div className="bg-white rounded-md shadow-sm divide-y divide-gray-200">
          {/* Item générique */}
          {[
            {
              title: "Enable daily reminder notification",
              desc: "Receive daily reminder notifications on your email",
              state: dailyReminder,
              setState: setDailyReminder,
            },
            {
              title: "Weekly report notification",
              desc: "Receive weekly report notifications on your email",
              state: weeklyReport,
              setState: setWeeklyReport,
            },
            {
              title: "Coin low balance notification",
              desc: "Receive notifications on your email when your coin balance is low",
              state: lowBalance,
              setState: setLowBalance,
            },
            {
              title: "Updates",
              desc: "Get notified when there’s a new feature",
              state: updates,
              setState: setUpdates,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 p-4"
            >
              <div className="flex-1">
                <div className="text-sm md:text-base font-medium text-gray-800">
                  {item.title}
                </div>
                <div className="text-xs md:text-sm text-gray-500">
                  {item.desc}
                </div>
              </div>

              {/* Toggle */}
              <button
                onClick={() => item.setState(!item.state)}
                className={`w-10 h-5 flex items-center rounded-full p-0.5 transition-colors shrink-0 ${
                  item.state ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`h-4 w-4 bg-white rounded-full shadow transform transition-transform ${
                    item.state ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </ProfileLayout>
    </DashboardLayout>
  );
}
