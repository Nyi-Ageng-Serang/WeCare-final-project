import { Link } from "react-router-dom";
import TesBakatMinat from "../../assets/tesMinatBakat.png";

function Tes() {
  return (
    <div class="flex justify-center items-center min-h-screen tracking-normal">
      <div className="w-full max-w-3xl m-2 bg-[#FFEDED] md:p-10 p-4 rounded-lg shadow-lg">
        <div className="mb-10 text-center">
          <img
            src={TesBakatMinat}
            width={200}
            alt="Tes Bakat Minat"
            className="m-auto"
          />
          <h1 className="text-xl font-bold text-center mb-8 text-[#230710]">
            Selamat Datang di Tes Minat Bakat
          </h1>

          <div className="font-medium space-y-4">
            <p>
              Tes ini berisi 20 pertanyaan yang dirancang untuk mengenali minat
              dan keahlian kamu. Setelah menyelesaikan tes, sistem kami akan
              menganalisis jawaban kamu dan merekomendasikan bidang pekerjaan
              yang paling sesuai.
            </p>

            <p>
              Kalau begitu, ayo mulai tesnya dan temukan karier yang cocok untuk
              kamu!
            </p>
          </div>
        </div>

        <div className="flex justify-between gap-10">
          <button
            type="button"
            className="w-full py-2 font-semibold border-2 border-red text-red rounded-md text-center hover:bg-pink hover:border-softPink hover:text-red transition duration-200"
          >
            <Link to="/">Kembali</Link>
          </button>
          <button
            type="submit"
            className="w-full py-2 font-semibold border-2 border-red bg-red text-white rounded-md text-center hover:bg-pink hover:border-softPink hover:text-red transition duration-200"
          >
            <Link to="/soal">Mulai Tes</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tes;
