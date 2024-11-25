import { Link, useNavigate } from "react-router-dom";
import { getCookie } from "../Cookies";
import career from "../../assets/rekomendasi.png";

function Career() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    const token = getCookie("token");
    if (!token) {
      e.preventDefault();
      alert("Silakan login terlebih dahulu untuk mengikuti tes.");
      navigate("/");
    }
  };

  return (
    <div className="w-full py-6 my-6">
      <div className="container mx-auto px-10">
        <div className="flex flex-col lg:flex-row justify-between gap-10 items-center tracking-normal">
          {/* Career Text */}
          <div className="w-full">
            <small className="inline-block font-bold uppercase text-red bg-softPink rounded-full px-6 py-2 shadow-md">
              Career
            </small>

            <h1 className="text-3xl text-gray-800 font-bold mb-4 mt-6">
              Mulai Perjalanan Karirmu dengan tes Minat Bakat
            </h1>

            <p className="mb-8 font-semibold">
              Tes ini akan membantu kamu mendapatkan gambaran tentang minat dan
              bakat yang kamu miliki. Berdasarkan hasil tes, kami akan
              memberikan rekomendasi bidang pekerjaan fleksibel yang paling
              cocok untuk kamu. Setelah tes selsai, kamu bisa mengakses sumber
              daya pelatihan untuk mengasah skillmu.
            </p>

            <button
              onClick={handleClick}
              className="inline-block font-semibold border-2 border-red bg-red text-white py-2 px-6 rounded-full hover:bg-softPink hover:border-softPink hover:text-red"
            >
              <Link to="/tes">Ikuti tes Minat Bakat</Link>
            </button>
          </div>

          {/* Career Image */}
          <div className="lg:w-3/5 md:w-3/4 h-auto">
            <img src={career} alt="Women Career Return" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
