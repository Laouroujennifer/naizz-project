"use client";
import DashboardLayout from "@/components/DashboardLayout";
import { useRouter } from "next/navigation";

export default function CallEndedScreen() {
    const router = useRouter();
  return (
    <DashboardLayout>
      <h1 className="text-xl font-semibold">Hello Mide,</h1>
      <p className="text-sm text-gray-500 mb-6">Home &gt; Call</p>

   <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center justify-center text-center h-[500px] relative">
        {/* Timer */}
        <p className="text-lg font-medium mb-2">1:00:35</p>

        {/* Title */}
        <p className="text-xl font-semibold mb-6">Call Ended</p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={() => router.push("/dashbord/call/recapscreen")}
            className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
          >
            View Recap
          </button>
          <button className="bg-blue-100 text-blue-700 px-6 py-2 rounded hover:bg-blue-200">
            Call Again
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}