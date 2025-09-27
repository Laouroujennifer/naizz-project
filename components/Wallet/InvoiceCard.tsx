"use client";
import React from "react";

type Props = {
  itemLabel: string;
  description: string;
  quantityLabel: string;
  amountLabel: string;
  onComplete?: () => void;
};

export default function InvoiceCard({ itemLabel, description, quantityLabel, amountLabel, onComplete }: Props) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md shadow p-6">
      <h3 className="text-center font-semibold text-lg mb-4">Invoice</h3>
      <p className="text-center text-sm text-gray-500 mb-6">You&apos;ll be redirected to the payment platform to complete your payment</p>

      <div className="space-y-4">
        <div className="flex justify-between border-b pb-2">
          <div className="text-sm text-gray-600">Item</div>
          <div className="text-sm font-medium">{itemLabel}</div>
        </div>

        <div className="flex justify-between border-b pb-2">
          <div className="text-sm text-gray-600">Description</div>
          <div className="text-sm font-medium">{description}</div>
        </div>

        <div className="flex justify-between border-b pb-2">
          <div className="text-sm text-gray-600">Quantity</div>
          <div className="text-sm font-medium">{quantityLabel}</div>
        </div>

        <div className="flex justify-between border-b pb-4">
          <div className="text-sm text-gray-600">Amount</div>
          <div className="text-sm font-medium">{amountLabel}</div>
        </div>

        <button onClick={onComplete} className="w-full py-3 bg-blue-700 text-white rounded-md">
          Complete Payment
        </button>
      </div>
    </div>
  );
}
