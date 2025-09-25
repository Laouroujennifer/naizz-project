"use client";
import Image from "next/image";
import React from "react";

type Props = {
  avatar?: string;
  title: string;
  subtitle?: string;
  callTime?: string;
  onReview?: () => void;
};

export default function ConversationCard({ avatar="/images/avatar-placeholder.png", title, subtitle, callTime, onReview }: Props) {
  return (
    <div className="bg-white rounded-md shadow-sm p-4">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 relative rounded-md overflow-hidden">
          <Image src={avatar} alt={title} fill style={{ objectFit: "cover" }} />
        </div>
        <div className="flex-1">
          <div className="font-semibold">{title}</div>
          <div className="text-xs text-gray-500">{subtitle}</div>
          <div className="text-xs text-gray-400 mt-1">Call time: {callTime}</div>
          <div className="mt-3">
            <p className="text-sm text-gray-600">You achieved 80% fluency with this call.</p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <button onClick={onReview} className="bg-blue-700 w-full py-2 rounded-md text-white">Review</button>
      </div>
    </div>
  );
}
