"use client";
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import WordsOverview from "@/components/Words/WordsOverview";
import SavedWordCard from "@/components/Words/SavedWordCard";

export default function WordsPage() {
  const saved = [
    { word: "Belle", definition: "Beautiful", usage: "Je suis belle" },
    { word: "Bonjour", definition: "Hello", usage: "Bonjour!" },
    { word: "Merci", definition: "Thanks", usage: "Merci beaucoup" },
  ];

  return (
<DashboardLayout>
  <div className="mt-8 sm:mt-8">
    {/* Header */}
    <h1 className="text-xl md:text-2xl text-black font-semibold">Hello Mide,</h1>
    <p className="text-sm text-gray-500 mb-6">Words</p>

    {/* Overview */}
    <WordsOverview highest={5} onAction={() => {}} />

    {/* Saved words */}
    <h3 className="mb-3 font-medium text-black text-base md:text-lg">My saved words</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {saved.map((s, i) => (
        <SavedWordCard key={i} {...s} savedOn="10/10/25" />
      ))}
    </div>
  </div>
</DashboardLayout>

  );
}
