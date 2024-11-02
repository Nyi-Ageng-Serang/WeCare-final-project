import { Link } from "react-router-dom";

function Tes() {
  return (
    <div class="flex justify-center items-center min-h-screen bg-[#fefdfd] font-poppins tracking-normal">
      <div className="w-full max-w-md bg-white bg-opacity-90 border-2 border-white p-10 rounded-lg shadow-lg">
        <div className="mb-10">
          <h1 className="text-xl font-bold text-center mb-6 text-[#230710]">
            Selamat Datang di Tes Minat Bakat
          </h1>

          <div className="space-y-4">
            <p>
              Tes ini terdiri dari 20 pertanyaan yang dirancang untuk
              mengidentifikasi minat dan keahlian kamu. Setelah menjawab semua
              pertanyaan, sistem kami akan menganalisis jawaban kamu dan
              memberikan rekomendasi bidang freelance yang paling cocok untuk
              kamu.
            </p>

            <p>
              Kalau begitu, ayo mulai tesnya dan temukan bidang freelance yang
              paling cocok untuk kamu!
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-10">
          <button
            type="button"
            className="w-full py-2 bg-[#921a40] text-white font-semibold rounded-md hover:bg-pink hover:text-red transition duration-300"
          >
           <Link to="/">Kembali</Link>
          </button>
          <button
            type="submit"
            className="w-full py-2 bg-[#921a40] text-white font-semibold rounded-md hover:bg-pink hover:text-red transition duration-300"
          >
           <Link to="/soal">Mulai Tes</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tes;
