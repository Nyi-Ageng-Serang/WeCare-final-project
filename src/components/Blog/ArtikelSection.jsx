import React, { useState } from 'react';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

const articles = [
  {
    title: "5 Langkah Memulai Karier Sebagai Freelancer",
    description: "Ada banyak pekerjaan freelancer yang dapat kamu geluti. Terlebih bagi kamu yang memang memiliki kemampuan lebih baik dibidang tertentu, seperti desain grafis, menulis konten, atau web designer.Lalu bagaimana cara memulai karir sebagai seorang freelancer? Silahkan simak 5...",
    image: "https://img.freepik.com/premium-photo/girl-using-laptop-pointing-out-skyline_118124-84114.jpg?w=740",
    link: "https://fastwork.id/blog/memulai-karier-sebagai-freelancer/"
  },
  {
    title: "7 Cara Berkarir Menjadi Freelancer,Cocok Untukmu",
    description: "Sekarang, semakin banyak orang yang tertarik untuk menjelajahi dunia freelancing. Baik itu sebagai tambahan penghasilan, mencari fleksibilitas dalam jadwal kerja, atau bahkan sebagai pilihan karir utama. Ada beberapa cara yang dapat kamu...",
    image: "https://img.freepik.com/free-photo/medium-shot-woman-living-as-digital-nomad_23-2151205498.jpg?ga=GA1.1.108472942.1729938333",
    link: "https://talenthero.id/insight/7-cara-berkarir-menjadi-freelancer-cocok-untuk-pemula/"
  },
  {
    title: "Panduan Memulai Karir Freelance",
    description: "Freelancing adalah gaya bekerja di mana seseorang bekerja secara mandiri untuk berbagai klien, tanpa terikat pada satu perusahaan.Jika kamu tertarik untuk memulai karir sebagai freelancer, artikel ini akan membahas langkah-langkah penting...",
    image: "https://img.freepik.com/free-photo/young-female-freelancer-is-working-her-new-project-home_613910-14929.jpg?ga=GA1.1.108472942.1729938333",
    link: "https://indriariadna.com/memulai-karir-freelance-dan-sukses-di-platform-freelance"
  },
  {
    title: "Langkah Tepat Memulai Karir Sebagai Freelance",
    description: "Ketika mendengar kata freelancer, mungkin yang terbayang di pikiran Anda adalah bekerja sesuai dengan hobi, jam kerja yang fleksibel, tidak terikat dengan jam kantor, tidak ada bos yang mengatur dan sebagainya...",
    image: "https://sorsawo.com/wp-content/uploads/2022/10/freelancer-career-step-fi.png",
    link: "https://sorsawo.com/blog/memulai-karir-freelancer/"
  }
];

const ArtikelSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => 
      prevIndex === 0 ? articles.length - 1 : prevIndex - 1
    );
  };

  // Mendapatkan dua artikel untuk ditampilkan berdasarkan indeks saat ini
  const displayedArticles = [
    articles[startIndex],
    articles[(startIndex + 1) % articles.length]
  ];

  return (
    <section className="py-12 px-32">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-[#921A40]">Artikel Edukatif</h2>
        <div className="flex space-x-2">
          <button 
            onClick={handlePrev} 
            className="flex items-center justify-center bg-[#921A40] border-none p-1 hover:bg-pink-200 transition">
            <MdOutlineArrowBackIos className="text-white text-xl cursor-pointer" />
          </button>
          <button 
            onClick={handleNext} 
            className="flex items-center justify-center bg-[#921A40] border-none p-1 hover:bg-pink-200 transition">
            <MdOutlineArrowForwardIos className="text-white text-xl cursor-pointer" />
          </button>
        </div>
      </div>
      
      <div className="flex justify-center items-center mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 mx-4">
          {displayedArticles.map((article, index) => (
            <div key={index} className="bg-[#FFB1B1] bg-opacity-30 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#921A40] mb-2">{article.title}</h3>
                <p className="text-[#921A40] text-opacity-80 mb-4">{article.description}</p>
                <a href={article.link} className="text-[#921A40] font-semibold">Baca Lebih Lanjut &gt;&gt;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtikelSection;
