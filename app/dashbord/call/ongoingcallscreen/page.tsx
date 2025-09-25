"use client";
import DashboardLayout from "@/components/DashboardLayout";
import { Volume2, PhoneOff, Activity } from "lucide-react"; // <-- j’ai ajouté Activity ici
import { useRouter } from "next/navigation";

export default function OngoingCallScreen() {
  const router = useRouter();

  return (
    <DashboardLayout>
      {/* Header */}
      <h1 className="text-xl font-semibold">Hello Mide,</h1>
      <p className="text-sm text-gray-500 mb-6">Home &gt; Call</p>

      {/* Content */}
      <div className="bg-gray-50 rounded-lg p-6 flex flex-col justify-between h-[500px] relative">
        {/* Countdown bar */}
        <div className="bg-blue-100 text-blue-800 text-sm text-center py-2 rounded mb-6">
          7 mins 10 seconds until call ends
        </div>

        {/* Top row : Transcribe + Select */}
        <div className="flex justify-between items-center w-full mb-6">
          <span className="text-sm text-gray-600 font-medium">Transcribe</span>

          <div className="relative w-44">
            <select className="appearance-none w-full bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm text-gray-700 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Center Call Info */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <p className="text-lg font-medium mb-2">00:35</p>
          <p className="text-xl font-semibold mb-4">Ongoing Call</p>
          <button
            onClick={() => router.push("/dashbord/call/outofcoinsscreen")}
            className="text-blue-600 animate-pulse"
          >
            <Activity size={60} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Bottom controls */}
      <div className="flex justify-between items-center px-10 mt-6">
        <Volume2 size={28} className="text-gray-600" />
        <button className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700">
          <PhoneOff size={28} />
        </button>
      </div>
    </DashboardLayout>
  );
}
