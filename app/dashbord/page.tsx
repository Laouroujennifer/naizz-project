"use client"
import Link from "next/link"
import DashboardLayout from "@/components/DashboardLayout"

export default function Home() {
  return (
    <DashboardLayout>
      {/* Conteneur principal */}
      <div className="pt-16 lg:pt-0 px-4 sm:px-6 lg:px-8 container mx-auto max-w-7xl">
        
        {/* Header */}
        <header className="mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
            Hello Mide,
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-1">
            Welcome to your Naizz dashboard
          </p>
        </header>

        {/* Cards Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-10">
          
          {/* Left Big Card */}
          <div className="sm:col-span-2 lg:col-span-2 bg-blue-100 rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            {/* Texte */}
            <div className="flex-1 text-center sm:text-left order-2 sm:order-1">
              <h2 className="font-semibold text-gray-800 text-base sm:text-lg md:text-xl mb-2">
                Master conversations in any topic using our agent models
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Become knowledgeable, bold, fluent in any language. 
                Best case scenario, master how to ace your interviews.
              </p>
            </div>

            {/* Avatars */}
            <div className="grid grid-cols-2 gap-3 order-1 sm:order-2">
              {["avatar 2.png", "avatar 3.png", "avatar 4.png", "avatar 1.png"].map((img, i) => (
                <img
                  key={i}
                  src={`/images/${img}`}
                  alt="Avatar"
                  className="h-12 w-2 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full object-cover shadow"
                />
              ))}
            </div>
          </div>

          {/* Right Small Card */}
          <div className="bg-blue-800 text-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden">
            <div>
              <h2 className="font-semibold text-base sm:text-lg md:text-xl mb-2">
                Upgrade your membership
              </h2>
              <p className="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">
                Upgrade to have a smoother experience while using Naizz
              </p>
            </div>
            <div className="mt-5 flex justify-end">
              <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white text-blue-700 shadow-md transform rotate-45 text-lg hover:scale-110 transition">
                ↑
              </button>
            </div>
          </div>
        </section>

        {/* Weekly Report */}
        <section className="mb-12">
          <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl mb-4">
            Weekly Report
          </h2>
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-12 text-center shadow-sm">
            <p className="text-gray-600 mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
              Hi Mide, <br /> You have nothing to show here...
            </p>
            <Link href="/dashbord/call">
              <button className="bg-blue-900 text-white px-6 py-2 sm:px-7 sm:py-3 md:px-9 md:py-4 rounded-lg font-semibold hover:bg-blue-700 text-sm sm:text-base md:text-lg transition transform hover:scale-105">
                Start Session
              </button>
            </Link>
          </div>
        </section>
      </div>
    </DashboardLayout>
  )
}
