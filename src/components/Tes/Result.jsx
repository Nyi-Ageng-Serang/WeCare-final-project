import { Link } from "react-router-dom";

function Result({ bidang, scores }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#fefdfd] font-poppins tracking-normal">
      <div className="w-full max-w-md bg-white bg-opacity-90 border-2 border-white p-10 rounded-lg shadow-lg">
        <div className="mb-10">
          <h2 className="text-xl font-bold">Hasil Tes</h2>
          <p className="mt-4 text-lg">
            Bidang yang direkomendasikan untuk Kamu adalah:
            <strong>{bidang}</strong>
          </p>

          <div className="my-4">
            <h3 className="text-xl font-semibold">Skor:</h3>
            <ul className="list-disc list-inside">
              <li>Digital Marketing: {scores.digitalMarketing}</li>
              <li>
                Desain Grafis dengan Canva: {scores.desainGrafisWithCanva}
              </li>
              <li>UI/UX Design: {scores.uiuxDesign}</li>
              <li>Copywriting: {scores.copywriting}</li>
            </ul>
          </div>

          <p>
            silahkan akses dashboard untuk melihat rekomendasi pelatihan dan
            sumber daya karir lainnya
          </p>
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
            <Link to="">Dashboard</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;
