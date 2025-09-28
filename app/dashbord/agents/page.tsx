"use client";
import DashboardLayout from "@/components/DashboardLayout";
import AgentCard from "@/components/Agents/AgentCard";
import { useState } from "react";
import UpgradeModal from "@/components/Agents/UpgradeModal";
import Link from "next/link";

export default function LanguageAgentsPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedLang, setSelectedLang] = useState("All");

  // Tous les agents avec leur langue
  const languageAgents = [
    {
      name: "Alex",
      level: "Beginner",
      image: "/images/1.png",
      lang: "English",
    },
    {
      name: "Ethan",
      level: "Intermediate",
      image: "/images/2.png",
      lang: "English",
    },
    {
      name: "Ryan",
      level: "Advanced",
      image: "/images/3.png",
      lang: "English",
    },
    {
      name: "Emma",
      level: "Beginner",
      image: "/images/4.png",
      lang: "English",
    },
    {
      name: "Anna",
      level: "Intermediate",
      image: "/images/5.png",
      lang: "English",
    },
    {
      name: "Clara",
      level: "Advanced",
      image: "/images/6.png",
      lang: "English",
    },

    // Spanish
    {
      name: "Daniel",
      level: "Beginner",
      image: "/images/s.png",
      lang: "Spanish",
    },
    {
      name: "Marcus",
      level: "Intermediate",
      image: "/images/sa.png",
      lang: "Spanish",
    },
    {
      name: "Adrian",
      level: "Advanced",
      image: "/images/sap.png",
      lang: "Spanish",
    },
    {
      name: "Grace",
      level: "Beginner",
      image: "/images/sapn.png",
      lang: "Spanish",
    },
    {
      name: "Sophia",
      level: "Intermediate",
      image: "/images/sapni.png",
      lang: "Spanish",
    },
    {
      name: "Laura",
      level: "Advanced",
      image: "/images/spanish.png",
      lang: "Spanish",
    },

    // Portuguese
    {
      name: "Victor",
      level: "Beginner",
      image: "/images/p (2).png",
      lang: "Portuguese",
    },
    {
      name: "Nathan",
      level: "Intermediate",
      image: "/images/po.png",
      lang: "Portuguese",
    },
    {
      name: "Julian",
      level: "Advanced",
      image: "/images/por.png",
      lang: "Portuguese",
    },
    {
      name: "Isabel",
      level: "Beginner",
      image: "/images/port.png",
      lang: "Portuguese",
    },
    {
      name: "Julia",
      level: "Intermediate",
      image: "/images/portu.png",
      lang: "Portuguese",
    },
    {
      name: "Elena",
      level: "Advanced",
      image: "/images/portug.png",
      lang: "Portuguese",
    },

    // French
    {
      name: "Louis",
      level: "Beginner",
      image: "/images/portugu.png",
      lang: "French",
    },
    {
      name: "Camille",
      level: "Intermediate",
      image: "/images/f (2).png",
      lang: "French",
    },
    {
      name: "Hugo",
      level: "Advanced",
      image: "/images/fr (2).png",
      lang: "French",
    },
    {
      name: "Sophie",
      level: "Beginner",
      image: "/images/fre.png",
      lang: "French",
    },
    {
      name: "Juliette",
      level: "Intermediate",
      image: "/images/fren.png",
      lang: "French",
    },
    {
      name: "Pierre",
      level: "Advanced",
      image: "/images/frenc.png",
      lang: "French",
    },

    // German
    {
      name: "Hans",
      level: "Beginner",
      image: "/images/frenche.png",
      lang: "German",
    },
    {
      name: "Greta",
      level: "Intermediate",
      image: "/images/g (2).png",
      lang: "German",
    },
    {
      name: "Klaus",
      level: "Advanced",
      image: "/images/ger.png",
      lang: "German",
    },
    {
      name: "Lena",
      level: "Beginner",
      image: "/images/germ.png",
      lang: "German",
    },
    {
      name: "Matthias",
      level: "Intermediate",
      image: "/images/germa.png",
      lang: "German",
    },
    {
      name: "Anna",
      level: "Advanced",
      image: "/images/german.png",
      lang: "German",
    },

    // Chinese
    {
      name: "Wei",
      level: "Beginner",
      image: "/images/c (2).png",
      lang: "Chinese",
    },
    {
      name: "Li",
      level: "Intermediate",
      image: "/images/ch.png",
      lang: "Chinese",
    },
    {
      name: "Chen",
      level: "Advanced",
      image: "/images/chi.png",
      lang: "Chinese",
    },
    {
      name: "Mei",
      level: "Beginner",
      image: "/images/chine.png",
      lang: "Chinese",
    },
    {
      name: "Xiao",
      level: "Intermediate",
      image: "/images/chines.png",
      lang: "Chinese",
    },
    {
      name: "Ling",
      level: "Advanced",
      image: "/images/chines.png",
      lang: "Chinese",
    },

    // Italian
    {
      name: "Marco",
      level: "Beginner",
      image: "/images/i (2).png",
      lang: "Italian",
    },
    {
      name: "Giulia",
      level: "Intermediate",
      image: "/images/it.png",
      lang: "Italian",
    },
    {
      name: "Luca",
      level: "Advanced",
      image: "/images/it.png",
      lang: "Italian",
    },
    {
      name: "Francesca",
      level: "Beginner",
      image: "/images/ital.png",
      lang: "Italian",
    },
    {
      name: "Alessandro",
      level: "Intermediate",
      image: "/images/itali.png",
      lang: "Italian",
    },
    {
      name: "Chiara",
      level: "Advanced",
      image: "/images/italien.png",
      lang: "Italian",
    },

    // Arabic
    {
      name: "Omar",
      level: "Beginner",
      image: "/images/a (2).png",
      lang: "Arabic",
    },
    {
      name: "Layla",
      level: "Intermediate",
      image: "/images/ar.png",
      lang: "Arabic",
    },
    {
      name: "Khalid",
      level: "Advanced",
      image: "/images/ara.png",
      lang: "Arabic",
    },
    {
      name: "Aisha",
      level: "Beginner",
      image: "/images/arac.png",
      lang: "Arabic",
    },
    {
      name: "Youssef",
      level: "Intermediate",
      image: "/images/aracb.png",
      lang: "Arabic",
    },
    {
      name: "Fatima",
      level: "Advanced",
      image: "/images/aracbi.png",
      lang: "Arabic",
    },

    // Japanese
    {
      name: "Haruto",
      level: "Beginner",
      image: "/images/j (2).png",
      lang: "Japanese",
    },
    {
      name: "Yui",
      level: "Intermediate",
      image: "/images/ja.png",
      lang: "Japanese",
    },
    {
      name: "Ren",
      level: "Advanced",
      image: "/images/jap.png",
      lang: "Japanese",
    },
    {
      name: "Sakura",
      level: "Beginner",
      image: "/images/japa.png",
      lang: "Japanese",
    },
    {
      name: "Takumi",
      level: "Intermediate",
      image: "/images/japan.png",
      lang: "Japanese",
    },
    {
      name: "Mio",
      level: "Advanced",
      image: "/images/japan.png",
      lang: "Japanese",
    },

    // Korean
    {
      name: "Joon",
      level: "Beginner",
      image: "/images/k (2).png",
      lang: "Korean",
    },
    {
      name: "Hana",
      level: "Intermediate",
      image: "/images/ko.png",
      lang: "Korean",
    },
    {
      name: "Minho",
      level: "Advanced",
      image: "/images/kor.png",
      lang: "Korean",
    },
    {
      name: "Soojin",
      level: "Beginner",
      image: "/images/kore.png",
      lang: "Korean",
    },
    {
      name: "Hyun",
      level: "Intermediate",
      image: "/images/korea.png",
      lang: "Korean",
    },
    {
      name: "Eunji",
      level: "Advanced",
      image: "/images/korean.png",
      lang: "Korean",
    },
  ];

  // Récupère toutes les langues uniques
  const languages = [...new Set(languageAgents.map((a) => a.lang))];

  // Filtrage : soit tout regroupé, soit une seule langue
  const groupedAgents =
    selectedLang === "All"
      ? languages.map((lang) => ({
          lang,
          agents: languageAgents.filter((a) => a.lang === lang),
        }))
      : [
          {
            lang: selectedLang,
            agents: languageAgents.filter((a) => a.lang === selectedLang),
          },
        ];

  return (
    <DashboardLayout>
      <div className="mt-8 sm:mt-8">
        {/* Header */}
        <div className="mb-4 md:mb-6">
          <h1 className="text-xl text-black md:text-2xl font-semibold">
            Hello Mide,
          </h1>
          <p className="text-sm text-gray-500">Agents &gt; Select agent</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-3">
          {/* Onglets */}
          <div className="flex space-x-4 md:space-x-6 overflow-x-auto pb-2">
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

          {/* Dropdown langues - MODIFIÉ ICI */}
          <div className="sm:mt-0 mt-2">
            <select
              title="Select Language"
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
            >
              <option value="All" className="text-black bg-white">
                All
              </option>
              {languages.map((l) => (
                <option key={l} value={l} className="text-black bg-white">
                  {l}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Sections par langue */}
        {groupedAgents.map(({ lang, agents }) => (
          <div key={lang} className="mb-12">
            <h2 className="text-base text-black md:text-lg font-medium mb-4 md:mb-6">
              {lang}
            </h2>

            {/* Agents Grid - 3 colonnes par ligne */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {agents.map((a, i) => (
                <AgentCard key={i} {...a} onClick={() => setShowModal(true)} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Upgrade modal */}
      <UpgradeModal open={showModal} onClose={() => setShowModal(false)} />
    </DashboardLayout>
  );
}
