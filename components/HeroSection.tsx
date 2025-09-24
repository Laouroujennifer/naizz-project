import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-gray-50 px-4 sm:px-6 md:px-12 py-12 md:py-20 overflow-hidden">
      
      {/* Small "Naizz is here!" tag */}
      <div className="mb-6 sm:mb-8 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-medium">
        + Naizz is here!
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-center leading-snug sm:leading-tight mb-4 sm:mb-6">
        Say goodbye to <span className="text-blue-600">awkward lessons</span>, <br className="hidden sm:block" />
        hello <span className="text-blue-600">real conversations</span>.
      </h1>

      {/* Sub-description */}
      <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center max-w-md sm:max-w-xl md:max-w-2xl mb-8 sm:mb-12">
        Our AI agent is designed just for you and your language fluency
      </p>

      {/* Character Image */}
      <div className="relative w-full max-w-[260px] sm:max-w-md md:max-w-xl lg:max-w-3xl h-[280px] sm:h-[360px] md:h-[480px] lg:h-[600px] mx-auto">
        <Image
          src="/images/image 1.png"
          alt="Male character with backpack"
          fill
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
