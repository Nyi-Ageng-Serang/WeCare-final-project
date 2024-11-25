import React from "react";
import sukma from "../../assets/sukma.jpg";

const CeritaSuksesSection = () => {
  return (
    <div className="w-full py-6 my-8">
      <div className="container mx-auto px-10">
        {/* Icon and Title */}
        <div className="flex items-center mb-8">
          <div className="text-[#921A40] text-5xl mr-4">
            <i className="fas fa-comment-dots"></i>
          </div>
          <h2 className="text-[#921A40] text-3xl md:text-3xl font-black">
            Career Rerurn Story
          </h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Profile Image */}
          <div className="w-50 h-50 md:w-60 md:h-60 rounded-bl-[50%] rounded-tr-[50%] rounded-tl-[50%] overflow-hidden flex-shrink-0">
            <img
              src={sukma}
              alt="Profile of Sukma"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Text Content */}
          <div className="text-left">
            <h3 className="text-xl font-semibold text-black mb-2">
              Cerita Sukma yang berhasil beralih karir menjadi Data Analist
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Sebelumnya, Sukma pernah bekerja sebagai Project Management
              Officer. Namun, dari tahun 2018-2024, Sukma memutuskan untuk
              Career Break selama 6 tahun untuk sepenuhnya mengurus rumah
              tangga. Ibu dari dua anak ini merasa bahwa otaknya perlu "diasah"
              agar tidak tumpul. Selain itu, bekerja juga merupakan "me time"
              yang berharga baginya. "Aku mau bekerja karena aku mau otakku
              kepakai. Sebelumnya, Sukma sudah beberapa kali mencoba melamar
              pekerjaan namun tidak berhasil . . .
            </p>
            <a
              href="https://journal.revou.co/cerita-sukma/"
              className="text-[#921A40] font-semibold mt-4 inline-block"
            >
              Baca Lebih Lanjut &gt;&gt;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CeritaSuksesSection;
