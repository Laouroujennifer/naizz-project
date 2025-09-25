"use client";
import DashboardLayout from "@/components/DashboardLayout";
import AgentCard from "@/components/Agents/AgentCard";
import { useState } from "react";
import Link from "next/link";
import UpgradeModal from "@/components/Agents/UpgradeModal";

export default function RoleplayAgentsPage() {
  const [showModal, setShowModal] = useState(false);

  const roleplayAgents = [
    { name: "Dr. Clarity", role: "Medical conference agent", image: "/images/7 (2).png" },
    { name: "Coach Michael", role: "Investor pitch coach", image: "/images/8 (2).png" },
    { name: "Prof. Beatrice", role: "Thesis defense coach", image: "/images/9 (2).png" },
    { name: "Coach Sam", role: "Executive marketing coach", image: "/images/1.png" },
    { name: "Coach Judy", role: "Legal deposition coach", image: "/images/2.png" },
    { name: "Agent Joe", role: "Thesis defense coach", image: "/images/4.png" },
    { name: "Coach Dorothy", role: "Technical support agent", image: "/images/3.png" },
    { name: "Coach Donald", role: "Immigration success coach", image: "/images/6.png" },
    { name: "Coach Harvey", role: "Media interview agent", image: "/images/5.png" },
    { name: "Coach Hugo", role: "Parent-teacher agent", image: "/images/10.png" },
  ];

  return (
    <DashboardLayout>
          {/* Header */}
          <h1 className="text-xl font-semibold">Hello Mide,</h1>
          <p className="text-sm text-gray-500 mb-6">Agents &gt; Select agent</p>
    
          {/* Tabs */}
          <div className="flex space-x-6  mb-6">
           
         <Link href="/dashbord/agents" className="pb-2 text-gray-600 cursor-pointer">
         Language Agent
      </Link>
       <span className="pb-2 border-b-2 border-blue-600 text-blue-600 cursor-pointer">
             Roleplay Agent 
            </span>
          </div>
    
          {/* Section title */}
          <h2 className="text-base font-medium mb-4">English</h2>
    
          {/* Agents Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {roleplayAgents.map((a, i) => (
              <AgentCard key={i} {...a} onClick={() => setShowModal(true)} />
            ))}
          </div>
    
          {/* Upgrade modal */}
          <UpgradeModal open={showModal} onClose={() => setShowModal(false)} />
        </DashboardLayout>
  );
}
