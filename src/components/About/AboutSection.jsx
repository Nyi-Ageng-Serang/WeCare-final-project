import About from "../../assets/freelance.png";

function AboutSection() {
  return (
    <div className="w-full py-6 my-6">
      <div className="container mx-auto px-10">
        <div className="flex flex-col lg:flex-row justify-between gap-10 items-center tracking-normal">
          <div className="w-full">
            <h1 className="text-4xl text-gray-800 font-bold mb-4 mt-6">
              Women Career Return
            </h1>

            <p className="mt-8 font-semibold">
              Sebuah platform yang didedikasikan untuk membantu perempuan yang
              ingin kembali berkarier setelah mengalami career break. Kami
              memahami bahwa transisi kembali ke dunia kerja, terutama dengan
              tanggung jawab keluarga, bisa menjadi tantangan tersendiri.
            </p>

            <p className="mt-4 font-semibold">
              Itulah mengapa kami berfokus untuk menyediakan akses ke peluang
              kerja fleksibel yang dapat disesuaikan dengan kebutuhan pribadi
              setiap perempuan, baik dari segi waktu maupun lokasi kerja.
            </p>
          </div>

          <div className="lg:w-1/2 md:w-3/4 h-auto">
            <img src={About} alt="Women Career Return" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
