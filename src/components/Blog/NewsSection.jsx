import React, { useState } from 'react';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import newsImage from '../../assets/artikel.jpeg';
import penghargaanImage from '../../assets/penghargaan.png';
import peluncuranImage from '../../assets/9.png';
import WebinarImage from '../../assets/pelatihan (2).png';

const NewsSection = () => {
  const newsItems = [
    {
      title: 'Peluncuran WeCare dihadiri berbagai tokoh penting',
      description: 'Setelah melewati berbagai tahap pengembangan, pada Januari 2025 WeCare Resmi diluncurkan. Sebuah platform yang didedikasikan untuk membantu perempuan yang ingin kembali berkarier setelah mengalami career break.',
      image: newsImage,
    },
    {
        title: 'WeCare Mendapat Penghargaan Inovasi Teknologi',
        description: 'Dalam acara penghargaan teknologi tahunan, WeCare berhasil meraih penghargaan di bidang inovasi teknologi untuk mendukung pemberdayaan perempuan. Penghargaan ini diberikan sebagai apresiasi atas upaya WeCare dalam membantu perempuan kembali ke dunia kerja.',
        image: penghargaanImage,
    },
    {
        title: 'Pelatihan Partnership akan segera diluncurkan',
        description: 'WeCare akan segera meluncurkan program Pelatihan Partnership yang dirancang untuk membantu perempuan membangun keterampilan kolaboratif dan jaringan profesional yang kuat. Para peserta diharapkan dapat meningkatkan peluang kerja dan membuka lebih banyak kesempatan untuk berkembang di dunia kerja.',
        image: peluncuranImage,
    },
    {
        title: 'WeCare Mengadakan Webinar "Kembali Bekerja dengan Percaya Diri"',
        description: 'WeCare akan mengadakan webinar gratis bertajuk "Kembali Bekerja dengan Percaya Diri" yang bertujuan untuk membantu peserta mengatasi tantangan emosional saat kembali ke dunia kerja. Webinar ini dipandu oleh psikolog dan profesional karier yang akan memberikan tips dan strategi praktis',
        image: WebinarImage,
    },
  ];

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => 
        prevIndex === 0 ? newsItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 px-0 lg:px-32">
      <div className="max-w-6xl mx-auto px-0">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[#921A40]">Berita Terbaru</h2>
          <div className="flex space-x-2">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center bg-[#921A40] border-none p-2 hover:bg-pink-200 transition"
            >
              <MdOutlineArrowBackIos className="text-white text-xl" />
            </button>
            <button
              onClick={handleNext}
              className="flex items-center justify-center bg-[#921A40] border-none p-2 hover:bg-pink-200 transition"
            >
              <MdOutlineArrowForwardIos className="text-white text-xl" />
            </button>
          </div>
        </div>

        {/* News Items */}
        <div className="flex overflow-hidden space-x-8 pb-12">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-[#f8d7da] rounded-lg shadow-lg w-[350px] pb-6">
              <img src={item.image} alt={item.title} className="rounded-t-lg w-full h-56 object-cover mb-4" />
              <h3 className="text-sm font-semibold p-4 mb-2">{item.title}</h3>
              <p className="text-gray-700 px-4 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
