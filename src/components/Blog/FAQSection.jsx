import React, { useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineDatabase,
  AiOutlineRise,
} from "react-icons/ai";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between py-24 lg:px-32 px-10 bg-[#FFB1B1] bg-opacity-25 md:space-x-40">
      {/* Stats Section */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mb-8 md:mb-0 text-center">
        <StatCard
          icon={<AiOutlineHeart className="text-3xl text-[#921A40]" />}
          value="400+"
          label="Pengguna Senang"
          className="md:translate-y-8 "
        />
        <StatCard
          icon={<AiOutlineDatabase className="text-3xl text-[#921A40]" />}
          value="200+"
          label="Pelatihan Terpercaya"
        />
        <StatCard
          icon={<AiOutlineUser className="text-3xl text-[#921A40]" />}
          value="30+"
          label="Pengguna Baru"
          className="md:translate-y-8 "
        />
        <StatCard
          icon={<AiOutlineRise className="text-3xl text-[#921A40]" />}
          value="100+"
          label="Cerita Sukses"
        />
      </div>

      {/* FAQ Section */}
      <div className="md:w-1/2">
        <p className="text-sm text-gray-600 pb-4">
          PERTANYAAN PALING SERING DITANYAKAN
        </p>
        <h2 className="text-[#921A40] text-4xl font-bold mb-8">
          Frequently Asked Question
        </h2>
        <div className="space-y-4">
          <FAQItem
            question="Bisakah aku mengikuti Test tanpa mendaftarkan akun?"
            answer="Anda perlu mendaftarkan akun untuk mengikuti test tersebut."
            index={0}
            openIndex={openIndex}
            toggleFAQ={toggleFAQ}
          />
          <FAQItem
            question="Dimana aku bisa menemukan informasi pelatihan?"
            answer="Anda bisa mengakses informasi seputar pelatihan setelah menyelesaikan Test Minat Bakat di halaman Home. Setelah menyelesaikan test, Anda akan diarahkan menuju Dashboard pengguna, lalu klik menu Pelatihan pada Sidebar di sebelah kiri halaman."
            index={1}
            openIndex={openIndex}
            toggleFAQ={toggleFAQ}
          />
          <FAQItem
            question="Dimana aku bisa mengikuti komunitas?"
            answer="Anda dapat bergabung dengan komunitas kami melalui dashboard setelah mendaftar."
            index={2}
            openIndex={openIndex}
            toggleFAQ={toggleFAQ}
          />
          <FAQItem
            question="Bagaimana cara mendaftarkan project UMKM ku agar mendapatkan relawan project?"
            answer="Untuk mendaftarkan project UMKM, Anda dapat mengikuti petunjuk di dashboard setelah pendaftaran."
            index={3}
            openIndex={openIndex}
            toggleFAQ={toggleFAQ}
          />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, value, label, className }) => (
  <div
    className={`flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md w-48 ${className}`}
  >
    <div className="p-4 bg-[#FFB1B1] rounded-full">{icon}</div>
    <p className="text-xl mt-2 text-black font-bold">{value}</p>
    <p className="text-sm text-black">{label}</p>
  </div>
);

const FAQItem = ({ question, answer, index, openIndex, toggleFAQ }) => (
  <div className="border-b border-gray-300 pb-2">
    <button
      onClick={() => toggleFAQ(index)}
      className="flex justify-between items-center w-full text-left  font-semibold"
    >
      <span>{question}</span>
      <span className="text-[#921A40]">{openIndex === index ? "-" : "+"}</span>
    </button>
    {openIndex === index && (
      <p className="mt-2 text-sm text-gray-600">{answer}</p>
    )}
  </div>
);

export default FAQSection;
