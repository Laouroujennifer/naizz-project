"use client";
import React from "react";

type Props = {
  highest: number;
  onAction?: () => void;
};

export default function WordsOverview({ highest, onAction }: Props) {
  return (
    <div className="flex flex-col md:flex-row md:items-stretch gap-4 md:gap-6 mb-6">
      {/* Bloc de gauche */}
      <div className="flex-1 bg-blue-50 rounded-lg p-4 sm:p-6 flex items-center justify-between">
        <div className="flex items-center justify-between w-full">
          <div>
            <div className="text-4xl sm:text-5xl text-black md:text-6xl font-extrabold">
              {highest}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">
              Highest saved words in a call
            </div>
          </div>

          {/* Image à droite */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28">
            <img
              src="/images/ic.png"
              alt="Bookmark Added"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bloc de droite */}
      <div className="flex-1 md:flex-none md:w-72 bg-blue-900 rounded-2xl text-white p-4 sm:p-6 flex flex-col justify-between">
        <div>
          <div className="font-semibold text-sm sm:text-base md:text-lg leading-snug">
            You have saved{" "}
            <span className="font-bold text-blue-200">60%</span> more new words
            than other users
          </div>
          <p className="text-xs sm:text-sm opacity-90 mt-2">
            Congratulations, you are doing so well!
          </p>
        </div>
      </div>
    </div>
  );
}
