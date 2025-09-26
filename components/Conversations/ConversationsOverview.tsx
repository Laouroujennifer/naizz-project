"use client";
import React from "react";
import { FaUser } from "react-icons/fa";

type Props = {
  total: number;
};

export default function ConversationsOverview({ total }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {/* Bloc gauche (plus grand : 2/3) */}
      <div className="md:col-span-2 flex items-center justify-between bg-blue-100 p-6 rounded-md h-32">
        <div>
          {/* Taille augmentée */}
          <h2 className="text-6xl font-bold">{total}</h2>
          <p className="text-sm text-gray-700">Total conversations had</p>
        </div>
        <FaUser className="text-blue-700 text-8xl" />
      </div>

      {/* Bloc droit (plus petit : 1/3) */}
      <div className="bg-blue-900 text-white p-6 rounded-md flex flex-col justify-center h-32">
        <h3 className="font-semibold">
          Quickly learn about a topic in a language within seconds
        </h3>
        <p className="text-sm text-blue-100 mt-1">
          Our agent adapts easily and is perfect for you
        </p>
      </div>
    </div>
  );
}
