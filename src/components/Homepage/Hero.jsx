import hero from "../../assets/hero (3).png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="w-full py-6 my-6">
      <div className="container mx-auto px-10">
        <div className="flex flex-col lg:flex-row justify-between gap-10 items-center tracking-normal">
          {/* Hero Text */}
          <div className="w-full">
            <small className="inline-block font-bold uppercase text-red bg-softPink rounded-full px-6 py-2 shadow-md">
              Welcome to WeCaRe
            </small>

            <h1 className="text-4xl text-gray-800 font-bold mb-4 mt-6">
              Women Career Return
            </h1>

            <p className="mb-8 font-medium">
              Kami hadir untuk membantu perempuan yang mengalami career break
              agar bisa kembali berkarier dengan waktu kerja yang lebih
              fleksibel. Kami percaya bahwa setiap perempuan memiliki potensi
              besar untuk kembali berkarier, menemukan passion baru, dan tetap
              produktif di tengah kesibukan keluarga.
            </p>

            <button className="inline-block font-semibold border-2 border-red bg-red text-white py-2 px-6 rounded-full hover:bg-softPink hover:border-softPink hover:text-red">
              <Link to="/About">Selengkapnya</Link>
            </button>
          </div>

          {/* Hero Image */}
          <div className="lg:w-3/5 md:w-3/4 h-auto">
            <img src={hero} alt="Women Career Return" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
