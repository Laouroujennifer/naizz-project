import Image from "next/image";

export default function MoreFeatures() {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Oh! there’s <span className="text-blue-600">more</span>
      </h2>
      <p className="text-gray-600 mb-12">
        The list really goes beyond these, you need to explore them yourself.
      </p>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Free Conversation Coins */}
        <div className="bg-blue-50 p-4 rounded-lg shadow-md text-left">
          <div className="mb-4">
            <Image
              src="/images/coins.png" // ton image dans public/icons/
              alt="Free Coins"
              width={100}
              height={100}
            />
          </div>
          <h3 className="font-semibold text-lg mb-2">Free conversation coins</h3>
          <p className="text-gray-600">
            Yhup, our starter pack gives you free coins to hold conversations with your agent. Cool right?
          </p>
        </div>

        {/* Games */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md text-left">
          <div className="mb-4">
            <Image
              src="/images/Games.png"
              alt="Games"
              width={100}
              height={100}
            />
          </div>
          <h3 className="font-semibold text-lg mb-2">Games</h3>
          <p className="text-gray-600">
            Yhup, our starter pack gives you free coins to hold conversations with your agent. Cool right?
          </p>
        </div>

        {/* Real time call conversation */}
    <div className="bg-blue-50 p-6 rounded-lg shadow-md md:col-span-2 flex flex-col md:flex-row justify-between  ">
  {/* Texte en haut à gauche */}
  <div className="text-left flex-1">
    <h3 className="font-semibold text-lg mb-2">
      Real time call conversation
    </h3>
    <p className="text-gray-600 ">
      Yhup, our starter pack gives you free coins to hold <br/> conversations with your agent. Cool right?
    </p>
  </div>

  {/* Image en bas à droite */}
 <div className="flex justify-end items-end mt-4 md:mt-0">
  <Image
    src="/images/whatsapp.png"
    alt="Real time call"
    width={120}
    height={120}
    className="translate-y-8 md:translate-y-6"
  />
</div>
</div>

      </div>
    </section>
  );
}
