import partner from "../../assets/pelatihan (2).png";

function HeroPartner() {
  return (
    <div className="w-full py-6">
      <div className="container mx-auto px-10">
        <div className="flex flex-col lg:flex-row justify-between gap-10 items-center tracking-normal">
          {/* Partner Text */}
          <div className="w-full">
            <h1 className="lg:text-4xl text-2xl font-bold mb-4 mt-6">
              Memberdayakan Perempuan dan Memberikan Dampak Positif Bersama
              WeCare
            </h1>
            <p className="mb-8 font-semibold">
              Lebih dari 50+ perusahaan telah bekerja sama dengan WeCare untuk
              memberikan akses kembali ke dunia kerja bagi perempuan dengan
              career break di Indonesia.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfVmoH8akEP2XyBOtcWaiHQBS9CimiUUFiW45FL-GK3_Y6Rgg/viewform"
              target="_balnk"
              className="inline-block font-semibold border-2 border-red bg-red text-white py-2 px-6 rounded-full hover:bg-softPink hover:border-softPink hover:text-red"
            >
              Gabung Partner Wecare
            </a>
          </div>

          {/* Partner Image */}
          <div className="lg:w-3/5 md:w-3/4 h-auto">
            <img src={partner} alt="Women Career Return" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPartner;
