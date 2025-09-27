"use client"
import DashboardLayout from "@/components/DashboardLayout";
import { Volume2, PhoneOff, Activity } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OngoingCall() {
  const router = useRouter();

  return (
    <DashboardLayout>
      {/* Header */}
      <h1 className="text-xl font-semibold">Hello Mide,</h1>
      <p className="text-sm text-gray-500 mb-6">Home &gt; Call</p>

      {/* Card */}
      <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center text-center h-[500px] relative">
        
        {/* Top bar */}
        <div className="flex justify-between items-center w-full mb-6">
          <span className="text-sm text-gray-600">Transcribe</span>
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm text-gray-700 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>English Model</option>
              <option>French Model</option>
              <option>Spanish Model</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Call status au centre */}
        <div className="flex flex-col items-center justify-center flex-1">
          {/* Timer */}
          <span className="text-sm text-gray-600 mb-2">00:35</span>
          <p className="text-gray-700 mb-4">Ongoing Call</p>

          {/* Activity (clickable) */}
          <button
            onClick={() => router.push("/dashbord/call/transcribing")}
            className="text-blue-600 animate-pulse"
          >
            <Activity size={60} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-10 mt-6">
        <Volume2 size={28} className="text-gray-600" />
        <button className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700">
          <PhoneOff size={28} />
        </button>
      </div>
    </DashboardLayout>
  );
}
