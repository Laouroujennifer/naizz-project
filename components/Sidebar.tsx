"use client"
import { useState } from "react"
import { Home, Users, Wallet, CreditCard, User, MessageSquare, Book } from "lucide-react"

export default function Sidebar() {
  const [active, setActive] = useState("Home")

  const menuItems = [
    { label: "Home", icon: <Home size={18} />, section: "Main" },
    { label: "Agents", icon: <Users size={18} />, section: "Main" },
    { label: "Wallet", icon: <Wallet size={18} />, section: "Main" },
    { label: "Transactions", icon: <CreditCard size={18} />, section: "Main" },
    { label: "Profile Details", icon: <User size={18} />, section: "Main" },
    { label: "Conversations", icon: <MessageSquare size={18} />, section: "Evaluate" },
    { label: "Words", icon: <Book size={18} />, section: "Evaluate" },
  ]

  return (
    <aside className="w-60 h-screen bg-gray-100 border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-4 border-b border-gray-200">
        <img src="/images/Vector.png" alt="Naizz Logo" className="h-8" />
      </div>

      {/* Model Selector */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <select className="w-full appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>English Model</option>
            <option>French Model</option>
            <option>Spanish Model</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-2">
        {/* Section Main */}
        <div className="px-4 py-2">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Main</p>
        </div>
        {menuItems
          .filter((item) => item.section === "Main")
          .map((item) => (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors ${
                active === item.label
                  ? "bg-blue-600 text-white rounded-md"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <span className={active === item.label ? "text-white" : "text-gray-500"}>
                {item.icon}
              </span>
              {item.label}
            </button>
          ))}

        {/* Section Evaluate */}
        <div className="px-4 py-2 mt-4">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Evaluate</p>
        </div>
        {menuItems
          .filter((item) => item.section === "Evaluate")
          .map((item) => (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors ${
                active === item.label
                  ? "bg-blue-600 text-white rounded-md"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <span className={active === item.label ? "text-white" : "text-gray-500"}>
                {item.icon}
              </span>
              {item.label}
            </button>
          ))}
      </nav>
    </aside>
  )
}
