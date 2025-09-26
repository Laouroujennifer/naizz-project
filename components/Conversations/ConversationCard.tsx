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

export default function ConversationCard({
  avatar = "/images/avatar-placeholder.png",
  title,
  subtitle,
  callTime,
  onReview,
}: Props) {
  return (
    <div className="bg-gray-100 rounded-md shadow-sm p-5 flex flex-col justify-between h-64">
      <div className="flex items-start gap-4">
        {/* Image fixe (frame.png) */}
        <div className="w-16 h-16 relative rounded-md overflow-hidden">
          <Image
            src="/images/frame.png"
            alt={title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="flex-1">
          <div className="font-semibold text-black">{title}</div>
          <div className="text-xs text-gray-500">{subtitle}</div>
          <div className="text-xs text-gray-400  mt-1">Call time: {callTime}</div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-2 pt-4">
    <p className="text-sm text-gray-600">
      You achieved 80% fluency with this call.
    </p>
  </div>

      <button
        onClick={onReview}
        className="bg-blue-900 w-full py-2 rounded-md text-white mt-4"
      >
        Review
      </button>
    </div>
  );
}
