import React from 'react';
import { FaCogs, FaLightbulb } from 'react-icons/fa';
import bannerImage from '../assets/banner.png';  

const Banner = () => {
  return (
    <div className="flex items-center px-10 justify-between h-64 bg-gradient-to-r from-[#921A40] via-[#f79191] to-[#fccdcd] rounded-xl shadow-lg overflow-hidden">
      {/* Bagian Teks */}
      <div className="w-3/4 text-left p-6 text-white relative">
        <h1 className="text-5xl font-extrabold font-[Poppins] leading-tight mb-4">
            Coming Soon!
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-4" style={{ fontFamily: "'Inknut Antiqua', serif" }}>
            UX Writing Training
        </p>
        <p className="text-md md:text-lg lg:text-xl opacity-90 mb-4">Presented by PT - Enhance your UX skills</p>

        {/* Ikon */}
        <div className="left-8 flex space-x-6">
          <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center shadow-xl">
            <FaCogs className="text-indigo-600 text-2xl" />
          </div>
          <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center shadow-xl">
            <FaLightbulb className="text-yellow-500 text-2xl" />
          </div>
        </div>
      </div>

      {/* Bagian Gambar */}
      <div className="w-1/4 h-3/4 bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url(${bannerImage})` }}></div>
    </div>
  );
};

export default Banner;
