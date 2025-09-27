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
      className="relative rounded-lg overflow-hidden shadow-md cursor-pointer group"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick?.()}
    >
      {/* Image */}
     <div className="w-full h-45 sm:h-60 md:h-72 relative">
  <Image
    src={image}
    alt={`${name} avatar`}
    fill
    sizes="(max-width: 768px) 100vw, 33vw"
    className="object-cover"
  />
</div>


      {/* Bandeau fixe en bas */}
      <div className="absolute bottom-0 left-0 w-full bg-white/2 backdrop-blur-sm px-3 py-2 flex items-center justify-between">
        {/* Texte */}
        <div>
          <div className="text-white text-sm md:text-base font-semibold">
            {name}
          </div>
          {subtitle && (
            <div className="text-white text-xs md:text-sm opacity-90">
              {subtitle}
            </div>
          )}
        </div>

        {/* Bouton rond */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
          aria-label={`Select ${name}`}
          className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-blue-600 flex items-center justify-center shadow-md hover:scale-105 transform transition"
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
