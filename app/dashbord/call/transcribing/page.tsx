"use client"
import DashboardLayout from "@/components/DashboardLayout";
import { Volume2, PhoneOff, Activity } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TranscribingCall() {
      const router = useRouter();
  return (
    <DashboardLayout>
      {/* Header */}
      <h1 className="text-xl font-semibold">Hello Mide,</h1>
      <p className="text-sm text-gray-500 mb-6">Home &gt; Call</p>

      {/* Card */}
      <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center text-center h-[500px] relative">
        
        {/* Top bar (Stop transcribing | Timer | Select) */}
        <div className="flex justify-between items-center w-full mb-6">
          <span className="text-sm text-gray-600">Stop transcribing</span>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
  <div className="flex flex-1 flex-col items-center justify-center">


    {/* Activity icon */}
        <button
            onClick={() => router.push("/dashbord/call/word")}
            className="text-blue-600 animate-pulse"
          >
            <Activity size={60} strokeWidth={2} />
          </button>

    {/* Transcription text */}
    <p className="text-gray-700 max-w-md mt-8">
      Call transcription goes here. Call transcription goes here. Call
      transcription goes here. Call transcription goes here. Call transcription goes here.
      Call transcription goes here. Call transcription goes here. Call transcription goes here.
      Call transcription goes here. Call transcription goes here.
    </p>
  </div>
</div>

      {/* Footer (en dehors du card) */}
      <div className="flex justify-between items-center px-10 mt-6">
        <Volume2 size={28} className="text-gray-600" />
        <button className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700">
          <PhoneOff size={28} />
        </button>
      </div>
    </DashboardLayout>
  );
}
