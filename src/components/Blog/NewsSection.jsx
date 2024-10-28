import React from 'react';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import newsImage from '../../assets/artikel.jpeg';

const NewsSection = () => {
  const newsItems = [
    {
      title: 'Peluncuran WeCare dihadiri berbagai tokoh penting',
      description: 'Setelah melewati berbagai tahap pengembangan, pada Januari 2025 WeCare Resmi diluncurkan. Sebuah platform yang didedikasikan untuk membantu perempuan yang ingin kembali berkarier setelah mengalami career break.',
      image: newsImage,
    },
    {
        title: 'Peluncuran WeCare dihadiri berbagai tokoh penting',
        description: 'Setelah melewati berbagai tahap pengembangan, pada Januari 2025 WeCare Resmi diluncurkan. Sebuah platform yang didedikasikan untuk membantu perempuan yang ingin kembali berkarier setelah mengalami career break.',
        image: newsImage,
    },
    {
        title: 'Peluncuran WeCare dihadiri berbagai tokoh penting',
        description: 'Setelah melewati berbagai tahap pengembangan, pada Januari 2025 WeCare Resmi diluncurkan. Sebuah platform yang didedikasikan untuk membantu perempuan yang ingin kembali berkarier setelah mengalami career break.',
        image: newsImage,
    },
    {
        title: 'Peluncuran WeCare dihadiri berbagai tokoh penting',
        description: 'Setelah melewati berbagai tahap pengembangan, pada Januari 2025 WeCare Resmi diluncurkan. Sebuah platform yang didedikasikan untuk membantu perempuan yang ingin kembali berkarier setelah mengalami career break.',
        image: newsImage,
    },
  ];

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => 
        prevIndex === 0 ? articles.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 px-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[#921A40]">Berita Terbaru</h2>
          <div className="flex space-x-2">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center bg-[#921A40] border-none p-1 hover:bg-pink-200 transition"
            >
              <MdOutlineArrowBackIos className="text-white text-xl cursor-pointer" />
            </button>
            <button
              onClick={handleNext}
              className="flex items-center justify-center bg-[#921A40] border-none p-1 hover:bg-pink-200 transition"
            >
              <MdOutlineArrowForwardIos className="text-white text-xl cursor-pointer" />
            </button>
          </div>
        </div>

        {/* News Items */}
        <div className="flex overflow-hidden space-x-8 pb-12">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-[#ffecec] rounded-lg shadow-lg w-64 pb-8">
              <img src={item.image} alt={item.title} className="items-center rounded-t-lg w-full h-48 object-cover mb-4" />
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
