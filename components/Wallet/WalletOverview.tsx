"use client";
import React from "react";
import Image from "next/image";

type Props = {
  coins: number;
  onUpgrade?: () => void;
};

export default function WalletOverview({ coins, onUpgrade }: Props) {
  return (
    <div className="w-full mb-8">
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Wallet card */}
        <div className="flex-1 relative bg-blue-50 rounded-2xl p-6 overflow-hidden flex flex-col justify-between">
          <p className="text-5xl font-bold">{coins.toLocaleString()}</p>
          
          {/* Texte desc collé en bas */}
          <p className="text-gray-600 mt-auto">Coins left in your wallet</p>

          {/* Image décor */}
          <div className="absolute right-0 bottom-0 opacity-70">
            <Image
              src="/images/Group 32.png"
              alt="Wallet background"
              width={220}
              height={140}
              className="object-contain"
            />
          </div>
        </div>

        {/* Upgrade card */}
        <div className="w-64 bg-blue-900 rounded-2xl text-white p-6 flex flex-col justify-between relative">
          <div>
            <div className="text-xs opacity-80">Free plan</div>
            <div className="font-semibold text-lg mt-1">Upgrade your membership</div>
            <p className="text-xs opacity-90 mt-2">
              Upgrade to have a smoother experience while using Naizz.
            </p>
          </div>

        {/* Bouton cercle blanc, posé en bas à droite sans déborder */}
<div className="absolute bottom-4 right-4">
  <button
    onClick={onUpgrade}
    className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition transform rotate-12"
    aria-label="upgrade"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-blue-900"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  </button>
</div>

        </div>

      </div>
    </div>
  );
}
