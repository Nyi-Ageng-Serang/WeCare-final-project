function Layanan() {
  return (
    <div className="bg-softPink">
      <div className="w-full py-6 my-16">
        <div className="container mx-auto px-8">
          <h1 className="text-center text-3xl font-bold mb-6">
            Layanan Kolaborasi di WeCare &#129309;
          </h1>

          <div className="flex flex-col md:flex-row justify-between Md:gap-16 gap-8 items-stretch py-8 tracking-normal">
            <div className="bg-backgroud md:w-1/2 space-y-6 p-4 rounded-lg shadow-md">
              <h1 className="text-2xl font-semibold text-center text-red">
                Lowongan Pekerjaan &#128188;
              </h1>
              <p>
                Temukan talenta berkualitas dari perempuan career break yang
                siap beradaptasi dengan pekerjaan fleksibel dan berkontribusi
                untuk tim Anda.
              </p>
            </div>

            <div className="bg-backgroud md:w-1/2 space-y-6 p-4 rounded-lg shadow-md">
              <h1 className="text-2xl font-semibold text-center text-red">
                Pelatihan dan Pengembangan &#128218;
              </h1>
              <p>
                Bergabunglah dalam program pelatihan dan pengembangan WeCare
                untuk membantu perempuan meningkatkan keterampilan dan
                mempersiapkan mereka kembali ke dunia kerja.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layanan;
