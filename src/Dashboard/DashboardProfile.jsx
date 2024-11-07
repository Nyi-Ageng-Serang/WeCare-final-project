import { useState, useEffect } from "react";
import { TbEdit } from "react-icons/tb";
import { setCookie } from "../components/Cookies";
import Header from "./headerComponent";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return "-";
}

function DashboardProfile() {
  const [profileData, setProfileData] = useState({
    nama: "-",
    durasiJedaKarier: "-",
    bergabungSejak: "-",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [recommendedCategory, setRecommendedCategory] = useState("");

  useEffect(() => {
    const savedNama = getCookie("fullName") || "-";
    const savedDurasiJedaKarier = localStorage.getItem("durasiJedaKarier") || "";
    const savedBergabungSejak = localStorage.getItem("tanggalBergabung") || "-";
    const savedRecommendedCategory = localStorage.getItem("recommendedCategory") || "Belum ada rekomendasi";

    setProfileData({
      nama: savedNama,
      durasiJedaKarier: savedDurasiJedaKarier,
      bergabungSejak: savedBergabungSejak,
    });
    setRecommendedCategory(savedRecommendedCategory);
  }, []);

  const handleInputDurasi = (e) => {
    setProfileData({
      ...profileData,
      durasiJedaKarier: e.target.value,
    });
  };

  const handleInputNama = (e) => {
    setProfileData({
      ...profileData,
      nama: e.target.value,
    });
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    localStorage.setItem("durasiJedaKarier", profileData.durasiJedaKarier);
    setCookie("fullName", profileData.nama);
    setIsEditing(false);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-grow py-5 ml-16 mr-4 sm:ml-16 sm:mr-8 lg:ml-72 lg:mr-24">
          {/* Header Profile */}
          <Header title="PROFILE" />
          <hr className="border-0 h-px bg-[#921A40]" />

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row mt-8 space-y-6 lg:space-y-0 lg:space-x-6 gap-8">
            {/* Profile Picture */}
            <div className="relative flex justify-center lg:justify-start">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDwjqEi0rt8OMJJE1mVOukuKTuEiTjRy9-IPm19N0pTdCHSD9sIkQtM-fTYB37HNZ6Hn4PiuXsQ7Mjde7h1-FnCEQ1VMqcPaxlPJu_3YVZT57u03J-958cQes1ppTsfbWjck9wY2SqORo/w422-h640/RED-VELVET-IRENE.jpg"
                alt="Profile"
                className="h-40 w-32 sm:h-48 sm:w-36 md:h-60 md:w-44 lg:h-[248px] lg:w-[190px] rounded-lg object-cover shadow-md"
              />
            </div>

            {/* Profile Info */}
            <div className="relative flex flex-col items-center justify-center bg-[#FFB1B1] bg-opacity-40 rounded-lg shadow-lg w-full lg:w-3/4 h-auto py-4 lg:py-6 px-4 sm:px-8 lg:px-16">
              <div className="items-center w-full">
                <div className="grid grid-cols-[3fr,1fr,8fr] gap-2 mb-2 items-center">
                  <span className="text-left text-sm sm:text-base md:text-lg">
                    Nama
                  </span>
                  <span>:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.nama}
                      onChange={handleInputNama}
                      className="bg-[#FFD2D2] px-2 py-1 rounded-md shadow-inner text-center text-sm sm:text-base"
                    />
                  ) : (
                    <span className="bg-[#FFD2D2] px-2 py-1 rounded-md shadow-inner text-center text-sm sm:text-base">
                      {profileData.nama}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-[3fr,1fr,8fr] gap-2 mb-2 items-center">
                  <span className="text-left text-sm sm:text-base md:text-lg">
                    Durasi jeda karier
                  </span>
                  <span>:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.durasiJedaKarier}
                      onChange={handleInputDurasi}
                      className="bg-[#FFD2D2] px-2 py-1 rounded-md shadow-inner text-center text-sm sm:text-base"
                    />
                  ) : (
                    <span className="bg-[#FFD2D2] px-2 py-1 rounded-md shadow-inner text-center text-sm sm:text-base">
                      {profileData.durasiJedaKarier || "(e.g 2 tahun 6 bulan)"}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-[3fr,1fr,8fr] gap-2 items-center">
                  <span className="text-left text-sm sm:text-base md:text-lg">
                    Bergabung Sejak
                  </span>
                  <span>:</span>
                  <span className="bg-[#FFD2D2] px-2 py-1 rounded-md shadow-inner text-center text-sm sm:text-base">
                    {profileData.bergabungSejak}
                  </span>
                </div>

                {isEditing ? (
                  <button
                    onClick={handleSaveProfile}
                    className="absolute right-3 bottom-3 bg-[#921A40] text-white py-1 px-4 font-semibold rounded-md"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={handleEditProfile}
                    className="absolute right-2 bottom-2 bg-[#921A40] text-white p-2 rounded-full shadow-lg"
                  >
                    <TbEdit size={24} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Recommendation Section */}
          <div className="mt-8 bg-[#FFB1B1] bg-opacity-40 p-4 lg:p-6 rounded-lg shadow-lg">
            <p className="text-center font-semibold text-sm sm:text-base md:text-lg mb-4">
              Berdasarkan Hasil Test Minat Bakat Kamu cenderung cocok dibidang
            </p>
            <div className="bg-[#921A40] text-white text-center py-2 rounded-lg shadow-md text-sm sm:text-base">
              {recommendedCategory}
            </div>
          </div>

          {/* Job Description Section */}
          <div className="mt-8 bg-[#FFB1B1] bg-opacity-40 p-4 lg:p-6 rounded-lg shadow-lg">
            <p className="font-semibold text-sm sm:text-base md:text-lg">
              Copywriting adalah pekerjaan yang melibatkan penulisan teks atau
              konten untuk tujuan pemasaran atau promosi...
            </p>
            {/* ... lanjutkan deskripsi lainnya */}
          </div>

          
        </div>
      </div>
    </>
  );
}

export default DashboardProfile;
