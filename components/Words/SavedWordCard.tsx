"use client";
import React from "react";

type Props = {
  word: string;
  lang?: string;
  level?: string;
  definition?: string;
  usage?: string;
  savedOn?: string;
};

export default function SavedWordCard({
  word,
  lang = "French",
  level = "Beginner",
  definition = "",
  usage = "",
  savedOn,
}: Props) {
  return (
    <div className="bg-gray-100 rounded-md shadow-sm p-3 sm:p-4 lg:p-5 h-full flex flex-col justify-between">
      {/* Titre et menu langue */}
      <div className="flex justify-between items-start border-b border-gray-200 pb-2">
        <div className="min-w-0">
          <div className="font-semibold text-base sm:text-lg md:text-xl break-words">
            {word}
          </div>
          <div className="text-xs sm:text-sm text-gray-500">
            {lang} · {level}
          </div>
        </div>
        <div className="text-xs sm:text-sm text-gray-500 cursor-pointer">
          English ▾
        </div>
      </div>

      {/* Définition */}
      <div className="mt-3 text-sm sm:text-base text-gray-700">
        <span className="italic">{lang}</span>
        <div className="text-xs sm:text-sm">Adj (feminine)</div>
        <div>
          means <span className="font-semibold">“{definition}”</span>
        </div>
        <div className="mt-2 text-xs sm:text-sm text-gray-600">
          usage <span className="italic">“{usage}”</span>
        </div>
      </div>

      {/* Date */}
      <div className="mt-4 text-xs sm:text-sm text-gray-400">
        Saved on: {savedOn ?? "10/10/25"}
      </div>
    </div>
  );
}
