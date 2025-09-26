// pages/dashboard/call.jsx
"use client"
import DashboardLayout from "@/components/DashboardLayout";
import { Phone } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CallPage() {
  const router = useRouter();

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mt-8 sm:mt-8">
      <h1 className="text-xl sm:text-2xl font-semibold">Hello Mide,</h1>
      <p className="text-sm sm:text-base text-gray-500 mb-6">Home &lt; Call</p>

      {/* Card */}
      <div className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-10 flex flex-col justify-between text-center min-h-[400px] sm:min-h-[500px] shadow-sm">
        {/* Texte en haut */}
        <div>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
            Click the{" "}
            <span className="text-blue-600 font-medium">Call button</span> or{" "}
            <br className="hidden sm:block" />
            <span className="text-blue-600 font-medium">Send a message</span> to
            start a <br className="hidden sm:block" /> conversation
          </p>
        </div>

        {/* Call Icon centré */}
        <div className="flex justify-center">
          <button
            onClick={() => router.push("/dashbord/call/ongoing")}
            className="bg-blue-900 text-white p-5 sm:p-6 rounded-full flex items-center justify-center hover:bg-blue-800 transition"
          >
            <Phone size={24} className="sm:w-7 sm:h-7" />
          </button>
        </div>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row w-full gap-3 sm:gap-0 relative">
          <input
            type="text"
            placeholder="Enter your message here"
            className="flex-1 border border-gray-300 rounded-md sm:rounded-l-md px-4 sm:px-6 py-3 sm:py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-5 sm:px-6 py-3 sm:py-4 rounded-md sm:rounded-r-md text-sm sm:text-base font-medium hover:bg-blue-700 transition">
            Send Message
          </button>
        </div>
      </div>
      </div>
    </DashboardLayout>
  );
}
