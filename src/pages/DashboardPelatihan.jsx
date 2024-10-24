import React from 'react';
import Sidebar from '../components/Sidebar';
import { TiArrowSortedDown } from "react-icons/ti";

function DashboardPelatihan() {
  return (
    <>
      <div className="flex">
        <Sidebar /> {/* Memanggil Sidebar */}
        <div className="flex-grow p-8 ml-72 mr-40">
          {/* Header Profile */}
          <h1 className="text-[30pt] font-bold font-sans text-[#921A40]">PELATIHAN</h1>
          <br />
          <hr className="border-0 h-px bg-[#921A40]" />

          {/* Deskripsi dan Tombol Panduan Belajar */}
          <div className="mt-6">
            <p className="text-xl">
              Temukan pelatihan yang sesuai dengan hasil tes kamu. Tersedia dua pilihan, pelatihan gratis dan pelatihan premium untuk pengembangan keterampilan yang lebih mendalam. Agar lebih terarah kamu bisa melihat panduan belajarnya terlebih dahulu sebelum mulai belajar. Semangat!
            </p>
            <button className="w-full mt-4 bg-[#921A40] text-white text-left text-lg px-6 py-2 rounded-lg flex items-center justify-between">
              Panduan Belajar <TiArrowSortedDown />
            </button>

          </div>

          {/* Youtube Section */}
          <h2 className="text-3xl font-bold mt-10 mb-4">YouTube</h2>
          <div className="bg-[#FFB1B1] bg-opacity-40 py-10 px-16 rounded-lg shadow-[0_10px_10px_rgba(0,0,0,0.35)]">
            <div className="flex space-x-16 mt-4">
              <VideoCard title="CopyWriter" type="Playlist" provider="Copywriting Youtube" />
              <VideoCard title="CopyWriter" type="Playlist" provider="Copywriting Youtube" />
              <VideoCard title="CopyWriter" type="Playlist" provider="Copywriting Youtube" />
              <VideoCard title="CopyWriter" type="Playlist" provider="Copywriting Youtube" />
            </div>
          </div>

          {/* Course Section */}
          <h2 className="text-3xl font-bold mt-12 mb-4">Course</h2>
          <div className="bg-[#FFB1B1] bg-opacity-40 py-10 px-16 rounded-lg shadow-[0_10px_10px_rgba(0,0,0,0.35)]">
          
            <div className="flex space-x-16 mt-4">
              <CourseCard title="Copywriting Introduction" type="Kelas" provider="Musa" />
              <CourseCard title="Copywriting Introduction" type="Kelas" provider="Musa" />
              <CourseCard title="Copywriting Introduction" type="Kelas" provider="Musa" />
              <CourseCard title="Copywriting Basics" type="Sesi Satu" provider="Musa" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// VideoCard component for displaying YouTube cards
const VideoCard = ({ title, type, provider }) => (
  <div className="bg-white p-4 shadow-md rounded-md w-60">
    <img
      src="https://via.placeholder.com/150"
      alt={title}
      className="w-full h-32 object-cover mb-2"
    />
    <h3 className="text-xl font-semibold text-center">{title}</h3>
    <p className="text-sm text-gray-500">{type}</p>
    <p className="text-sm text-gray-500">{provider}</p>
    <button className="w-full mt-2 bg-[#921A40] text-white px-3 py-1 rounded">
      Lihat Lebih Lanjut
    </button>
  </div>
);

// CourseCard component for displaying Course cards
const CourseCard = ({ title, type, provider }) => (
  <div className="bg-white p-4 shadow-md rounded-md w-60">
    <img
      src="https://via.placeholder.com/150"
      alt={title}
      className="w-full h-32 object-cover mb-2"
    />
    <h3 className="text-lg font-semibold text-center">{title}</h3>
    <p className="text-sm text-gray-500">{type}</p>
    <p className="text-sm text-gray-500">{provider}</p>
    <button className="w-full mt-2 bg-[#921A40] text-white px-3 py-1 rounded">
      Lihat Lebih Lanjut
    </button>
  </div>
);

export default DashboardPelatihan;
