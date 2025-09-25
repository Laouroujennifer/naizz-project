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

export default function SavedWordCard({ word, lang="English", level="Beginner", definition="", usage="", savedOn }: Props) {
  return (
    <div className="bg-white rounded-md shadow-sm p-4">
      <div className="flex justify-between items-start">
        <div>
          <div className="font-semibold text-lg">{word}</div>
          <div className="text-xs text-gray-500">{lang} · {level}</div>
        </div>
        <div className="text-xs text-gray-400">English ▾</div>
      </div>

      <div className="mt-3 text-sm text-gray-700">
        <div className="italic">{definition}</div>
        <div className="mt-2 text-xs text-gray-500">usage * {usage}</div>
      </div>

      <div className="mt-4 text-xs text-gray-400">Saved on: {savedOn ?? "10/10/25"}</div>
    </div>
  );
}
