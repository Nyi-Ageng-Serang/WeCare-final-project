import { useState } from "react";

function Keuntungan() {
  const [active, setActive] = useState("talent");
  return (
    <>
      <div className="w-full py-6 my-6">
        <div className="container mx-auto px-8">
          <h1 className="text-center text-3xl font-bold mb-8">
            Keuntungan Menjadi Partner WeCare
          </h1>

          <div className="lg:w-1/2 m-auto">
            <div className="flex justify-between text-lg font-bold mb-10">
              <div className="w-1/2">
                <button
                  onClick={() => setActive("talent")}
                  className={` ${
                    active === "talent"
                      ? "border-b-2 border-red"
                      : "border-gray-300"
                  }`}
                >
                  &#128188; Lowongan Pekerjaan
                </button>
              </div>

              <div className="w-1/2">
                <button
                  onClick={() => setActive("onwer")}
                  className={` ${
                    active === "onwer"
                      ? "border-b-2 border-red"
                      : "border-gray-300"
                  }`}
                >
                  &#128218; Pelatihan Pengembangan
                </button>
              </div>
            </div>
          </div>

          {active === "talent" && (
            <div className="flex flex-col md:flex-row justify-between md:gap-16 gap-6 py-4 tracking-normal">
              <div className="md:w-1/2 space-y-6">
                <div>
                  <h1 className="font-semibold">
                    &#10004; Akses ke Talenta Berkualitas
                  </h1>
                  <p>
                    Dapatkan kandidat perempuan berbakat yang siap kembali
                    bekerja dengan keterampilan relevan dan adaptif terhadap
                    kebutuhan fleksibilitas perusahaan.
                  </p>
                </div>
                <div>
                  <h1 className="font-semibold">
                    &#10004; Peningkatan Keberagaman dan Inklusi
                  </h1>
                  <p>
                    Membantu perusahaan mencapai keberagaman dengan
                    mempekerjakan kandidat yang membawa perspektif baru dan
                    pengalaman berharga.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 space-y-6">
                <div>
                  <h1 className="font-semibold">
                    &#10004; Rekrutmen yang Efisien
                  </h1>
                  <p>
                    Kandidat yang disaring berdasarkan pelatihan dan kesiapan
                    kerja memungkinkan proses rekrutmen lebih cepat dan akurat.
                  </p>
                </div>
                <div>
                  <h1 className="font-semibold">
                    &#10004; Pasang Lowongan Gratis
                  </h1>
                  <p>
                    Nikmati keuntungan memasang lowongan pekerjaan tanpa biaya,
                    membuka peluang lebih luas untuk menemukan kandidat ideal
                    tanpa tambahan biaya pemasangan.
                  </p>
                </div>
              </div>
            </div>
          )}
          {active === "onwer" && (
            <div className="flex flex-col md:flex-row justify-between md:gap-16 gap-4 py-4 tracking-normal">
              <div className="md:w-1/2 space-y-6">
                <div>
                  <h1 className="font-semibold">
                    &#10004; Kolaborasi dalam Program Pengembangan Keterampilan
                  </h1>
                  <p>
                    Sebagai mitra, perusahaan Anda dapat menyediakan pelatihan
                    yang membantu perempuan dalam masa career break untuk
                    mempersiapkan diri kembali ke dunia kerja dengan
                    keterampilan terbaru sesuai kebutuhan industri.
                  </p>
                </div>
                <div>
                  <h1 className="font-semibold">
                    &#10004; Kesempatan untuk Mengembangkan Talenta dengan
                    Keterampilan Relevan
                  </h1>
                  <p>
                    Partisipasi Anda dalam program pelatihan WeCare membantu
                    memperluas akses perempuan terhadap keterampilan terkini dan
                    meningkatkan kesiapan mereka untuk kembali ke dunia kerja.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 space-y-6">
                <div>
                  <h1 className="font-semibold">
                    &#10004; Branding dan Eksposur Luas di Komunitas WeCare
                  </h1>
                  <p>
                    Program pelatihan yang Anda tawarkan akan dipromosikan
                    melalui platform WeCare, memperkuat citra perusahaan Anda
                    sebagai pemimpin dalam pemberdayaan perempuan di dunia
                    kerja.
                  </p>
                </div>
                <div>
                  <h1 className="font-semibold">
                    &#10004; Dampak Sosial yang Nyata
                  </h1>
                  <p>
                    Melalui kemitraan ini, perusahaan Anda berkontribusi
                    langsung pada pemberdayaan perempuan dan mendukung misi
                    sosial WeCare dalam menciptakan tenaga kerja yang inklusif
                    dan siap beradaptasi dengan perkembangan industri.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Keuntungan;
