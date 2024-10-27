import { useContext } from "react";
import { TesContext } from "../../context/TesProvider";

function Tes() {
  const { tes, setTes } = useContext(TesContext);

  return (
    <form className="container mx-auto my-10 flex justify-center items-center bg-white">
      <div className="w-full max-w-3xl p-6 rounded-lg shadow-lg">
        {tes[0].digitalMarketing.map((soal, soalIndex) => (
          <div key={soalIndex} className="mb-6">
            <p className="pb-4 font-semibold">{soal.pertanyaan}</p>
            <div className="space-y-2">
              {soal.pilihan.map((pilihan, pilihanIndex) => (
                <div key={pilihanIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`soal${soalIndex}`}
                      value={pilihan.value}
                      className="hidden peer"
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
          <div key={soalIndex} className="mb-6">
            <p className="pb-4 font-semibold">{soal.pertanyaan}</p>
            <div className="space-y-2">
              {soal.pilihan.map((pilihan, pilihanIndex) => (
                <div key={pilihanIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`soal${soalIndex}`}
                      value={pilihan.value}
                      className="hidden peer"
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
          <div key={soalIndex} className="mb-6">
            <p className="pb-4 font-semibold">{soal.pertanyaan}</p>
            <div className="space-y-2">
              {soal.pilihan.map((pilihan, pilihanIndex) => (
                <div key={pilihanIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`soal${soalIndex}`}
                      value={pilihan.value}
                      className="hidden peer"
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
          <div key={soalIndex} className="mb-6">
            <p className="pb-4 font-semibold">{soal.pertanyaan}</p>
            <div className="space-y-2">
              {soal.pilihan.map((pilihan, pilihanIndex) => (
                <div key={pilihanIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`soal${soalIndex}`}
                      value={pilihan.value}
                      className="hidden peer"
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
          <button className="w-full py-2 bg-[#921a40] text-white font-semibold rounded-md hover:bg-pink hover:text-red transition duration-300">
            Kembali
          </button>
          <button className="w-full py-2 bg-[#921a40] text-white font-semibold rounded-md hover:bg-pink hover:text-red transition duration-300">
            Selesai
          </button>
        </div>
      </div>
    </form>
  );
}

export default Tes;
