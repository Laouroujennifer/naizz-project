"use client";
import React from "react";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";

type Props = {
  total: number;
  onAction: () => void;
};

export default function ConversationsOverview({ total, onAction }: Props) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl border bg-white shadow-sm mb-6">
      <div className="flex items-center space-x-2">
        <RecordVoiceOverIcon className="text-blue-600" fontSize="medium" />
        <h2 className="text-lg font-semibold">{total}</h2>
        <span className="text-gray-500 text-sm">Conversations</span>
      </div>
      <button
        onClick={onAction}
        className="text-blue-600 hover:underline text-sm"
      >
        View all
      </button>
    </div>
  );
}
