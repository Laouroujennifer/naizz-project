"use client";
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import ConversationsOverview from "@/components/Conversations/ConversationsOverview";
import ConversationCard from "@/components/Conversations/ConversationCard";
import { useRouter } from "next/navigation";

export default function ConversationsPage() {
  const router = useRouter();

  const convs = Array.from({ length: 3 }, () => ({
    title: "Coach Dorothy",
    subtitle: "Technical support escalation agent",
    callTime: "1:00:40",
  }));

  return (
    <DashboardLayout>
      <h1 className="text-xl font-semibold">Hello Mide,</h1>
      <p className="text-sm text-gray-500 mb-6">Conversations</p>

      <ConversationsOverview total={10} onAction={() => {}} />

      <h3 className="mb-3 font-medium">My conversations</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {convs.map((c, i) => (
          <ConversationCard
            key={i}
            {...c}
            onReview={() => router.push("/dashbord/conversations/review")}
          />
        ))}
      </div>
    </DashboardLayout>
  );
}
