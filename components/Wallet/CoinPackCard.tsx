"use client";
import React from "react";

type Props = {
  title: string;
  description: string;
  qty: number;
  priceLabel: string;
  onBuy: () => void;
};

export default function CoinPackCard({ title, description, qty, priceLabel, onBuy }: Props) {
  return (
    <div className="bg-gray-100 rounded-xl border border-gray-200 flex flex-col justify-between p-6 shadow-sm">
      {/* Infos du pack */}
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>

        {/* Trait fin */}
        <div className="border-t border-gray-200 my-4"></div>

        <div className="font-medium text-gray-800">{priceLabel}</div>
      </div>

      {/* Bouton en bas */}
      <div className="mt-6">
        <button
          onClick={onBuy}
          className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Buy coin
        </button>
      </div>
    </div>
  );
}
