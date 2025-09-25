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
      <h1 className="text-xl font-semibold">Hello Mide,</h1>
      <p className="text-sm text-gray-500 mb-6">Words</p>

      <WordsOverview highest={5} onAction={() => {}} />

      <h3 className="mb-3 font-medium">My saved words</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {saved.map((s, i) => (
          <SavedWordCard key={i} {...s} savedOn="10/10/25" />
        ))}
      </div>
    </DashboardLayout>
  );
}
