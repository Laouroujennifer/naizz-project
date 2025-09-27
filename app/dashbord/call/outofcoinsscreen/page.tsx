"use client";
import DashboardLayout from "@/components/DashboardLayout";
import { Volume2, PhoneOff, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OutOfCoinsScreen() {
     const router = useRouter();
  return (
    <DashboardLayout>
      {/* Header */}
      <h1 className="text-xl font-semibold">Hello Mide,</h1>
      <p className="text-sm text-gray-500 mb-6">Home &gt; Call</p>

      {/* Content */}
      <div className="bg-gray-50 rounded-lg p-6 h-[400px] relative flex flex-col justify-between">
        {/* Top row : Transcribe + Select */}
        <div className="flex justify-between items-center w-full">
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

        {/* Centered Popup */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-gray-100 rounded-lg shadow-md p-6 w-[320px] text-center relative">
            {/* Close button */}
            <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
              <X size={16} />
            </button>

            <h2 className="text-lg font-semibold mb-2">Out of coins!</h2>
            <p className="text-sm text-gray-600 mb-4">
              You&apos;re out of coins for your conversation. Please purchase a
              coin to continue your conversation.
            </p>

            <button onClick={() => router.push("/dashbord/call/callendedscreen")}
             className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded">
              Purchase Coin
            </button>
          </div>
        </div>

       
      </div>
       {/* Bottom controls */}
        <div className="flex justify-between items-center px-10">
          <Volume2 size={28} className="text-gray-600" />
          <button className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700">
            <PhoneOff size={28} />
          </button>
        </div>
    </DashboardLayout>
  );
}
