"use client";
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Image from "next/image";

export default function TransactionsPage() {
  const transactions = [
    { id: 1, description: "Pack of coins", quantity: 200, amount: "₦ 30,000.00", status: "Successful" },
    { id: 2, description: "Pack of coins", quantity: 200, amount: "₦ 30,000.00", status: "Successful" },
    { id: 3, description: "Pack of coins", quantity: 200, amount: "₦ 30,000.00", status: "Successful" },
    { id: 4, description: "Pack of coins", quantity: 200, amount: "₦ 30,000.00", status: "Successful" },
    { id: 5, description: "Pack of coins", quantity: 200, amount: "₦ 30,000.00", status: "Successful" },
  ];

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-xl font-semibold">Hello Mide,</h1>
          <p className="text-sm text-gray-500 mb-6">Transactions</p>
        </div>

        {/* Wallet + Top up cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Wallet card */}
          <div className="relative bg-blue-50 rounded-2xl p-6 flex flex-col justify-center md:col-span-2 overflow-hidden">
            <p className="text-5xl font-bold">10,000</p>
            <p className="text-gray-600">Coins left in your wallet</p>

            {/* Image décor */}
            <div className="absolute right-0 bottom-0 opacity-70">
              <Image
                src="/images/Group 32.png" // place ton image dans /public/images/
                alt="Wallet background"
                width={220}
                height={140}
                className="object-contain"
              />
            </div>
          </div>

          {/* Top up card */}
          <div className="bg-blue-900 rounded-2xl p-6 text-white flex flex-col justify-between">
            <p className="text-lg font-semibold">Top up your coin wallet with ease</p>
            <p className="text-sm opacity-90">
              Add more coins to your wallet to have a smoother experience while using Naizz
            </p>
     <div className="mt-4 flex justify-end">
      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-blue-700 shadow-md transform rotate-45">
        ↑
      </button>
    </div>
          </div>
        </div>

        {/* Transaction table */}
        <div className="bg-white rounded-md shadow p-4">
          <div className="text-sm text-gray-700 font-semibold mb-4">
            Transaction history
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-sm text-gray-500 border-b border-gray-200">
                <th className="py-3 w-12">S/N</th>
                <th className="py-3">Description</th>
                <th className="py-3">Quantity</th>
                <th className="py-3">Amount</th>
                <th className="py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t, index) => (
                <tr
                  key={t.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-4">{index + 1}.</td>
                  <td className="py-4">{t.description}</td>
                  <td className="py-4">{t.quantity}</td>
                  <td className="py-4">{t.amount}</td>
                  <td className="py-4">
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
