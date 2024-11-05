import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TesContext } from "../../context/TesProvider";
import Result from "./Result";

function Soal() {
  const { tes } = useContext(TesContext);
  const [scores, setScores] = useState({
    digitalMarketing: 0,
    desainGrafisWithCanva: 0,
    uiuxDesign: 0,
    copywriting: 0,
  });

  const [hasilResult, setHasilResult] = useState(null);
  const [submit, setSubmit] = useState(false);

  const handleSelect = (bidang, value) => {
    setScores((prevScores) => ({
      ...prevScores,
      [bidang]: prevScores[bidang] + value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mencari bidang dengan skor tertinggi
    const maxBidang = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );

    setHasilResult(maxBidang);
    setSubmit(true);
  };

  if (submit) {
    return <Result bidang={hasilResult} scores={scores} />;
  }

  return (
    <div className="bg-softPink">
      <form
        className="bg-softPink container mx-auto py-4 flex justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="bg-white w-full max-w-2xl p-6 mx-4 rounded-lg shadow-lg">
          {tes[0].digitalMarketing.map((soal, soalIndex) => (
            <div key={soalIndex} className="mb-12">
              <p className="pb-6 text-[18px] text-red font-medium">
                {soal.pertanyaan}
              </p>
              <div className="space-y-3">
                {soal.pilihan.map((pilihan, pilihanIndex) => (
                  <div key={pilihanIndex}>
                    <label>
                      <input
                        type="radio"
                        name={`digitalMarketing${soalIndex}`}
                        value={pilihan.value}
                        className="hidden peer"
                        onChange={() =>
                          handleSelect("digitalMarketing", pilihan.value)
                        }
                      />
                      <span
                        className="block p-2 border hover:font-medium rounded-lg cursor-pointer bg-white hover:bg-softPink hover:text-red hover:border-softPink
                        peer-checked:bg-softPink
                        peer-checked:text-red
                        peer-checked:font-medium
                        peer-checked:border-transparent"
                      >
                        {pilihan.answer}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {tes[0].DesainGrafisWithCanva.map((soal, soalIndex) => (
            <div key={soalIndex} className="mb-12">
              <p className="pb-6 text-[18px] text-red font-medium">
                {soal.pertanyaan}
              </p>
              <div className="space-y-2">
                {soal.pilihan.map((pilihan, pilihanIndex) => (
                  <div key={pilihanIndex}>
                    <label>
                      <input
                        type="radio"
                        name={`desainGrafisWithCanva${soalIndex}`}
                        value={pilihan.value}
                        className="hidden peer"
                        onChange={() =>
                          handleSelect("desainGrafisWithCanva", pilihan.value)
                        }
                      />
                      <span
                        className="block p-2 border hover:font-medium rounded-lg cursor-pointer bg-white hover:bg-softPink hover:text-red hover:border-softPink
                        peer-checked:bg-softPink
                        peer-checked:text-red
                        peer-checked:font-medium
                        peer-checked:border-transparent"
                      >
                        {pilihan.answer}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {tes[0].UIUXDesign.map((soal, soalIndex) => (
            <div key={soalIndex} className="mb-12">
              <p className="pb-6 text-[18px] text-red font-medium">
                {soal.pertanyaan}
              </p>
              <div className="space-y-2">
                {soal.pilihan.map((pilihan, pilihanIndex) => (
                  <div key={pilihanIndex}>
                    <label>
                      <input
                        type="radio"
                        name={`uiuxDesign${soalIndex}`}
                        value={pilihan.value}
                        className="hidden peer"
                        onChange={() =>
                          handleSelect("uiuxDesign", pilihan.value)
                        }
                      />
                      <span
                        className="block p-2 border hover:font-medium rounded-lg cursor-pointer bg-white hover:bg-softPink hover:text-red hover:border-softPink
                        peer-checked:bg-softPink
                        peer-checked:text-red
                        peer-checked:font-medium
                        peer-checked:border-transparent"
                      >
                        {pilihan.answer}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {tes[0].Copywriting.map((soal, soalIndex) => (
            <div key={soalIndex} className="mb-12">
              <p className="pb-6 text-[18px] text-red font-medium">
                {soal.pertanyaan}
              </p>
              <div className="space-y-2">
                {soal.pilihan.map((pilihan, pilihanIndex) => (
                  <div key={pilihanIndex}>
                    <label>
                      <input
                        type="radio"
                        name={`copywriting${soalIndex}`}
                        value={pilihan.value}
                        className="hidden peer"
                        onChange={() =>
                          handleSelect("copywriting", pilihan.value)
                        }
                      />
                      <span
                        className="block p-2 border hover:font-medium rounded-lg cursor-pointer bg-white hover:bg-softPink hover:text-red hover:border-softPink
                        peer-checked:bg-softPink
                        peer-checked:text-red
                        peer-checked:font-medium
                        peer-checked:border-transparent"
                      >
                        {pilihan.answer}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="flex justify-center gap-10">
            <button
              type="button"
              className="w-full py-2 font-semibold border-2 border-red text-red rounded-md hover:bg-softPink hover:border-softPink hover:text-red"
            >
              <Link to="/tes">Kembali</Link>
            </button>
            <button
              type="submit"
              className="w-full py-2 font-semibold border-2 border-red bg-red text-white rounded-md hover:bg-softPink hover:border-softPink hover:text-red"
            >
              Selesai
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Soal;
