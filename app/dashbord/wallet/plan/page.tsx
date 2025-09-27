"use client";
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import WalletOverview from "@/components/Wallet/WalletOverview";
import { useRouter } from "next/navigation";

// Définition du type Plan
interface Plan {
  title: string;
  price: number;
  style: string;
  description: string;
  benefits: string[];
}

export default function PlansPage() {
  const router = useRouter();

  const plans: Plan[] = [
    {
      title: "Freemium plan",
      price: 0,
      style: "bg-blue-50 text-gray-800 border border-gray-200",
      description: "This plan is open to everyone for $0 fee.",
      benefits: ["Free 2 mins coins for conversation", "Free 2 mins coins for conversation"],
    },
    {
      title: "Premium plan",
      price: 50000,
      style: "bg-slate-900 text-white",
      description: "This plan is open to everyone for ₦50,000 fee.",
      benefits: [
        "Free 2 mins coins for conversation",
        "Free 2 mins coins for conversation",
        "Free 2 mins coins for conversation",
        "Free 2 mins coins for conversation",
      ],
    },
    {
      title: "Goldium plan",
      price: 70000,
      style: "bg-blue-700 text-white",
      description: "This plan is open to everyone for ₦70,000 fee.",
      benefits: [
        "Free 2 mins coins for conversation",
        "Free 2 mins coins for conversation",
        "Free 2 mins coins for conversation",
        "Free 2 mins coins for conversation",
      ],
    },
  ];

  // Fonction typée correctement
  function goToInvoice(plan: Plan) {
    router.push(
      `/dashbord/wallet/invoice?title=${encodeURIComponent(
        plan.title
      )}&qty=30 days&price=${plan.price}`
    );
  }

  return (
    <DashboardLayout>
      {/* Header */}
      <h1 className="text-xl font-semibold">Hello Mide,</h1>
      <p className="text-sm text-gray-500 mb-6">Wallet &lt; Plan</p>

      {/* Wallet résumé */}
      <WalletOverview coins={10000} onUpgrade={() => goToInvoice(plans[1])} />

      {/* Liste des plans */}
      <h3 className="mb-4 text-base font-medium">Available plans</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((p, i) => (
          <div
            key={i}
            className={`rounded-lg p-6 shadow-sm flex flex-col justify-between ${p.style}`}
          >
            <div>
              <div className="font-semibold text-lg mb-2">{p.title}</div>
              <p className="text-sm mb-4">{p.description}</p>
              <hr className="border-gray-300 mb-4" />
              <ul className="text-sm space-y-1">
                {p.benefits.map((b, j) => (
                  <li key={j}>+ {b}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <button
                onClick={() => goToInvoice(p)}
                className={`w-full py-2 px-4 rounded-md font-medium ${
                  p.price === 0
                    ? "bg-sky-700 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                {p.price === 0 ? "Current Plan" : "Choose Plan"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
