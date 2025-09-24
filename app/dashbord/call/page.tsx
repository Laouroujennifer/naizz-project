// pages/dashboard/call.jsx
"use client"
import DashboardLayout from "@/components/DashboardLayout";
import { Phone } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CallPage() {
  const router = useRouter(); // ✅ il faut initialiser le router

  return (
    <DashboardLayout>
      {/* Header */}
      <h1 className="text-xl font-semibold">Hello Mide,</h1>
      <p className="text-sm text-gray-500 mb-6">Home &lt; Call</p>

      {/* Card */}
      <div className="bg-gray-50 rounded-lg p-10 flex flex-col justify-between text-center h-[500px]">
        {/* Texte en haut */}
        <div>
          <p className="text-gray-600 text-xl mb-6">
            Click the{" "}
            <span className="text-blue-600 font-medium">Call button</span> or{" "}
            <br />
            <span className="text-blue-600 font-medium">Send a message</span> to
            start a <br /> conversation
          </p>
        </div>

        {/* Call Icon centré */}
        <div className="flex justify-center">
          <button
            onClick={() => router.push("/dashbord/call/ongoing")} // ✅ utilise le router pour naviguer
            className="bg-blue-900 text-white p-6 rounded-full flex items-center justify-center hover:bg-blue-800"
          >
            <Phone size={28} />
          </button>
        </div>

        {/* Input + Button en bas */}
        <div className="flex w-full relative space-x-3">
          <input
            type="text"
            placeholder="Enter your message here"
            className="flex-1 border border-gray-300 rounded-l-md px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 -ml-2"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-r-md text-sm font-medium hover:bg-blue-700">
            Send Message
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
