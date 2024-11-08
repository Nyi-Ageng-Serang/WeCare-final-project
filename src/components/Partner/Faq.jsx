import { useState } from "react";

const Faq = () => {
  const [open, setOpen] = useState(null);

  const toggleDropdown = (id) => {
    setOpen(open === id ? null : id);
  };

  const faqData = [
    {
      question: "Bagaimana cara menjadi partner pelatihan di WeCare?",
      answer:
        "Untuk menjadi partner, silakan hubungi tim kami melalui email atau formulir kontak di situs WeCare. Kami akan membantu Anda dalam proses pendaftaran dan menjelaskan lebih lanjut mengenai langkah-langkah kemitraan.",
    },
    {
      question: "Bagaimana cara mendaftarkan program pelatihan di WeCare?",
      answer:
        "Anda dapat mengirimkan proposal pelatihan ke tim WeCare melalui email. Setelah evaluasi, kami akan memberikan panduan lebih lanjut terkait pengaturan program pelatihan di platform kami.",
    },
    {
      question:
        "Apakah ada persyaratan khusus untuk program pelatihan yang diajukan?",
      answer:
        "Ya, program pelatihan yang diajukan harus relevan dengan kebutuhan keterampilan industri terkini dan membantu perempuan yang sedang dalam masa career break untuk kembali ke dunia kerja. Program pelatihan harus mencakup keterampilan yang dapat langsung diterapkan dan memiliki kurikulum yang terstruktur.",
    },
    {
      question:
        "Apakah WeCare menyediakan dukungan untuk pelaksanaan pelatihan?",
      answer:
        "WeCare berfokus pada penyediaan platform untuk eksposur dan akses pelatihan. Untuk penyelenggaraan pelatihan secara teknis, partner bertanggung jawab penuh dalam pelaksanaannya.",
    },
    {
      question: "Bagaimana pelatihan saya dipromosikan di WeCare?",
      answer:
        "Pelatihan yang disetujui akan dipromosikan kepada komunitas WeCare melalui situs web dan saluran media sosial kami, meningkatkan eksposur program Anda di kalangan target audiens.",
    },
    {
      question: "Apakah ada biaya untuk bermitra dengan WeCare?",
      answer:
        "WeCare tidak mengenakan biaya untuk kemitraan pelatihan, namun ada syarat dan ketentuan tertentu yang harus dipenuhi oleh mitra untuk menjaga kualitas dan relevansi program bagi komunitas.",
    },
    {
      question: "Apa manfaat lain yang didapatkan oleh partner dari WeCare?",
      answer:
        "Partner berkesempatan memperluas branding sebagai perusahaan yang mendukung pemberdayaan perempuan dan tenaga kerja inklusif, serta meningkatkan pengaruh sosial di komunitas melalui program pelatihan yang bermanfaat.",
    },
  ];

  return (
    <div className="w-full py-6 my-10">
      <div className="container mx-auto px-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h1>

        {faqData.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full text-left flex justify-between items-center bg-softPink px-4 py-3 rounded-lg shadow-md focus:outline-none"
            >
              <span className="font-semibold">{item.question}</span>
              <svg
                className={`h-5 w-5 text-gray-600 transition-transform duration-200 ${
                  open === index ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`px-4 pt-2 pb-4 text-gray-700 ${
                open === index ? "block" : "hidden"
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
