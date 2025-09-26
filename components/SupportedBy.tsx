// components/SupportedBy.tsx

export default function SupportedBy() {
  return (
    <section className="bg-white py-16 text-center">
      <h2 className="text-3xl md:text-4xl text-black font-bold mb-4">
        Supported <span className="text-blue-600">by</span>
      </h2>
      <p className="text-gray-600 mb-12">
        Partners from across various tech companies.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-20 px-4">
        {/* NVIDIA */}
        <div className="flex flex-col items-center">
          <img src="/images/image 4.png" alt="NVIDIA" className="h-16 " />
        
        </div>

        {/* ElevenLabs */}
        <div className="flex flex-col items-center">
          <img src="/images/image 3.png" alt="ElevenLabs" className="h-4" />
        </div>

        {/* Microsoft */}
        <div className="flex flex-col items-center">
          <img src="/images/image 5.png" alt="Microsoft" className="h-16 " />
          
        </div>
      </div>
    </section>
  );
}
