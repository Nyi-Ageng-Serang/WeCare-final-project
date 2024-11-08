import React from "react";
import komunitasIMG from "../../assets/komunitas.png";

const CommunityCTA = () => {
  return (
    <section className="bg-pink bg-opacity-20">
      <div className="w-full py-6">
        <div className="container mx-auto lg:px-24 px-6 py-16">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 md:space-x-20">
            {/* Text Section */}
            <div className="">
              <div className=" md:text-left space-y-8 mb-20 md:mb-0">
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
            </div>

            {/* Image Section */}
            <div>
              <div className="relative flex-shrink-0">
                <div className="bg-[#921A40] md:w-40 w-32 md:h-[28rem] h-[20rem] absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-0 rotate-45 rounded-[100%] left-1/2"></div>
                <div className="bg-[#921A40] md:w-40 w-32 md:h-[28rem] h-[20rem] absolute top-1/2 transform -translate-y-1/2 translate-x-1/2 z-0 rotate-[135deg] rounded-[100%] right-1/2"></div>

                <img
                  src={komunitasIMG}
                  alt="Women smiling"
                  className="relative z-10 rounded-full md:w-72 md:h-72 h-60 w-60 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityCTA;
