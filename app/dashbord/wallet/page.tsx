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
      <div className="pt-16 lg:pt-0 px-4 sm:px-6 lg:px-6">
        {/* Header */}
        <div className="mt-4 sm:mt-0 mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl text-black font-semibold">Hello Mide,</h1>
          <p className="text-sm text-gray-500">Wallet</p>
        </div>

        {/* Wallet Overview */}
        <div className="mb-6 sm:mb-8 text-black">
          <WalletOverview coins={10000} onUpgrade={() => router.push("/dashboard/wallet/plan")} />
        </div>

        {/* Coin Packs Section */}
        <div>
          <h2 className="text-base sm:text-lg font-medium mb-4 text-black sm:mb-6">Purchase a coin pack</h2>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
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
        </div>
      </div>
    </DashboardLayout>
  );
}