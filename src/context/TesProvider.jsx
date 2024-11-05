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
            "Bagaimana perasaanmu saat membuat desain grafis, seperti poster atau infografis?",
          pilihan: [
            {
              answer: "Sangat tertarik dan menikmati proses mendesain",
              value: 4,
            },
            {
              answer: "Tertarik, tetapi masih dalam tahap belajar",
              value: 3,
            },
            {
              answer:
                "Sedikit tertarik, lebih suka melihat desain daripada membuat",
              value: 2,
            },
            {
              answer: "Tidak tertarik sama sekali",
              value: 1,
            },
          ],
        },
        {
          pertanyaan:
            "Seberapa nyaman kamu menggunakan alat desain grafis seperti Canva?",
          pilihan: [
            {
              answer: "Sangat nyaman dan sering menggunakan alat tersebut",
              value: 4,
            },
            {
              answer: "Cukup nyaman, meskipun masih perlu belajar lebih lanjut",
              value: 3,
            },
            {
              answer: "Tidak terlalu nyaman, hanya menggunakan fitur dasar",
              value: 2,
            },
            {
              answer: "Tidak nyaman sama sekali",
              value: 1,
            },
          ],
        },
        {
          pertanyaan:
            "Apa yang kamu rasakan saat membuat materi visual untuk sebuah proyek?",
          pilihan: [
            {
              answer: "Menikmati proses kreatif dan puas dengan hasilnya",
              value: 4,
            },
            {
              answer:
                "Cukup menikmati, meskipun terkadang memerlukan waktu lebih",
              value: 3,
            },
            {
              answer: "Kadang merasa stres, tapi tetap bisa menyelesaikannya",
              value: 2,
            },
            {
              answer: "Tidak menikmati dan merasa kesulitan",
              value: 1,
            },
          ],
        },
        {
          pertanyaan:
            "Seberapa sering kamu terlibat dalam kegiatan kreatif, seperti menggambar atau merancang?",
          pilihan: [
            {
              answer:
                "Sangat sering, selalu mencari proyek baru untuk dikerjakan",
              value: 4,
            },
            {
              answer: "Cukup sering, meskipun tidak rutin",
              value: 3,
            },
            {
              answer: "Kadang-kadang, hanya jika ada kesempatan",
              value: 2,
            },
            {
              answer: "Jarang atau tidak pernah",
              value: 1,
            },
          ],
        },
        {
          pertanyaan:
            "Bagaimana perasaanmu tentang mengikuti tren desain grafis terbaru?",
          pilihan: [
            {
              answer:
                "Sangat tertarik dan senang mengikuti perkembangan terbaru",
              value: 4,
            },
            {
              answer: "Cukup tertarik, tapi tidak selalu mengikuti tren",
              value: 3,
            },
            {
              answer: "Sedikit tertarik, lebih suka desain yang klasik",
              value: 2,
            },
            {
              answer: "Tidak tertarik sama sekali",
              value: 1,
            },
          ],
        },
      ],
      UIUXDesign: [
        {
          pertanyaan:
            "Bagaimana perasaanmu saat mendesain antarmuka pengguna untuk aplikasi atau website?",
          pilihan: [
            {
              answer: "Sangat tertarik dan menikmati setiap prosesnya",
              value: 4,
            },
            {
              answer: "Tertarik, tetapi masih dalam tahap belajar",
              value: 3,
            },
            {
              answer:
                "Sedikit tertarik, lebih suka menggunakan desain yang sudah ada",
              value: 2,
            },
            {
              answer: "Tidak tertarik sama sekali",
              value: 1,
            },
          ],
        },
        {
          pertanyaan:
            "Seberapa nyaman kamu melakukan riset pengguna untuk memahami kebutuhan dan preferensi mereka?",
          pilihan: [
            {
              answer: "Sangat nyaman dan merasa penting untuk dilakukan",
              value: 4,
            },
            {
              answer: "Cukup nyaman, meskipun terkadang merasa kesulitan",
              value: 3,
            },
            {
              answer: "Tidak terlalu nyaman, hanya melakukannya jika perlu",
              value: 2,
            },
            {
              answer: "Tidak nyaman sama sekali",
              value: 1,
            },
          ],
        },
        {
          pertanyaan:
            "Apa yang kamu rasakan saat menerima umpan balik dari pengguna tentang desainmu?",
          pilihan: [
            {
              answer:
                "Menikmati umpan balik dan menganggapnya sebagai peluang untuk berkembang",
              value: 4,
            },
            {
              answer: "Cukup menikmati, meskipun terkadang merasa kritis",
              value: 3,
            },
            {
              answer:
                "Kadang merasa kesulitan untuk menerima kritik, tapi bisa menghadapinya",
              value: 2,
            },
            {
              answer: "Tidak nyaman dan lebih suka menghindari umpan balik",
              value: 1,
            },
          ],
        },
        {
          pertanyaan:
            "Seberapa sering kamu berkolaborasi dengan tim lain (misalnya, pengembang atau pemasar) dalam proyek desain?",
          pilihan: [
            {
              answer: "Sangat sering, dan merasa itu sangat penting",
              value: 4,
            },
            {
              answer: "Cukup sering, tetapi tidak selalu terlibat",
              value: 3,
            },
            { answer: "Kadang-kadang, hanya jika diperlukan", value: 2 },
            {
              answer: "Jarang atau tidak pernah",
              value: 1,
            },
          ],
        },
        {
          pertanyaan:
            "Bagaimana perasaanmu saat mengikuti tren desain dan praktik terbaik dalam UI/UX?",
          pilihan: [
            {
              answer: "Sangat antusias dan selalu ingin update",
              value: 4,
            },
            {
              answer:
                "Cukup tertarik, tetapi tidak selalu mengikuti tren terbaru",
              value: 3,
            },
            {
              answer: "Sedikit tertarik, lebih suka pendekatan klasik",
              value: 2,
            },
            { answer: "Tidak tertarik sama sekali", value: 1 },
          ],
        },
      ],
      Copywriting: [
        {
          pertanyaan: "Apa yang kamu rasakan saat menulis artikel atau konten?",
          pilihan: [
            {
              answer:
                "Menikmati proses menulis dan senang menemukan kata-kata yang tepat",
              value: 4,
            },
            {
              answer:
                "Cukup menikmati menulis, meskipun terkadang merasa tertekan",
              value: 3,
            },
            {
              answer:
                "Menulis terasa seperti beban dan kadang membuat frustrasi",
              value: 2,
            },
            {
              answer: "Tidak menikmati menulis sama sekali",
              value: 1,
            },
          ],
        },
        {
          pertanyaan:
            "Seberapa sering kamu membaca artikel atau buku untuk menambah pengetahuan?",
          pilihan: [
            {
              answer:
                "Sangat sering, selalu mencari informasi baru yang menarik",
              value: 4,
            },
            {
              answer: "Cukup sering, tapi tidak terlalu rutin",
              value: 3,
            },
            {
              answer: "Kadang-kadang, hanya saat ada kebutuhan",
              value: 2,
            },
            {
              answer: "Jarang membaca atau mencari informasi baru",
              value: 1,
            },
          ],
        },
        {
          pertanyaan:
            "Bagaimana perasaanmu saat melakukan riset untuk menulis konten?",
          pilihan: [
            {
              answer:
                "Menikmati proses riset dan senang menemukan informasi berguna",
              value: 4,
            },
            {
              answer: "Cukup menikmati, meskipun kadang memakan waktu",
              value: 3,
            },
            { answer: "Merasa sedikit kesulitan, tapi bisa diatasi", value: 2 },
            {
              answer: "Tidak suka melakukan riset dan sering merasa malas",
              value: 1,
            },
          ],
        },
        {
          pertanyaan:
            "Seberapa nyaman kamu dengan proses revisi dan editing tulisan?",
          pilihan: [
            {
              answer:
                "Sangat nyaman dan suka memperbaiki tulisan agar lebih baik",
              value: 4,
            },
            {
              answer: "Cukup nyaman, meskipun kadang perlu usaha ekstra",
              value: 3,
            },
            {
              answer: "Tidak terlalu nyaman, lebih suka menulis tanpa revisi",
              value: 2,
            },
            {
              answer: "Tidak nyaman sama sekali saat harus merevisi",
              value: 1,
            },
          ],
        },
        {
          pertanyaan:
            "Apa yang kamu rasakan saat menerima umpan balik atau kritik tentang tulisanmu?",
          pilihan: [
            {
              answer:
                "Menganggapnya sebagai peluang untuk berkembang dan belajar",
              value: 4,
            },
            {
              answer: "Cukup menerima, tapi kadang merasa tersinggung",
              value: 3,
            },
            {
              answer:
                " Sedikit merasa tidak nyaman, tapi bisa menerima dengan baik",
              value: 2,
            },
            {
              answer: "Tidak suka dan merasa sulit untuk menerima kritik",
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
