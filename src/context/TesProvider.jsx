import { createContext, useState } from "react";

export const TesContext = createContext();

function TesProvider({ children }) {
  const [tes, setTes] = useState([
    {
      digitalMarketing: [
        {
          pertanyaan:
            "Bagaimana kamu melihat peran data dalam merencanakan strategi pemasaran?",
          pilihan: [
            {
              answer:
                "Sangat penting, data membantu menentukan langkah yang tepat",
              value: 4,
            },
            {
              answer: "Penting, meski saya masih belajar memanfaatkannya",
              value: 3,
            },
            {
              answer:
                "Cukup penting, tapi lebih suka menebak berdasarkan pengalaman",
              value: 2,
            },
            {
              answer:
                "Tidak terlalu penting, lebih suka pendekatan kreatif daripada berbasis data",
              value: 1,
            },
          ],
        },
        {
          pertanyaan:
            "Jika kamu diminta untuk meningkatkan keterlibatan di media sosial, apa pendekatan utamamu?",
          pilihan: [
            {
              answer: "Membuat konten yang relevan dan menarik bagi audiens",
              value: 4,
            },
            {
              answer:
                "Memanfaatkan media sosial untuk menjangkau lebih banyak orang",
              value: 3,
            },
            { answer: "Menggunakan promosi dari mulut ke mulut", value: 2 },
            {
              answer: "Tidak terlalu yakin apa yang harus dilakukan",
              value: 1,
            },
          ],
        },
        {
          pertanyaan:
            "Seberapa sering kamu mengikuti tren pemasaran digital atau algoritma terbaru?",
          pilihan: [
            {
              answer:
                "Sangat sering, saya senang belajar hal-hal baru di bidang ini",
              value: 4,
            },
            { answer: "Cukup sering, meskipun kadang ketinggalan", value: 3 },
            { answer: "Kadang-kadang, hanya saat merasa perlu", value: 2 },
            { answer: "Jarang atau tidak pernah", value: 1 },
          ],
        },
        {
          pertanyaan:
            "Apa pendapatmu tentang memasang iklan berbayar (paid ads) untuk kampanye pemasaran?",
          pilihan: [
            {
              answer: "Sangat efektif, terutama jika ditargetkan dengan baik",
              value: 4,
            },
            {
              answer:
                "Cukup efektif, tapi perlu dipadukan dengan strategi organik",
              value: 3,
            },
            {
              answer: "Kadang efektif, tetapi lebih suka promosi organik",
              value: 2,
            },
            {
              answer:
                "Tidak terlalu efektif, saya tidak menyukai iklan berbayar",
              value: 1,
            },
          ],
        },
        {
          pertanyaan:
            "Bagaimana perasaanmu tentang membuat rencana konten yang terstruktur untuk media sosial atau email marketing?",
          pilihan: [
            {
              answer:
                "Suka, karena rencana konten membantu mencapai tujuan pemasaran",
              value: 4,
            },
            {
              answer: "Cukup suka, meskipun butuh latihan untuk terbiasa",
              value: 3,
            },
            { answer: "Agak sulit, tapi bisa diusahakan", value: 2 },
            {
              answer: "Tidak suka dan merasa tidak yakin bagaimana membuatnya",
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
