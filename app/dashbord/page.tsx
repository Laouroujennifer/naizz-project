import Link from "next/link"
import DashboardLayout from "@/components/DashboardLayout";

export default function Home() {
  return (
    <DashboardLayout>
      {/* Header */}
      <h1 className="text-2xl font-bold mb-1">Hello Mide,</h1>
      <p className="text-gray-600 mb-6">Welcome to your Naizz dashboard</p>

      {/* Cards Section */}
      {/* Cards Section */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
  {/* Left Big Card */}
  <div className="md:col-span-2 bg-blue-100 rounded-lg p-6 flex justify-between items-center">
    {/* Texte à gauche */}
    <div className="max-w-md">
      <h2 className="font-semibold text-gray-800 mb-2">
        Master conversations in any topic using our agent models
      </h2>
      <p className="text-sm text-gray-700">
        Become knowledgeable, bold, fluent in any language. 
        Best case scenario, master how to ace your interviews.
      </p>
    </div>

    {/* Avatars à droite */}
    <div className="grid grid-cols-2 gap-3">
      <img
        src="/images/avatar 2.png"
        alt="Avatar"
        className="h-14 w-14"
      />
      <img
        src="/images/avatar 3.png"
        alt="Avatar"
        className="h-14 w-14"
      />
      <img
        src="/images/avatar 4.png"
        alt="Avatar"
        className="h-14 w-14"
      />
      <img
        src="/images/avatar 1.png"
        alt="Avatar"
        className="h-14 w-14"
      />
    </div>
  </div>

    <div className="bg-blue-800 text-white rounded-lg p-4 relative overflow-hidden flex flex-col justify-between">
    <div>
      <h2 className="font-semibold text-base mb-1">Upgrade your membership</h2>
      <p className="text-xs opacity-90">
        Upgrade to have a smoother experience while using Naizz
      </p>
    </div>

    <div className="mt-4 flex justify-end">
      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-blue-700 shadow-md transform rotate-45">
        ↑
      </button>
    </div>
  </div>
</div>



      

      {/* Weekly Report */}
      <h2 className="font-semibold text-lg mb-3">Weekly Report</h2>
      <div className="bg-gray-50  rounded-lg p-20 text-center shadow-sm">
        <p className="text-gray-600 mb-6">
          Hi Mide, <br /> You have nothing to show here...
        </p>
       <Link href="/dashbord/call">
      <button className="bg-blue-900 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700">
        Start Session
      </button>
    </Link>
      </div>
    </DashboardLayout>
  );
}
