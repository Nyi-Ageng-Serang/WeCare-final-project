function HowSection() {
  return (
    <div className="w-full py-6 my-6">
      <div className="container mx-auto px-10 font-semibold tracking-normal">
        <h1 className="text-2xl text-gray-800 font-bold mb-4 mt-6">
          Bagaimana kami membantu?
        </h1>
        <div className="flex flex-col lg:flex-row justify-between gap-6 mt-8">
          <div className="p-4 bg-softPink shadow-md border-l-4 border-red rounded-lg">
            <p>
              Kami menyediakan tes minat dan bakat sederhana untuk membantu kamu
              menemukan bidang pekerjaan yang sesuai dengan minat dan potensimu.
            </p>
          </div>

          <div className="p-4 bg-softPink shadow-md border-l-4 border-red rounded-lg">
            <p>
              Setelah menyelesaikan tes, kami akan merekomendasikan pelatihan
              yang sesuai dengan bakat dan minatmu untuk membantu mengasah
              keterampilan dan mempelajari hal baru. Kamu juga akan mendapatkan
              akses ke berbagai sumber daya karier, seperti CV generator dan
              lowongan kerja dari partner WeCare.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowSection;
