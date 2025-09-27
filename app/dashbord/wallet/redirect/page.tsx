"use client";
import React, { useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { useRouter } from "next/navigation";

export default function Redirecting() {
  const router = useRouter();

  useEffect(() => {
    // simulate a short wait then redirect to transaction history
    const t = setTimeout(() => {
      router.push("/dashbord/transactions");
    }, 1800);
    return () => clearTimeout(t);
  }, [router]);

  return (
    <DashboardLayout>
      <div className="min-h-[420px] flex flex-col items-center justify-center">
        <div className="flex space-x-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-blue-700" />
          <div className="w-3 h-3 rounded-full bg-blue-700" />
          <div className="w-3 h-3 rounded-full bg-blue-700" />
        </div>
        <div className="text-lg font-medium">You are being redirected</div>
      </div>
    </DashboardLayout>
  );
}
