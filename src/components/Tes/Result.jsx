import { useEffect, useState } from "react";
import tesSelesai from "../../assets/tes selesai.png";
import { Link, useNavigate } from "react-router-dom";

function Result({ scores }) {
  const [recommendedCategory, setRecommendedCategory] = useState("");
  const [recommendationText, setRecommendationText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    determineRecommendation();
  }, [scores]);

  function determineRecommendation() {
    const { digitalMarketing, desainGrafisWithCanva, uiuxDesign, copywriting } = scores;
    const highestScore = Math.max(digitalMarketing, desainGrafisWithCanva, uiuxDesign, copywriting);
    
    let category = "";
    let recommendation = "";

    if (highestScore === digitalMarketing) {
      category = "Digital Marketing";
      recommendation = "Berdasarkan hasil tes, kamu memiliki minat dan bakat yang kuat dalam mengelola Digital Marketing dan media sosial. Pertimbangkan untuk mempelajari lebih lanjut tentang manajemen akun media sosial, pembuatan konten, dan strategi pemasaran digital. kamu dapat mulai dengan kursus online atau bergabung dengan komunitas profesional di bidang ini.";
    } else if (highestScore === desainGrafisWithCanva) {
      category = "Graphic Design";
      recommendation = "Hasil tes kamu menunjukkan bahwa kamu memiliki minat yang tinggi dalam desain grafis. Canva adalah alat yang sangat baik untuk memulai. Pertimbangkan untuk mengambil kursus desain grafis dan berlatih membuat berbagai materi visual untuk meningkatkan keterampilan kamu.";
    } else if (highestScore === uiuxDesign) {
      category = "UI/UX Design";
      recommendation = "Kamu tampaknya memiliki minat yang kuat dalam desain UI/UX. Ini adalah bidang yang sangat berharga, terutama dalam industri teknologi. Pertimbangkan untuk belajar lebih dalam tentang prinsip desain UI/UX dan pengalaman pengguna.";
    } else if (highestScore === copywriting) {
      category = "Content CopyWriting";
      recommendation = "Kamu menunjukkan minat yang besar dalam menulis konten. Mulailah dengan menulis artikel, blog, atau konten untuk situs web. Pertimbangkan untuk mengikuti kursus menulis atau bergabung dengan kelompok penulis untuk mendapatkan umpan balik dan meningkatkan keterampilan kamu.";
    }

    setRecommendedCategory(category);
    setRecommendationText(recommendation);
  }

  const handleDashboardClick = () => {
    navigate("/dashboard/pelatihan", { state: { recommendedCategory } });
  };

  const handleBackClick = () => {
    navigate(-1); // Navigates to the previous page
  };

  return (
    <div className="flex justify-center items-center min-h-screen tracking-normal">
      <div className="w-full max-w-3xl m-2 bg-[#FFEDED] md:p-10 p-4 rounded-lg shadow-lg">
        <div className="mb-10 text-center">
          <img
            src={tesSelesai}
            width={200}
            alt="Tes Selesai"
            className="m-auto"
          />
          <h2 className="text-lg font-bold text-center mb-6 text-[#230710]">
            Hasil Tes Bakat Minat Karier
          </h2>
          <p className="font-semibold">
            Bidang yang direkomendasikan untuk Kamu adalah:
            <strong> {recommendedCategory}</strong>
          </p>
          <p className="mt-2">{recommendationText}</p>

          <p className="my-4">
            Silahkan akses dashboard untuk melihat rekomendasi pelatihan dan sumber daya karir lainnya.
          </p>

          <div className="flex justify-center gap-10">
            <button
              type="button"
              className="w-full py-2 font-semibold border-2 border-red text-red rounded-md text-center hover:bg-pink hover:border-softPink hover:text-red transition duration-200"
            >
              <Link to="/" onClick={handleBackClick}>Kembali</Link>
            </button>
            <button
              type="button"
              onClick={handleDashboardClick}
              className="w-full py-2 font-semibold border-2 border-red bg-red text-white rounded-md text-center hover:bg-pink hover:border-softPink hover:text-red transition duration-200"
            >
              Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
