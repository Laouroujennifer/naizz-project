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
      <div className="pt-16 lg:pt-0 px-4 sm:px-6 lg:px-6 space-y-4 sm:space-y-5 md:space-y-6">
        {/* Header */}
        <div className="mt-4 sm:mt-0">
          <h1 className="text-xl text-black sm:text-2xl font-semibold">Hello Mide,</h1>
          <p className="text-sm text-gray-500 mb-4 sm:mb-6">Transactions</p>
        </div>

        {/* Wallet + Top up cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {/* Wallet card */}
          <div className="relative bg-blue-50 rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col justify-center lg:col-span-2 overflow-hidden min-h-[140px] sm:min-h-[160px] md:min-h-[180px]">
            <p className="text-3xl text-black sm:text-4xl md:text-5xl font-bold">10,000</p>
            <p className="text-gray-600 text-sm sm:text-base">Coins left in your wallet</p>

            {/* Image décor */}
            <div className="absolute right-0 bottom-0 opacity-70">
              <Image
                src="/images/Group 32.png"
                alt="Wallet background"
                width={160}
                height={100}
                className="object-contain w-[120px] h-[80px] sm:w-[160px] sm:h-[100px] md:w-[180px] md:h-[120px]"
              />
            </div>
          </div>

          {/* Top up card */}
          <div className="bg-blue-900 rounded-2xl p-4 sm:p-5 md:p-6 text-white flex flex-col justify-between min-h-[140px] sm:min-h-[160px] md:min-h-[180px]">
            <div>
              <p className="text-base sm:text-lg font-semibold mb-2">Top up your coin wallet with ease</p>
              <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                Add more coins to your wallet to have a smoother experience while using Naizz
              </p>
            </div>
            <div className="mt-3 sm:mt-4 flex justify-end">
              <button className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-white text-blue-700 shadow-md transform rotate-45 hover:scale-105 transition-transform text-xs sm:text-sm">
                ↑
              </button>
            </div>
          </div>
        </div>

        {/* Transaction table */}
        <div className="bg-white rounded-md shadow p-3 sm:p-4 md:p-5 mb-6">
          <div className="text-sm sm:text-base text-gray-700 font-semibold mb-3 sm:mb-4">
            Transaction history
          </div>
          
          {/* Table pour desktop */}
          <div className="hidden lg:block">
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
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 text-sm">{index + 1}.</td>
                    <td className="py-4 text-sm">{t.description}</td>
                    <td className="py-4 text-sm">{t.quantity}</td>
                    <td className="py-4 text-sm font-medium">{t.amount}</td>
                    <td className="py-4">
                      <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                        {t.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards pour mobile */}
          <div className="lg:hidden space-y-3">
            {transactions.map((t, index) => (
              <div key={t.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-medium text-gray-500">#{index + 1}</span>
                  <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                    {t.status}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Description:</span>
                    <span className="text-sm font-medium">{t.description}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Quantity:</span>
                    <span className="text-sm font-medium">{t.quantity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Amount:</span>
                    <span className="text-sm font-medium">{t.amount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}