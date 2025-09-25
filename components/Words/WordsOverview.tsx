"use client";
import React from "react";

type Props = {
  highest: number;
  onAction?: () => void;
};

export default function WordsOverview({ highest, onAction }: Props) {
  return (
    <div className="flex flex-col md:flex-row md:items-stretch gap-6 mb-6">
      {/* Bloc de gauche */}
      <div className="flex-1 bg-blue-50 rounded-lg p-6 flex items-center justify-between">
        <div className="flex items-center justify-between w-full">
          <div>
            <div className="text-6xl font-extrabold">{highest}</div>
            <div className="text-sm text-gray-600 mt-1">
              Highest saved words in a call
            </div>
          </div>

          {/* Image à droite */}
          <div className="hidden md:block w-30 h-30">
            <img
              src="/images/ic.png"
              alt="Bookmark Added"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bloc de droite */}
      <div className="w-64 bg-blue-900 rounded-2xl text-white p-6 flex flex-col justify-between relative">
        <div>
          
      <div className="font-semibold text-lg mt-1">You yave saved 60% new words than others users </div>
          <p className="text-xs opacity-90 mt-2">
            Congratulations you doing so well.
          </p>
        </div>

     
      </div>
    </div>
  );
}
