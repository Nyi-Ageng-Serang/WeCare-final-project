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
              Kami menyediakan tes minat dan bakat sederhana yang membantu kamu
              menemukan bidang pekerjaan sesuai minat dan potensi.
            </p>
          </div>

          <div className="p-4 bg-softPink shadow-md border-l-4 border-red rounded-lg">
            <p>
              Setelah tes selesai, kami akan merekomendasikan pelatihan sesuai
              bidang bakat dan minatmu, membantu mengasah atau mempelajari
              keterampilan baru. Kamu juga akan mendapatkan akses ke sumber daya
              karier lainnya, seperti CV generator, pengembangan portofolio, dan
              lowongan kerja dari partner WeCare.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowSection;
