// components/Agents/AgentCard.tsx
"use client";
import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  level?: string;     // for language agents
  role?: string;      // for roleplay agents
  image: string;
  onClick?: () => void;
};

export default function AgentCard({ name, level, role, image, onClick }: Props) {
  const subtitle = role ?? (level ? `Level: ${level}` : "");

  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-sm cursor-pointer group"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick?.()}
    >
      {/* Image */}
      <div className="w-full h-40 sm:h-44 md:h-48 relative">
        <Image
          src={image}
          alt={`${name} avatar`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: "cover" }}
          className="object-cover"
        />
      </div>

      {/* gradient to improve readability */}
      <div className="absolute left-0 bottom-0 w-full h-28 bg-gradient-to-t from-black/65 to-transparent pointer-events-none" />

      {/* Bottom-left overlay text */}
      <div className="absolute left-3 bottom-3 z-20">
        <div className="text-white text-sm md:text-base font-semibold leading-tight">
          {name}
        </div>
        {subtitle && (
          <div className="text-white text-xs md:text-sm opacity-90 mt-1 max-w-[12rem]">
            {subtitle}
          </div>
        )}
      </div>

      {/* Circular arrow button bottom-right */}
      <div className="absolute right-3 bottom-3 z-30">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
          aria-label={`Select ${name}`}
          className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-md hover:scale-105 transform transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 md:w-5 md:h-5 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </button>
      </div>
    </div>
  );
}
