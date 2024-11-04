import React, { useState } from 'react';
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

function DashboardPelatihan() {
  // State for controlling dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row">
        <div className="flex-grow py-5 ml-16 mr-4 sm:ml-16 sm:mr-8 lg:mx-16 lg:ml-72 lg:mr-24">
          {/* Header Pelatihan */}
          <h1 className="text-[18pt] sm:text-[20pt] md:text-[22pt] lg:text-[24pt] font-bold font-sans text-[#921A40]">PELATIHAN</h1>
          <hr className="border-0 h-px bg-[#921A40] mt-6" />

          {/* Description and Study Guide Button */}
          <div className="mt-6">
            <p className="text-lg">
              Temukan pelatihan yang sesuai dengan hasil tes kamu. Tersedia dua pilihan, pelatihan gratis dan pelatihan premium untuk pengembangan keterampilan yang lebih mendalam. Agar lebih terarah kamu bisa melihat panduan belajarnya terlebih dahulu sebelum mulai belajar. Semangat!
            </p>
            <button 
              onClick={toggleDropdown} 
              className="w-full mt-4 bg-[#921A40] text-white text-left text-lg px-6 py-2 rounded-lg flex items-center justify-between"
            >
              Panduan Belajar {isDropdownOpen ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </button>

            {/* Dropdown Content */}
            <div
              className={`mt-4 p-4 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-500 ease-in-out overflow-hidden ${isDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <h3 className="text-xl font-semibold text-[#921A40]">Panduan Sukses Belajar</h3>
              <ul className="mt-2 space-y-2">
                <li>1. <strong>Mulai dengan Pemahaman Dasar:</strong> Kuasai konsep-konsep dasar untuk membangun fondasi yang kuat.</li>
                <li>2. <strong>Latihan Teratur:</strong> Terapkan materi yang telah dipelajari secara langsung melalui latihan harian.</li>
                <li>3. <strong>Tingkatkan dengan Sumber Tambahan:</strong> Ikuti kursus lanjutan atau baca literatur tambahan untuk memperdalam pengetahuan.</li>
                <li>4. <strong>Evaluasi Kemajuan:</strong> Buat catatan perkembangan dan evaluasi hasil latihan secara berkala.</li>
                <li>5. <strong>Jaga Motivasi dan Keseimbangan:</strong> Tetap termotivasi dengan menetapkan tujuan yang realistis dan menjaga keseimbangan antara belajar dan istirahat.</li>
              </ul>
            </div>
          </div>

          {/* Youtube Section */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Materi Gratis</h2>
          <div className="bg-[#FFB1B1] bg-opacity-40 p-6 rounded-lg shadow-[0_10px_10px_rgba(0,0,0,0.35)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
              <VideoCard title="CopyWriter" type="Playlist" provider="Copywriting Youtube" />
              <VideoCard title="CopyWriter" type="Playlist" provider="Copywriting Youtube" />
              <VideoCard title="CopyWriter" type="Playlist" provider="Copywriting Youtube" />
              <VideoCard title="CopyWriter" type="Playlist" provider="Copywriting Youtube" />
            </div>
          </div>

          {/* Course Sections */}
          {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
            <div key={level}>
              <h2 className="text-2xl font-bold mt-10 mb-4">Course Level {level}</h2>
              <div className="bg-[#FFB1B1] bg-opacity-40 p-6 rounded-lg shadow-[0_10px_10px_rgba(0,0,0,0.35)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
                  <CourseCard title="Copywriting Introduction" type="Kelas Online" provider="MySkill" />
                  <CourseCard title="Copywriting Introduction" type="Kelas Online" provider="MySkill" />
                  <CourseCard title="Copywriting Introduction" type="Kelas Online" provider="Dicoding" />
                  <CourseCard title="Copywriting Basics" type="Kelas Online" provider="Dicoding" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// VideoCard component for displaying YouTube cards
const VideoCard = ({ title, type, provider }) => (
  <div className="bg-white p-4 shadow-md rounded-md w-full">
    <img
      src="https://via.placeholder.com/150"
      alt={title}
      className="w-full h-32 object-cover mb-2"
    />
    <div className="flex flex-col space-y-3"> 
      <h3 className="text-base font-semibold text-center">{title}</h3>
      <div>
        <p className="text-sm text-gray-500">{type}</p>
        <p className="text-sm text-gray-500">{provider}</p>
      </div>
      <button className="w-full mt-2 bg-[#921A40] text-white px-3 py-1 rounded">
        Lihat Lebih Lanjut
      </button>
    </div>
  </div>
);

// CourseCard component for displaying Course cards
const CourseCard = ({ title, type, provider }) => (
  <div className="bg-white p-4 shadow-md rounded-md w-full">
    <img
      src="https://via.placeholder.com/150"
      alt={title}
      className="w-full h-32 object-cover mb-2"
    />
    <div className="flex flex-col space-y-3">
      <h3 className="text-base font-semibold text-center">{title}</h3>
      <div>
        <p className="text-sm text-gray-500">{type}</p>
        <p className="text-sm text-gray-500">{provider}</p>
      </div>
      <button className="w-full bg-[#921A40] text-white px-3 py-1 rounded">
        Lihat Lebih Lanjut
      </button>
    </div>
  </div>
);

export default DashboardPelatihan;
