import { createContext, useState } from "react";

export const TesContext = createContext();

function TesProvider({ children }) {
  const [tes, setTes] = useState([
    {
      digitalMarketing: [
        {
          pertanyaan:
            "Bagaimana perasaanmu saat mengelola akun media sosial dan berinteraksi dengan orang secara online?",
          pilihan: [
            {
              answer:
                "Sangat suka dan merasa nyaman berkomunikasi secara online",
              value: 4,
            },
            {
              answer: "Cukup suka, meski masih belum terbiasa",
              value: 3,
            },
            {
              answer: "Kadang nyaman, tapi lebih suka komunikasi langsung",
              value: 2,
            },
            {
              answer: "Tidak suka dan merasa kurang nyaman berinteraksi online",
              value: 1,
            },
          ],
        },
        {
          pertanyaan:
            "Jika kamu perlu mempromosikan sebuah acara atau produk, apa yang akan kamu lakukan?",
          pilihan: [
            {
              answer: "Menyusun strategi promosi yang terencana dan efektif",
              value: 4,
            },
            {
              answer: "Menggunakan media sosial untuk menyebarkan informasi",
              value: 3,
            },
            {
              answer:
                "Lebih mengandalkan promosi tradisional atau bertemu langsung",
              value: 2,
            },
            {
              answer: "Kurang tertarik atau merasa tidak yakin",
              value: 1,
            },
          ],
        },
        {
          pertanyaan:
            "Seberapa tertarik kamu dalam membuat konten kreatif seperti desain visual atau storytelling?",
          pilihan: [
            {
              answer: "Sangat tertarik dan punya banyak ide kreatif",
              value: 4,
            },
            { answer: "Cukup tertarik, kadang muncul beberapa ide", value: 3 },
            {
              answer:
                "Tertarik, tapi biasanya butuh bantuan dalam mengembangkan ide",
              value: 2,
            },
            {
              answer: "Tidak terlalu tertarik atau merasa sulit menemukan ide",
              value: 1,
            },
          ],
        },
        {
          pertanyaan:
            "Seberapa sering kamu melihat statistik atau data untuk memahami performa konten di media sosial?",
          pilihan: [
            {
              answer: "Sering sekali, dan suka menganalisis hasilnya",
              value: 4,
            },
            {
              answer: "Cukup sering, dan merasa data tersebut sangat membantu",
              value: 3,
            },
            {
              answer:
                "Kadang-kadang, walau belum terlalu paham cara membacanya",
              value: 2,
            },
            {
              answer: "Jarang atau tidak pernah melihat data performa",
              value: 1,
            },
          ],
        },
        {
          pertanyaan:
            "Bagaimana perasaanmu saat mengikuti tren atau perubahan algoritma baru di media sosial?",
          pilihan: [
            {
              answer: "Sangat antusias dan selalu ingin update",
              value: 4,
            },
            {
              answer: "Cukup tertarik, tapi butuh waktu untuk beradaptasi",
              value: 3,
            },
            { answer: "Kadang merasa kesulitan mengikuti perubahan", value: 2 },
            {
              answer: "Kurang tertarik atau sering merasa kewalahan",
              value: 1,
            },
          ],
        },
      ],
      DesainGrafisWithCanva: [
        {
          pertanyaan:
            "Apa pandanganmu tentang elemen desain yang sederhana tapi menarik?",
          pilihan: [
            {
              answer:
                "Sangat penting, saya percaya desain sederhana bisa efektif",
              value: 4,
            },
            {
              answer:
                "Penting, tapi saya juga suka menambahkan elemen tambahan",
              value: 3,
            },
            {
              answer:
                "Cukup penting, meskipun sering fokus pada tampilan menarik",
              value: 2,
            },
            {
              answer:
                "Tidak penting, lebih suka desain yang ramai dan mencolok",
              value: 1,
            },
          ],
        },
        {
          pertanyaan:
            "Seberapa nyaman kamu dengan membuat desain poster atau konten media sosial menggunakan Canva?",
          pilihan: [
            {
              answer: "Sangat nyaman, saya sering menggunakan Canva",
              value: 4,
            },
            {
              answer: "Cukup nyaman, meski masih belajar beberapa fitur",
              value: 3,
            },
            { answer: "Sedikit sulit, tapi bisa diusahakan", value: 2 },
            {
              answer: "Tidak nyaman, saya merasa tools ini cukup membingungkan",
              value: 1,
            },
          ],
        },
        {
          pertanyaan:
            "Bagaimana perasaanmu tentang menggunakan template desain yang sudah tersedia di Canva?",
          pilihan: [
            {
              answer:
                "Suka, karena bisa membantu menghasilkan desain cepat dan efektif",
              value: 4,
            },
            {
              answer: "Suka, tapi saya juga suka menyesuaikannya lebih lanjut",
              value: 3,
            },
            {
              answer:
                "Kadang suka, tetapi saya sering merasa kurang bebas berkreasi",
              value: 2,
            },
            {
              answer:
                "Tidak suka, lebih suka mendesain dari awal tanpa template",
              value: 1,
            },
          ],
        },
        {
          pertanyaan:
            "Bagaimana kamu menilai pentingnya memilih font yang sesuai dalam sebuah desain?",
          pilihan: [
            {
              answer:
                "Sangat penting, karena font yang tepat memperkuat pesan desain",
              value: 4,
            },
            {
              answer:
                "Penting, meski saya masih belajar memilih font yang cocok",
              value: 3,
            },
            {
              answer: "Cukup penting, tapi sering kali saya pilih secara acak",
              value: 2,
            },
            {
              answer:
                "Tidak terlalu penting, saya biasanya menggunakan font yang sama",
              value: 1,
            },
          ],
        },
        {
          pertanyaan:
            "Jika diminta mendesain presentasi visual, bagaimana perasaanmu?",
          pilihan: [
            {
              answer:
                "Senang, saya suka membuat desain presentasi yang menarik",
              value: 4,
            },
            {
              answer: "Cukup tertarik, tapi perlu latihan lebih banyak",
              value: 3,
            },
            { answer: "Agak sulit, tapi bisa dicoba", value: 2 },
            {
              answer: "Tidak suka, saya lebih suka konten tanpa banyak visual",
              value: 1,
            },
          ],
        },
      ],
      UIUXDesign: [
        {
          pertanyaan:
            "Seberapa penting menurutmu memahami kebutuhan pengguna dalam proses desain?",
          pilihan: [
            {
              answer:
                "Sangat penting, saya ingin desain yang bisa memudahkan pengguna",
              value: 4,
            },
            {
              answer: "Penting, dan saya tertarik belajar lebih dalam",
              value: 3,
            },
            {
              answer:
                "Cukup penting, tetapi biasanya lebih fokus pada estetika",
              value: 2,
            },
            {
              answer:
                "Tidak terlalu penting, saya lebih mengutamakan kreativitas",
              value: 1,
            },
          ],
        },
        {
          pertanyaan:
            "Apa pendapatmu tentang membuat kerangka awal (wireframe) sebelum desain akhir?",
          pilihan: [
            {
              answer:
                "Sangat suka, ini membantu saya merancang alur yang jelas",
              value: 4,
            },
            {
              answer: "Cukup suka, meski kadang langsung membuat desain",
              value: 3,
            },
            {
              answer: "Sedikit sulit, tapi saya mencoba memahaminya",
              value: 2,
            },
            {
              answer: "Tidak suka, saya lebih nyaman langsung mendesain final",
              value: 1,
            },
          ],
        },
        {
          pertanyaan:
            "Seberapa nyaman kamu dengan tools desain seperti Figma atau Adobe XD?",
          pilihan: [
            { answer: "Sangat nyaman, saya sering menggunakannya", value: 4 },
            {
              answer: "Cukup nyaman, meskipun masih belajar fitur-fiturnya",
              value: 3,
            },
            {
              answer: "Agak sulit, tapi saya bisa menggunakannya saat perlu",
              value: 2,
            },
            { answer: "Tidak nyaman, tools ini terasa rumit", value: 1 },
          ],
        },
        {
          pertanyaan:
            " Bagaimana kamu menghadapi kritik terkait desain dari pengguna atau klien?",
          pilihan: [
            {
              answer: "Terbuka, masukan penting untuk desain lebih baik",
              value: 4,
            },
            {
              answer:
                "Cukup terbuka, tapi kadang perlu waktu untuk menyesuaikan",
              value: 3,
            },
            { answer: "Agak sulit, tapi tetap menerima masukan", value: 2 },
            {
              answer: "Tidak suka, lebih suka mempertahankan ide desain awal",
              value: 1,
            },
          ],
        },
        {
          pertanyaan:
            "Seberapa penting bagimu menciptakan desain yang responsif dan ramah pengguna?",
          pilihan: [
            {
              answer:
                "Sangat penting, saya selalu fokus pada kenyamanan pengguna",
              value: 4,
            },
            {
              answer: "Penting, meski masih belajar tentang desain responsif",
              value: 3,
            },
            {
              answer: "Cukup penting, tetapi biasanya fokus pada estetika",
              value: 2,
            },
            { answer: "Kurang penting, saya lebih fokus pada gaya", value: 1 },
          ],
        },
      ],
      Copywriting: [
        {
          pertanyaan:
            "Bagaimana perasaanmu tentang membuat teks yang persuasif untuk mempromosikan produk atau jasa?",
          pilihan: [
            {
              answer: "Suka, saya senang membuat kata-kata yang meyakinkan",
              value: 4,
            },
            {
              answer: "Cukup suka, meski masih mempelajari teknik persuasif",
              value: 3,
            },
            { answer: "Agak sulit, tapi bisa dicoba", value: 2 },
            {
              answer: "Tidak suka, saya lebih nyaman dengan teks informatif",
              value: 1,
            },
          ],
        },
        {
          pertanyaan:
            "Seberapa penting kamu menilai pemahaman audiens sebelum menulis sebuah konten?",
          pilihan: [
            {
              answer:
                "Sangat penting, pemahaman audiens menentukan cara penulisan",
              value: 4,
            },
            {
              answer: "Cukup penting, tapi masih belajar mengenal audiens",
              value: 3,
            },
            {
              answer: "Penting kadang, tetapi sering menulis secara umum",
              value: 2,
            },
            {
              answer: "Tidak terlalu penting, lebih suka menulis secara bebas",
              value: 1,
            },
          ],
        },
        {
          pertanyaan:
            "Bagaimana kamu menghadapi tantangan membuat headline yang menarik?",
          pilihan: [
            {
              answer:
                "Suka, saya menikmati tantangan membuat judul yang memikat",
              value: 4,
            },
            {
              answer: "Cukup tertarik, meski butuh latihan untuk terbiasa",
              value: 3,
            },
            { answer: "Agak sulit, tetapi masih bisa dicoba", value: 2 },
            {
              answer: "Tidak suka, merasa judul tidak terlalu penting",
              value: 1,
            },
          ],
        },
        {
          pertanyaan:
            "Seberapa sering kamu melakukan riset sebelum menulis konten?",
          pilihan: [
            {
              answer:
                "Sangat sering, karena riset meningkatkan kualitas tulisan",
              value: 4,
            },
            { answer: "Cukup sering, terutama jika topiknya baru", value: 3 },
            {
              answer: "Kadang-kadang, biasanya jika sulit menemukan ide",
              value: 2,
            },
            { answer: "Jarang, lebih suka langsung menulis", value: 1 },
          ],
        },
        {
          pertanyaan:
            "Bagaimana perasaanmu saat harus menulis dengan gaya atau tone yang berbeda-beda?",
          pilihan: [
            {
              answer:
                "Senang, karena fleksibilitas gaya membuat tulisan lebih menarik",
              value: 4,
            },
            {
              answer:
                "Cukup nyaman, meski kadang butuh waktu untuk menyesuaikan",
              value: 3,
            },
            { answer: "Sedikit sulit, tapi bisa diusahakan", value: 2 },
            {
              answer: "Tidak suka, lebih nyaman dengan satu gaya tertentu",
              value: 1,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <TesContext.Provider value={{ tes, setTes }}>
      {children}
    </TesContext.Provider>
  );
}

export default TesProvider;
