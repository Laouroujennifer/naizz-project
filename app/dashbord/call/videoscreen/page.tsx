"use client"
import DashboardLayout from "@/components/DashboardLayout";
import { useRouter } from "next/navigation";

export default function VideoScreen() {
  const router = useRouter();

  return (
    <DashboardLayout>
      <h1 className="text-xl font-semibold">Hello Mide,</h1>
      <p className="text-sm text-gray-500 mb-4">Home &gt; Call</p>

      <div className="bg-black rounded-md overflow-hidden relative">
        {/* Bouton fermer */}
        <button
          onClick={() => router.push("/dashbord/call/lowcoinalertscreen")}
          className="absolute top-4 right-4 text-white text-2xl font-bold z-10"
        >
          ✕
        </button>

        {/* Vidéo mock */}
        <div className="flex items-center justify-center h-[500px] bg-gray-900 text-white">
          <img
            src="/images/screen.png"
            alt="Video"
            className="object-contain max-h-full"
          />
        </div>

        {/* Pub Upgrade */}
      {/* Pub Upgrade en bas centré dans l’image */}
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 
  bg-white px-6 py-3 rounded-md shadow flex items-center justify-between 
  space-x-4 w-[90%] max-w-lg">
  <p className="text-sm text-gray-600 flex-1">
    Upgrade your account to get a better experience with Naizz
  </p>
  <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 whitespace-nowrap">
    Upgrade my account
  </button>
</div>


        {/* Progress bar mock */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700">
          <div className="h-1 bg-blue-600 w-1/3"></div>
        </div>

        <div className="absolute bottom-2 left-4 text-xs text-white">0:30</div>
        <div className="absolute bottom-2 right-4 text-xs text-white">1:30</div>
      </div>
    </DashboardLayout>
  );
}
