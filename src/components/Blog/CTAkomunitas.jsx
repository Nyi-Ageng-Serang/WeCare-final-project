import React from 'react';
import komunitasIMG from '../../assets/komunitas.png';

const CommunityCTA = () => {
  return (
    <section className="bg-pink bg-opacity-20 flex items-center justify-center py-24">
      <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto space-y-6 md:space-y-0 md:space-x-40">
        
        {/* Text Section */}
        <div className="md:text-left space-y-8">
          <h2 className="text-4xl font-bold text-[#921A40]">
            Bergabunglah dengan komunitas WeCare
          </h2>
          <p className="text-gray text-lg pr-24">
            Temukan Dukungan Sesama Perempuan yang Kembali Berkarier!
          </p>
          <button className="bg-[#921A40] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#922d69] transition">
            Gabung Sekarang
          </button>
        </div>

        {/* Image Section */}
        <div className="relative flex-shrink-0">
            <div className="bg-[#921A40] w-48 h-[32rem] absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-0 rotate-45 rounded-[100%] left-1/2"></div>
            <div className="bg-[#921A40] w-48 h-[32rem] absolute top-1/2 transform -translate-y-1/2 translate-x-1/2 z-0 rotate-[135deg] rounded-[100%] right-1/2"></div>

            <img 
                src={komunitasIMG}
                alt="Women smiling" 
                className="relative z-10 rounded-full w-72 h-72 object-cover"
            />
        </div>
      </div>
    </section>
  );
};

export default CommunityCTA;
