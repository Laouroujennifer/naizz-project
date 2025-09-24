import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";

export default function RecapScreen() {
  const [showErrors, setShowErrors] = useState(false);

  return (
    <DashboardLayout>
      <h1 className="text-xl font-semibold">Hello Mide,</h1>
      <p className="text-sm text-gray-500 mb-6">Home &gt; Call</p>

      <div className="bg-gray-50 rounded-lg p-8 relative">
        <p className="text-center text-lg font-medium mb-6">
          Call Ended (1:00:38)
        </p>
        <p className="text-center text-gray-600 mb-8">
          You spoke 50% more fluently this time.
        </p>

        {/* Infos */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="p-4 bg-gray-100 rounded text-right">
            <p className="text-2xl font-semibold">30</p>
            <p className="text-sm text-gray-500">Minutes</p>
            <p className="text-sm text-gray-400">Call Duration</p>
          </div>
          <div className="p-4 bg-gray-100 rounded text-right">
            <p className="text-2xl font-semibold">5</p>
            <p className="text-sm text-gray-500">Vocabulary</p>
            <p className="text-sm text-gray-400">New Words</p>
          </div>
          <div
            className="p-4 bg-gray-100 rounded text-right cursor-pointer hover:bg-gray-200"
            onClick={() => setShowErrors(true)}
          >
            <p className="text-2xl font-semibold">3</p>
            <p className="text-sm text-gray-500">Errors</p>
            <p className="text-sm text-gray-400">Spotted</p>
          </div>
        </div>

        {/* Progress & Suggestions */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="font-medium mb-4">Progress</p>
            {[40, 60, 30, 80, 40].map((val, idx) => (
              <div key={idx} className="mb-3">
                <p className="text-sm text-gray-500">Fluency</p>
                <div className="w-full bg-gray-200 rounded h-3">
                  <div
                    className="bg-blue-600 h-3 rounded"
                    style={{ width: `${val}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <p className="font-medium mb-4">Suggestion</p>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
              <li>Upgrade your account to get a smoother experience.</li>
              <li>
                Try pronouncing your new words and incorporating them in your
                daily conversations.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* MODAL for Errors */}
      {showErrors && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-blue-900 text-white rounded-lg p-6 w-96 relative">
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

            {/* Error Content */}
            <p className="text-sm mb-6">
              2. Correction goes here. Correction goes here. Correction goes
              here.
            </p>

            {/* Navigation Arrows */}
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
