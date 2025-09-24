"use client";

import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";

const AgentsSection: React.FC = () => {
  const agents = [
    { title: "Job interview?", level: "Beginner" },
    { title: "News?", level: "Beginner" },
    { title: "Role play?", level: "Beginner" },
    { title: "Complete novice?", level: "Beginner" },
    { title: "Miss/Mr I have little experience?", level: "Intermediate" },
    { title: "I’m already a pro", level: "Advanced" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Titre */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Over <span className="text-blue-600">60+</span> agents
        </h2>
        <p className="text-gray-600 mb-12">
          Yeah right! all to make learning fun for you.
        </p>

        {/* Grid des cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, i) => (
            <div
  key={i}
  className="flex flex-col justify-between p-6 rounded-xl shadow-sm hover:shadow-md transition"
  style={{ backgroundColor: "#DBF3FF33" }}
>

<div className="flex items-center justify-between mb-4">
  {/* Icône dans un mini cercle */}
  <div className="h-8 w-8 rounded-full flex items-center justify-center shadow" style={{ backgroundColor: "#00699E" }}>
  <ArrowTrendingUpIcon className="h-6 w-6 text-white" />
</div>

  {/* Niveau à droite */}
  <span className="text-sm text-gray-500">{agent.level}</span>
</div>

              <h3 className="text-lg text-left font-semibold mb-2">{agent.title}</h3>
              <p className="text-gray-600 text-left text-xs">
                We’ve got you covered.Ace that interview when you let Naizz
                help you stay ahead of a 1000 others.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
