import React, { useState } from 'react';
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

function Dropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <p className="text-lg mt-6">
        Temukan pelatihan yang sesuai dengan hasil tes kamu. Tersedia beberapa pilihan yang disesuaikan dengan tingkat kemampuan untuk pengembangan keterampilan yang lebih mendalam. Agar lebih terarah kamu bisa melihat panduan belajarnya terlebih dahulu sebelum mulai belajar. Semangat!
      </p>
      <button 
        onClick={toggleDropdown} 
        className="w-full mt-4 bg-[#921A40] text-white text-left text-lg px-6 py-2 rounded-lg flex items-center justify-between"
      >
        Panduan Belajar {isDropdownOpen ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
      </button>

      {isDropdownOpen && (
        <div className="mt-4 p-4 bg-white rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-[#921A40]">Panduan Sukses Belajar</h3>
          <ul className="mt-2 space-y-2">
            <li>1. <strong>Mulai dengan Pemahaman Dasar:</strong> Kuasai konsep-konsep dasar untuk membangun fondasi yang kuat.</li>
            <li>2. <strong>Latihan Teratur:</strong> Terapkan materi yang telah dipelajari secara langsung melalui latihan harian.</li>
            <li>3. <strong>Tingkatkan dengan Sumber Tambahan:</strong> Ikuti kursus lanjutan atau baca literatur tambahan untuk memperdalam pengetahuan.</li>
            <li>4. <strong>Evaluasi Kemajuan:</strong> Buat catatan perkembangan dan evaluasi hasil latihan secara berkala.</li>
            <li>5. <strong>Jaga Motivasi dan Keseimbangan:</strong> Tetap termotivasi dengan menetapkan tujuan yang realistis dan menjaga keseimbangan antara belajar dan istirahat.</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Dropdown;
