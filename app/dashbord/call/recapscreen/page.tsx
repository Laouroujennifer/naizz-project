"use client";
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";

export default function RecapScreen() {
  const [showErrors, setShowErrors] = useState(false);

  return (
    <DashboardLayout>
      <h1 className="text-xl font-semibold">Hello Mide,</h1>
      <p className="text-sm text-gray-500 mb-6">Home &gt; Call</p>

      <div className="bg-gray-50 rounded-lg p-8 relative">
        {/* Header */}
        <p className="text-center text-lg font-medium mb-6">
          Call Ended (1:00:38)
        </p>
        <p className="text-center text-gray-600 mb-8">
          You spoke 50% more fluently this time.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="p-4 bg-gray-100 rounded shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Call Duration</p>
            <p className="text-2xl font-semibold">30</p>
            <p className="text-sm text-gray-500">Minutes</p>
          </div>
          <div className="p-4 bg-gray-100 rounded shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Vocabulary</p>
            <p className="text-2xl font-semibold">5</p>
            <p className="text-sm text-gray-500">New Words</p>
          </div>
          <div
            className="p-4 bg-gray-100 rounded shadow-sm cursor-pointer hover:bg-gray-200"
            onClick={() => setShowErrors(true)}
          >
            <p className="text-sm text-gray-500 mb-1">Errors</p>
            <p className="text-2xl font-semibold">3</p>
            <p className="text-sm text-gray-500">Spotted</p>
          </div>
        </div>

        {/* Progress & Suggestions */}
        <div className="grid grid-cols-2 gap-8">
          {/* Progress */}
          <div className="p-6 bg-gray-100 rounded-lg">
            <p className="font-medium mb-4">Progress</p>
            {[
              { label: "Fluency", value: 40 },
              { label: "Pronunciation", value: 60 },
              { label: "Grammar", value: 30 },
              { label: "Vocabulary", value: 80 },
              { label: "Confidence", value: 40 },
            ].map((item, idx) => (
              <div key={idx} className="mb-4">
                <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                <div className="w-full bg-gray-200 rounded h-3">
                  <div
                    className="bg-blue-600 h-3 rounded"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Suggestions */}
          <div className="p-6 bg-gray-100 rounded-lg">
            <p className="font-medium mb-4">Suggestions</p>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
              <li>Upgrade your account to get a smoother experience.</li>
              <li>
                Try pronouncing your new words and incorporating them into your
                daily conversations.
              </li>
              <li>
                Review the errors spotted and focus on improving those areas.
              </li>
            </ul>
          </div>
        </div>
      </div>

     {showErrors && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    {/* Fond transparent pour voir le recap */}
     


    {/* Modal */}
    <div className="relative bg-blue-900 text-white rounded-lg p-6 w-96 z-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <p className="font-semibold">Errors spotted</p>
        <div className="flex items-center space-x-2">
          <span className="text-sm">English</span>
          <button
            onClick={() => setShowErrors(false)}
            className="text-white"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Content */}
      <p className="text-sm mb-6">
        1. Correction goes here. Correction goes here.
        <br />
        2. Correction goes here. Correction goes here.
      </p>

      {/* Nav arrows */}
      <div className="flex justify-between">
        <button className="text-white">◀</button>
        <button className="text-white">▶</button>
      </div>
    </div>
  </div>
)}

    
    </DashboardLayout>
  );
}
