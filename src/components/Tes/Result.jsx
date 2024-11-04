import { Link, useNavigate } from "react-router-dom";
import tesSelesai from "../../assets/tes selesai.png";
import { useState, useEffect } from "react";

function Result({ bidang, scores }) {
  const [recommendation, setRecommendation] = useState("");
  const recommendations = {
    digitalMarketing: `Berdasarkan hasil tes, kamu memiliki minat dan bakat yang kuat dalam Digital Marketing. Pertimbangkan untuk mempelajari lebih lanjut tentang strategi pemasaran digital. Kamu bisa mulai dengan mengikuti kursus online dan mengaplikasikan pengetahuanmu dengan mengelola akun media sosial untuk memperkuat pemahaman kamu`,
    desainGrafisWithCanva:
      "Hasil tes menunjukkan bahwa kamu memiliki minat yang tinggi dalam Desain Grafis. Canva adalah alat yang cocok untuk memulai. Pertimbangkan untuk mengambil kursus desain grafis dan berlatih membuat berbagai materi visual untuk meningkatkan keterampilan kamu.",
    uiuxDesign:
      "Hasil tes menunjukkan bahwa kamu tertarik pada UI/UX Desain. Mulailah dengan mempelajari dasar-dasar UI/UX, termasuk riset pengguna, wireframing, dan prototyping. Kamu bisa mengikuti kursus UI/UX dan berlatih membuat desain antarmuka sederhana untuk meningkatkan keterampilan kamu. Pertimbangkan juga untuk membangun portofolio agar dapat menunjukkan karya kamu kepada calon klien atau perusahaan.",
    copywriting: `Kamu menunjukkan minat yang besar dalam Copywriting. Mulailah dengan menulis artikel, blog, atau konten untuk situs web. Pertimbangkan untuk mengikuti kursus menulis atau bergabung dengan komunitas penulis untuk mendapatkan umpan balik dan meningkatkan keterampilan kamu.`,
  };
  const navigate = useNavigate();

  useEffect(() => {
    setRecommendation(recommendations[bidang] || "Bidang tidak ditemukan.");
  }, [bidang, recommendations]);

  const handleDashboardClick = () => {
    navigate("/dashboard/pelatihan", { state: { recommendation } });
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
          <h2 className="text-lg font-bold text-center mb-8 text-[#230710]">
            Hasil Tes Bakat Minat Karier
          </h2>

          <p className="font-semibold ">{recommendation}</p>

          {/* <div className="my-4">
            <h3 className="text-xl font-semibold">Skor:</h3>
            <ul className="list-disc list-inside">
              <li>Digital Marketing: {scores.digitalMarketing}</li>
              <li>
                Desain Grafis dengan Canva: {scores.desainGrafisWithCanva}
              </li>
              <li>UI/UX Design: {scores.uiuxDesign}</li>
              <li>Copywriting: {scores.copywriting}</li>
            </ul>
          </div> */}

          <p className="my-10 font-semibold">
            silahkan akses dashboard untuk melihat rekomendasi pelatihan dan
            sumber daya karir lainnya
          </p>
        </div>

        <div className="flex justify-center gap-10">
          <button
            type="button"
            className="w-full py-2 font-semibold border-2 border-red text-red rounded-md text-center hover:bg-pink hover:border-softPink hover:text-red transition duration-200"
          >
            <Link to="/">Kembali</Link>
          </button>
          <button
            type="submit"
            onClick={handleDashboardClick}
            className="w-full py-2 font-semibold border-2 border-red bg-red text-white rounded-md text-center hover:bg-pink hover:border-softPink hover:text-red transition duration-200"
          >
            Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;
