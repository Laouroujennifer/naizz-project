"use client";
import DashboardLayout from "@/components/DashboardLayout";
import { Volume2, PhoneOff } from "lucide-react";
import { useRouter } from "next/navigation";

export default function WordPopup() {
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
          <span className="text-sm text-gray-600">00:35</span>
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

        {/* Popup word centré */}
        <div className="flex flex-1 items-center justify-center w-full">
          <div className="bg-blue-900 text-white p-6 rounded-md w-80 text-left relative shadow-lg">
              <button 
            onClick={() => router.push("/dashbord/call/videoscreen")} 
            className="absolute top-2 right-2 text-white"
          >
            ✕
          </button>
            <p className="font-semibold text-lg mb-1">“Belle”</p>
            <p className="italic">French</p>
            <p className="mb-1">Adj (feminine)</p>
            <p className="mb-1">means “Beautiful”</p>
            <p className="italic">usage: “Je suis belle”</p>
          </div>
        </div>
      </div>

      {/* Footer en dehors du card */}
      <div className="flex justify-between items-center px-10 mt-6">
        <Volume2 size={28} className="text-gray-600" />
        <button className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700">
          <PhoneOff size={28} />
        </button>
      </div>
    </DashboardLayout>
  );
}
