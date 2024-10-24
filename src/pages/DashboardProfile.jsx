import React from 'react';
import Sidebar from '../components/Sidebar'; 

function DashboardProfile() {
  return (
    <>
      <div className="flex">
        <Sidebar /> {/* Memanggil Sidebar */}
        <div className="flex-grow p-8 ml-24 mr-24">
          {/* Header Profile */}
          <h1 className="text-[30pt] font-bold font-sans text-[#921A40]">PROFILE</h1> <br />
          <hr className="border-0 h-px bg-[#921A40] "/>

          {/* Main Content */}
          <div className="flex mt-8 space-x-6">
            {/* Profile Picture */}
            <div className="relative">
              <img 
                alt="Profile" 
              />
              <button>
              </button>
            </div>

            {/* Profile Info */}
            <div>
              <p><span >Nama</span>: Nama Kamu</p>
              <p><span >Tgl Lahir</span>: Tanggal Lahir</p>
              <p><span >Bergabung Sejak</span>: Tanggal Bergabung</p>
            </div>
          </div>

          {/* Recommendation Section */}
          <div>
            <p>
              Berdasarkan Hasil Test Minat Bakat Kamu cenderung cocok dibidang
            </p>
            <div>
              Copywriting
            </div>
          </div>

          {/* Job Description Section */}
          <div>
            <p>Copywriting adalah pekerjaan yang melibatkan penulisan teks atau konten 
              untuk tujuan pemasaran atau promosi. Tujuan utamanya adalah untuk menarik perhatian audiens, memengaruhi 
              mereka, dan mendorong mereka melakukan tindakan tertentu, seperti membeli produk, mendaftar layanan, atau 
              mengikuti sebuah kampanye. Copywriting bisa ditemukan di berbagai bentuk konten, seperti iklan, brosur, 
              website, media sosial, dan email marketing.</p><br />
            <p>Kerja seorang copywriter mencakup:</p>
            <ul>
              <li>Riset: Memahami target audiens, produk, dan pesaing untuk mengetahui apa yang akan menarik perhatian 
                mereka.</li>
              <li>Menulis konten: Membuat teks yang menarik, persuasif, dan sesuai dengan kebutuhan klien atau perusahaan, 
                baik untuk iklan, website, atau kampanye digital.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardProfile;
