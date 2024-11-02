import { useContext, useState } from "react";
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
    <form
      className="container mx-auto my-10 flex justify-center items-center bg-white"
      onSubmit={handleSubmit}
    >
      <div className="w-full max-w-3xl p-6 rounded-lg shadow-lg">
        {tes[0].digitalMarketing.map((soal, soalIndex) => (
          <div key={soalIndex} className="mb-12">
            <p className="pb-4 font-semibold">{soal.pertanyaan}</p>
            <div className="space-y-2">
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
                      className="block p-2 border rounded-lg cursor-pointer transition-color hover:bg-softPink
                        peer-checked:bg-red 
                        peer-checked:text-white
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
            <p className="pb-4 font-semibold">{soal.pertanyaan}</p>
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
                      className="block p-2 border rounded-lg cursor-pointer transition-color hover:bg-softPink
                        peer-checked:bg-red 
                        peer-checked:text-white
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
            <p className="pb-4 font-semibold">{soal.pertanyaan}</p>
            <div className="space-y-2">
              {soal.pilihan.map((pilihan, pilihanIndex) => (
                <div key={pilihanIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`uiuxDesign${soalIndex}`}
                      value={pilihan.value}
                      className="hidden peer"
                      onChange={() => handleSelect("uiuxDesign", pilihan.value)}
                    />
                    <span
                      className="block p-2 border rounded-lg cursor-pointer transition-color hover:bg-softPink
                        peer-checked:bg-red 
                        peer-checked:text-white
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
            <p className="pb-4 font-semibold">{soal.pertanyaan}</p>
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
                      className="block p-2 border rounded-lg cursor-pointer transition-color hover:bg-softPink
                        peer-checked:bg-red 
                        peer-checked:text-white
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
            className="w-full py-2 bg-[#921a40] text-white font-semibold rounded-md hover:bg-pink hover:text-red transition duration-300"
          >
            Kembali
          </button>
          <button
            type="submit"
            className="w-full py-2 bg-[#921a40] text-white font-semibold rounded-md hover:bg-pink hover:text-red transition duration-300"
          >
            Selesai
          </button>
        </div>
      </div>
    </form>
  );
}

export default Soal;
