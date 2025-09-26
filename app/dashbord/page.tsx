"use client"
import Link from "next/link"
import DashboardLayout from "@/components/DashboardLayout";

export default function Home() {
  return (
    <DashboardLayout>
       <div className="mt-8 sm:mt-8">
      {/* Header */}
      <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8">
        <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-bold mb-1 sm:mb-2">Hello Mide,</h1>
        <p className="text-gray-600 text-xs sm:text-sm md:text-sm lg:text-base xl:text-base">Welcome to your Naizz dashboard</p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-6 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
        {/* Left Big Card */}
        <div className="xs:col-span-2 lg:col-span-2 bg-blue-100 rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 xl:p-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {/* Texte à gauche */}
          <div className="max-w-full sm:max-w-md text-center sm:text-left order-2 sm:order-1">
            <h2 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base lg:text-base xl:text-base leading-tight">
              Master conversations in any topic using our agent models
            </h2>
            <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-gray-700 leading-relaxed">
              Become knowledgeable, bold, fluent in any language. 
              Best case scenario, master how to ace your interviews.
            </p>
          </div>

          {/* Avatars à droite */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 order-1 sm:order-2 mb-2 sm:mb-0">
            <img
              src="/images/avatar 2.png"
              alt="Avatar"
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-14 xl:w-14"
            />
            <img
              src="/images/avatar 3.png"
              alt="Avatar"
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-14 xl:w-14"
            />
            <img
              src="/images/avatar 4.png"
              alt="Avatar"
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-14 xl:w-14"
            />
            <img
              src="/images/avatar 1.png"
              alt="Avatar"
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-14 xl:w-14"
            />
          </div>
        </div>

        {/* Right Small Card */}
        <div className="bg-blue-800 text-white rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 xl:p-6 relative overflow-hidden flex flex-col justify-between min-h-[120px] sm:min-h-[130px] md:min-h-[140px] lg:min-h-[150px] xl:min-h-[160px]">
          <div>
            <h2 className="font-semibold text-xs sm:text-sm md:text-base lg:text-base xl:text-base mb-1 sm:mb-2 leading-tight">
              Upgrade your membership
            </h2>
            <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm opacity-90 leading-relaxed">
              Upgrade to have a smoother experience while using Naizz
            </p>
          </div>

          <div className="mt-2 sm:mt-3 md:mt-4 lg:mt-4 xl:mt-4 flex justify-end">
            <button className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-8 xl:h-8 flex items-center justify-center rounded-full bg-white text-blue-700 shadow-md transform rotate-45 text-xs sm:text-xs md:text-sm lg:text-base xl:text-base hover:scale-105 transition-transform">
              ↑
            </button>
          </div>
        </div>
      </div>

      {/* Weekly Report */}
      <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8">
        <h2 className="font-semibold text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl mb-2 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-4">Weekly Report</h2>
        <div className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 2xl:p-20 text-center shadow-sm">
          <p className="text-gray-600 mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-6 text-xs sm:text-sm md:text-base lg:text-base xl:text-base leading-relaxed">
            Hi Mide, <br /> You have nothing to show here...
          </p>
          <Link href="/dashbord/call">
            <button className="bg-blue-900 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 xl:px-6 xl:py-3 rounded-md font-semibold hover:bg-blue-700 text-xs sm:text-sm md:text-base lg:text-base xl:text-base transition-colors hover:scale-105 transform">
              Start Session
            </button>
          </Link>
        </div>
      </div>
      </div>
    </DashboardLayout>
  );
}