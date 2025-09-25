"use client";
import DashboardLayout from "@/components/DashboardLayout";
import AgentCard from "@/components/Agents/AgentCard";
import { useState } from "react";
import UpgradeModal from "@/components/Agents/UpgradeModal";
import Link from "next/link";

export default function LanguageAgentsPage() {
  const [showModal, setShowModal] = useState(false);

  const languageAgents = [
    { name: "Alex", level: "Beginner", image: "/images/1.png" },
    { name: "Ethan", level: "Intermediate", image: "/images/2.png" },
    { name: "Ryan", level: "Advanced", image: "/images/3.png" },
    { name: "Emma", level: "Beginner", image: "/images/4.png" },
    { name: "Anna", level: "Intermediate", image: "/images/5.png" },
    { name: "Clara", level: "Advanced", image: "/images/6.png" },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-4 md:mb-6">
        <h1 className="text-xl md:text-2xl font-semibold">Hello Mide,</h1>
        <p className="text-sm text-gray-500">Agents &gt; Select agent</p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 md:space-x-6 mb-6 overflow-x-auto pb-2">
        <span className="pb-2 border-b-2 border-blue-600 text-blue-600 cursor-pointer whitespace-nowrap text-sm md:text-base">
          Language Agent
        </span>
        <Link 
          href="/dashbord/agents/roleplay-agents" 
          className="pb-2 text-gray-600 cursor-pointer whitespace-nowrap text-sm md:text-base hover:text-gray-800"
        >
          Roleplay Agent
        </Link>
      </div>

      {/* Section title */}
      <h2 className="text-base md:text-lg font-medium mb-4 md:mb-6">English</h2>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6">
        {languageAgents.map((a, i) => (
          <AgentCard key={i} {...a} onClick={() => setShowModal(true)} />
        ))}
      </div>

      {/* Upgrade modal */}
      <UpgradeModal open={showModal} onClose={() => setShowModal(false)} />
    </DashboardLayout>
  );
}