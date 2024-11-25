import newsImage from "../../assets/artikel.jpeg";
import penghargaanImage from "../../assets/penghargaan.png";
import peluncuranImage from "../../assets/9.png";
import WebinarImage from "../../assets/pelatihan (2).png";

const NewsSection = () => {
  const newsItems = [
    {
      title: "Peluncuran WeCare dihadiri berbagai tokoh penting",
      description:
        "Setelah melewati berbagai tahap pengembangan, pada Januari 2025 WeCare Resmi diluncurkan...",
      image: newsImage,
    },
    {
      title: "WeCare Mendapat Penghargaan Inovasi Teknologi",
      description:
        "Dalam acara penghargaan teknologi tahunan, WeCare berhasil meraih penghargaan di bidang inovasi...",
      image: newsImage,
    },
    {
      title: "Pelatihan Partnership akan segera diluncurkan",
      description:
        "WeCare akan segera meluncurkan program Pelatihan Partnership yang dirancang untuk membantu perempuan...",
      image: newsImage,
    },
    {
      title: 'WeCare Mengadakan Webinar "Kembali Bekerja dengan Percaya Diri"',
      description:
        'WeCare akan mengadakan webinar gratis bertajuk "Kembali Bekerja dengan Percaya Diri" yang bertujuan...',
      image: newsImage,
    },
  ];

  return (
    <section className="w-full py-6 my-6">
      <div className="container mx-auto px-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[#921A40]">Berita Terbaru</h2>
        </div>

        {/* News Items */}
        <div className="flex overflow-x-auto space-x-10 pb-12 hide-scrollbar">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#f8d7da] rounded-lg shadow-lg lg:w-[270px] w-[230px] pb-4 flex-shrink-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-t-lg w-full h-56 object-cover mb-2"
              />
              <h3 className="font-semibold px-4 mb-4">{item.title}</h3>
              <p className="text-gray-700 px-4 text-sm mb-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
