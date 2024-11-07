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
      recommendation = "Berdasarkan hasil tes, kamu memiliki minat dan bakat yang kuat dalam mengelola Digital Marketing dan media sosial...";
    } else if (highestScore === desainGrafisWithCanva) {
      category = "Desain Grafis";
      recommendation = "Hasil tes kamu menunjukkan bahwa kamu memiliki minat yang tinggi dalam desain grafis...";
    } else if (highestScore === uiuxDesign) {
      category = "UI/UX Design";
      recommendation = "Kamu tampaknya memiliki minat yang kuat dalam desain UI/UX...";
    } else if (highestScore === copywriting) {
      category = "CopyWriting";
      recommendation = "Kamu menunjukkan minat yang besar dalam menulis konten...";
    }

    setRecommendedCategory(category);
    setRecommendationText(recommendation);

    // Simpan category ke localStorage
    localStorage.setItem("recommendedCategory", category);
  }

  const handleDashboardClick = () => {
    navigate("/dashboard/pelatihan", { 
      state: { recommendedCategory } 
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-softPink tracking-normal">
      <div className="w-full max-w-2xl m-2 bg-white md:p-10 p-4 rounded-lg shadow-lg">
        <div className="mb-10 text-center">
          <img src={tesSelesai} width={200} alt="Tes Selesai" className="m-auto" />
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
