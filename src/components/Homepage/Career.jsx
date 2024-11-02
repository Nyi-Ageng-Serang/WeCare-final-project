import { Link } from "react-router-dom";
import career from "../../assets/rekomendasi.png";

function Career() {
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
              Mulai Perjalanan Karirmu dengan tes Bakat Minat
            </h1>

            <p className="mb-8 font-semibold">
              Tes ini akan membantu kamu mendapatkan gambaran tentang bakat dan
              minat yang kamu miliki. Berdasarkan hasil tes, kami akan
              memberikan rekomendasi bidang pekerjaan yang paling cocok untuk
              kamu. Setelah itu kamu akan diarahkan ke dashboard untuk mengakses
              rekomendasi pelatihan dan sumber daya karir lainnya seperti
              panduan CV, portfolio, tips interview, dan personal branding.
            </p>

            <button className="inline-block font-semibold border-2 border-red bg-red text-white py-2 px-6 rounded-full hover:bg-softPink hover:border-softPink hover:text-red">
              <Link to="/tes">Ikuti tes Bakat Minat</Link>
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
