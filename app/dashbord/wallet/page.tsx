"use client";
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import WalletOverview from "@/components/Wallet/WalletOverview";
import CoinPackCard from "@/components/Wallet/CoinPackCard";
import { useRouter } from "next/navigation";

type CoinPack = {
  title: string;
  description: string;
  qty: number;
  price: number;
};

export default function WalletPage() {
  const router = useRouter();

  const coinPacks: CoinPack[] = [
    { title: "Pack of 5", description: "This contains 200 coins.", qty: 200, price: 30000 },
    { title: "Pack of 8", description: "This contains 500 coins.", qty: 500, price: 50000 },
    { title: "Pack of 10", description: "This contains 1000 coins.", qty: 1000, price: 100000 },
  ];

  function handleBuy(pack: CoinPack) {
    router.push(
      `/dashbord/wallet/invoice?title=${encodeURIComponent(pack.title)}&qty=${pack.qty}&price=${pack.price}`
    );
  }

  return (
    <DashboardLayout>
      <h1 className="text-xl font-semibold">Hello Mide,</h1>
      <p className="text-sm text-gray-500 mb-6">Wallet</p>

      <WalletOverview coins={10000} onUpgrade={() => router.push("/dashboard/wallet/plan")} />

      <h2 className="text-base font-medium mb-4">Purchase a coin pack</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {coinPacks.map((p, i) => (
          <CoinPackCard
            key={i}
            title={p.title}
            description={p.description}
            qty={p.qty}
            priceLabel={`₦ ${p.price.toLocaleString()}.00`}
            onBuy={() => handleBuy(p)}
          />
        ))}
      </div>
    </DashboardLayout>
  );
}
