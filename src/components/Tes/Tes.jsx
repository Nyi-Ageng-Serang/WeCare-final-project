import { Link } from "react-router-dom";

function Tes() {
  return (
    <div class="flex justify-center items-center min-h-screen tracking-normal">
      <div className="w-full m-2 max-w-md bg-white p-10 rounded-lg shadow-lg">
        <div className="mb-10">
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

        <div className="flex justify-center gap-8">
          <button
            type="button"
            className="w-full py-2 font-semibold border-2 border-red text-red rounded-md text-center hover:bg-softPink hover:border-softPink hover:text-red transition duration-300"
          >
            <Link to="/">Kembali</Link>
          </button>
          <button
            type="submit"
            className="w-full py-2 font-semibold border-2 border-red bg-red text-white rounded-md text-center hover:bg-softPink hover:border-softPink hover:text-red transition duration-300"
          >
            <Link to="/soal">Mulai Tes</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tes;
