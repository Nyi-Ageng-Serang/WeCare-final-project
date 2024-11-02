import partner from "../../assets/pelatihan (2).png";

function Partner() {
  return (
    <div className="w-full py-6 my-6">
      <div className="container mx-auto px-10">
        <div className="flex flex-col lg:flex-row justify-between gap-10 items-center tracking-normal">
          {/* Partner Text */}
          <div className="w-full">
            <small className="inline-block font-bold uppercase text-red bg-softPink rounded-full px-6 py-2 shadow-md">
              Partner
            </small>

            <h1 className="text-2xl font-bold mb-4 mt-6">
              Bersama untuk Mendukung Perempuan Kembali Berkarier!
            </h1>
            <p className="mb-8 font-semibold">
              WeCare berkomitmen membantu perempuan yang mengalami career break
              kembali bekerja. Ayo berkolaborasi dan bersama-sama ciptakan
              peluang untuk masa depan yang lebih baik bagi mereka!
            </p>

            <a
              href=""
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

export default Partner;
