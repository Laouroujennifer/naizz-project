"use client";
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import ProfileLayout from "@/components/Profile/ProfileLayout";

export default function NotificationsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-xl font-semibold">Hello Mide,</h1>
      <p className="text-sm text-gray-500 mb-6">Profile</p>

      <ProfileLayout section="notifications">
        <div>
          <div className="text-sm text-gray-600 mb-4">Notification preferences</div>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm">
              <div>
                <div className="font-medium">Email notifications</div>
                <div className="text-xs text-gray-500">Receive updates by email</div>
              </div>
              <input type="checkbox" defaultChecked />
            </label>
            <label className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm">
              <div>
                <div className="font-medium">Push notifications</div>
                <div className="text-xs text-gray-500">Receive push notifications on events</div>
              </div>
              <input type="checkbox" />
            </label>
          </div>
        </div>
      </ProfileLayout>
    </DashboardLayout>
  );
}
