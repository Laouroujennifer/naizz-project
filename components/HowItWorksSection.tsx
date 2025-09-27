import Image from "next/image";

const HowItWorksSection = () => {
  return (
    <section className="relative -mt-32 px-4 sm:px-6 md:px-12">
      {/* Container bleu avec chevauchement */}
      <div className="mx-auto max-w-6xl bg-gradient-to-r from-blue-200 to-blue-300 rounded-3xl shadow-lg p-6 sm:p-8 md:p-10 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10">
          
          {/* Left Side: Character Image */}
          <div className="relative w-full max-w-[220px] sm:max-w-[280px] md:max-w-sm h-[260px] sm:h-[320px] md:h-[380px] mb-8 md:mb-0 md:translate-y-30">
            <Image
              src="/images/girl.png"
              alt="Female character holding a tablet"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Right Side: How it works box */}
          <div className="bg-white/40 backdrop-blur-md border border-white/50 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg w-full max-w-md">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
              How it works
            </h2>
            <ul className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <li key={item} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    First explanation goes here. First explanation goes here First explanation goes here
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-blue-800 text-white rounded-md text-sm sm:text-base font-semibold hover:bg-blue-700 transition duration-300">
                Start Learning
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
