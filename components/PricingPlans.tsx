export default function PricingPlans() {
  const plans = [
    {
      title: "Freemium plan",
      bg: "bg-blue-50",
      textColor: "text-gray-800",
      buttonBg: "bg-blue-600",
      buttonText: "text-white",
      plusColor: "text-blue-500", // bleu pour freemium
      features: [
        "Free 2 mins coins for conversation",
        "Free 2 mins coins for conversation",
      ],
    },
    {
      title: "Premium plan",
      bg: "bg-gray-900",
      textColor: "text-white",
      buttonBg: "bg-white",
      buttonText: "text-black",
      plusColor: "text-white", // blanc pour premium
      features: [
        "Free 2 mins coins for conversation",
        "Free 2 mins coins for conversation",
        "Free 2 mins coins for conversation",
        "Free 2 mins coins for conversation",
      ],
    },
    {
      title: "Goldium plan",
      bg: "bg-blue-900",
      textColor: "text-white",
      buttonBg: "bg-white",
      buttonText: "text-blue-700",
      plusColor: "text-white", // blanc pour goldium
      features: [
        "Free 2 mins coins for conversation",
        "Free 2 mins coins for conversation",
        "Free 2 mins coins for conversation",
        "Free 2 mins coins for conversation",
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Titre + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-0">
            Plans for everyone
          </h2>
          <a
            href="#"
            className="text-blue-600 font-medium hover:underline text-sm sm:text-base"
          >
            Try Naizz for free
          </a>
        </div>

        {/* Cartes des plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-lg p-6 ${plan.bg} ${plan.textColor} shadow-md flex flex-col justify-between aspect-square`}
            >
              {/* Contenu */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{plan.title}</h3>
                <p className="mb-4 text-sm sm:text-base">
                  This plan is open to everyone for <strong>$0 fee</strong>.
                </p>
                <hr className="border-gray-300/50 mb-4" />
                <ul className="space-y-2 text-xs sm:text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className={`${plan.plusColor} mr-2 font-bold`}>+</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bouton aligné à gauche */}
              <div className="mt-6">
                <button
                  className={`py-2 px-4 rounded ${plan.buttonBg} ${plan.buttonText} font-semibold text-sm sm:text-base`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
