import About from "../../assets/job (2).png";

function WhySection() {
  return (
    <div className="w-full py-6 my-6">
      <div className="container mx-auto px-10">
        <div className="flex flex-col lg:flex-row justify-between gap-10 items-center tracking-normal">
          <div className="w-full">
            <h1 className="text-2xl text-gray-800 font-bold mb-4 mt-6">
              Tapi Kenapa Harus Tes Minat dan Bakat?
            </h1>

            <p className="mb-4 mt-6 font-semibold">
              Setiap orang punya minat dan keahlian unik, namun sering kali
              belum yakin di mana bakat kita sebenarnya. Tes minat dan bakat
              kami membantu kamu menemukan bidang freelance yang sesuai,
              sehingga kamu bisa memilih pekerjaan yang tidak hanya
              menghasilkan, tapi juga sesuai dengan minatmu.
            </p>

            <p className="font-semibold">
              Jadi, tunggu apa lagi? Mulailah perjalanan karirmu yang baru
              dengan WeCare dan temukan keseimbangan antara keluarga dan
              pekerjaan yang selama ini kamu impikan!
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

export default WhySection;
