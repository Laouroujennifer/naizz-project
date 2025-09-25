"use client";

import { useSearchParams, useRouter } from "next/navigation";
import DashboardLayout from "@/components/DashboardLayout";
import { Suspense } from "react";

// ---- Composant enfant qui utilise useSearchParams ----
function InvoiceContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const title = searchParams.get("title") || "";
  const qty = searchParams.get("qty") || "0";
  const price = searchParams.get("price") || "0";

  return (
    <>
      {/* Titre et sous-titre comme dans les autres pages */}
      <h1 className="text-xl font-semibold">Hello Mide,</h1>
      <p className="text-sm text-gray-500 mb-6">Wallet &lt; Purchase coin</p>

      {/* Carte facture centrée */}
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="bg-gray-100 rounded-lg shadow-md p-6 w-full max-w-md">
          <h2 className="text-lg font-semibold text-center">Invoice</h2>
          <p className="text-sm text-center text-gray-500 mb-6">
            You’ll be redirected to the payment platform to complete your payment
          </p>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b border-gray-300 pb-4">
              <span className="text-gray-500">Item</span>
              <span className="font-medium">Coin</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-4">
              <span className="text-gray-500">Description</span>
              <span className="font-medium">{title}</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-4">
              <span className="text-gray-500">Quantity</span>
              <span className="font-medium">{qty}</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-4">
              <span className="text-gray-500">Amount</span>
              <span className="font-medium">
                ₦ {Number(price).toLocaleString()}.00
              </span>
            </div>
          </div>

          <button
            onClick={() => router.push("/dashbord/wallet/redirect")}
            className="mt-6 w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Complete Payment
          </button>
        </div>
      </div>
    </>
  );
}

// ---- Page principale protégée par Suspense ----
export default function InvoicePage() {
  return (
    <DashboardLayout>
      <Suspense fallback={<p className="p-6">Loading invoice...</p>}>
        <InvoiceContent />
      </Suspense>
    </DashboardLayout>
  );
}
