"use client";
import { X } from "lucide-react";

interface UpgradeModalProps {
  open: boolean;
  onClose: () => void;
}

export default function UpgradeModal({ open, onClose }: UpgradeModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[350px] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          <X size={18} />
        </button>

        <h2 className="text-lg font-semibold mb-2">Upgrade Subscription</h2>
        <p className="text-sm text-gray-600 mb-4">
          Sorry, you&apos;re not eligible to learn more than one language. Please
          upgrade your account to have a smooth experience.
        </p>

        <button
          onClick={() => alert("Redirect to upgrade flow 🚀")}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded w-full"
        >
          Upgrade Now
        </button>
      </div>
    </div>
  );
}
