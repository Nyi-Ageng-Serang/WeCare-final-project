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
      recommendation = "Berdasarkan hasil tes, kamu memiliki minat dan bakat yang kuat dalam Digital Marketing. Pertimbangkan untuk mempelajari lebih lanjut tentang strategi pemasaran digital. Kamu bisa mulai dengan mengikuti kursus online dan mengaplikasikan pengetahuanmu dengan mengelola akun media sosial untuk memperkuat pemahaman kamu";
    } else if (highestScore === desainGrafisWithCanva) {
      category = "Desain Grafis";
      recommendation = "Hasil tes menunjukkan bahwa kamu memiliki minat yang tinggi dalam Desain Grafis. Canva adalah alat yang cocok untuk memulai. Pertimbangkan untuk mengambil kursus desain grafis dan berlatih membuat berbagai materi visual untuk meningkatkan keterampilan kamu.";
    } else if (highestScore === uiuxDesign) {
      category = "UI/UX Design";
      recommendation = "Hasil tes menunjukkan bahwa kamu tertarik pada UI/UX Desain. Mulailah dengan mempelajari dasar-dasar UI/UX, termasuk riset pengguna, wireframing, dan prototyping. Kamu bisa mengikuti kursus UI/UX dan berlatih membuat desain antarmuka sederhana untuk meningkatkan keterampilan kamu. Pertimbangkan juga untuk membangun portofolio agar dapat menunjukkan karya kamu kepada calon klien atau perusahaan.";
    } else if (highestScore === copywriting) {
      category = "Copywriting";
      recommendation = "Kamu menunjukkan minat yang besar dalam Copywriting. Mulailah dengan menulis artikel, blog, atau konten untuk situs web. Pertimbangkan untuk mengikuti kursus menulis atau bergabung dengan komunitas penulis untuk mendapatkan umpan balik dan meningkatkan keterampilan kamu.";
    }

    setRecommendedCategory(category);
    setRecommendationText(recommendation);

    localStorage.setItem("recommendedCategory", category);
  }

  const handleDashboardClick = () => {
    navigate("/dashboard/pelatihan", { 
      state: { recommendedCategory } 
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-softPink tracking-normal">
      <div className="w-full max-w-3xl m-2 bg-white md:p-10 p-4 rounded-lg shadow-lg">
        <div className="mb-10 text-center">
          <img src={tesSelesai} width={150} alt="Tes Selesai" className="m-auto" />
          <h2 className="text-lg font-bold text-center mb-6 text-red">
            Hasil Tes Minat Bakat Karier
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
              <Link to="/" onClick={() => navigate(-1)}>Kembali</Link>
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
