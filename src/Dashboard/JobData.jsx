const jobData = [
    {
      id: 1,
      title: 'Junior Copywriter',
      company: 'PT Media Kreatif',
      salary: 'Rp5.000.000 - Rp7.000.000 / bulan',
      type: 'Part-Time, WFH',
      location: 'Jakarta, Indonesia',
      category: 'Copywriting',
      responsibilities: `
        Menulis konten promosi yang menarik untuk produk dan layanan perusahaan.
        Bekerja sama dengan tim pemasaran untuk mengembangkan kampanye yang sesuai dengan target audiens.
        Mengedit dan memperbaiki konten untuk meningkatkan kualitas dan keterbacaan.
        Mengatur jadwal publikasi konten pada berbagai platform digital.
      `,
      requirements: `
        Pendidikan minimal S1 di bidang terkait.
        Kemampuan menulis yang baik dan kreatif.
        Pengalaman 1 tahun di bidang copywriting lebih disukai.
      `,
      apply: 'Kirim CV ke hr@mediakreatif.co.id',
    },
    {
      id: 2,
      title: 'Content Writer',
      company: 'Creative Buzz Agency',
      salary: 'Rp6.000.000 - Rp8.000.000 / bulan',
      type: 'Freelance, WFH',
      location: 'Surabaya, Indonesia',
      category: 'Copywriting',
      responsibilities: `
        Menulis artikel dan konten blog yang SEO-friendly untuk meningkatkan traffic website.
        Menyusun ide konten yang segar dan menarik untuk media sosial.
        Melakukan riset kata kunci dan mengoptimalkan konten agar lebih mudah ditemukan.
        Memelihara voice dan tone merek yang konsisten di seluruh konten.
      `,
      requirements: `
        Minimal pengalaman 1 tahun sebagai content writer.
        Pemahaman mendalam tentang SEO.
        Keterampilan storytelling yang baik.
      `,
      apply: 'Kirim CV ke career@creativebuzz.co.id',
    },
    {
      id: 3,
      title: 'Graphic Designer',
      company: 'PT Visual Master',
      salary: 'Rp5.500.000 - Rp8.500.000 / bulan',
      type: 'Full-Time, WFH',
      location: 'Jakarta, Indonesia',
      category: 'Desain Grafis',
      responsibilities: `
        Mendesain materi promosi visual seperti poster, brosur, dan banner.
        Membuat konsep visual yang mendukung kampanye pemasaran digital.
        Berkolaborasi dengan tim pemasaran untuk memahami kebutuhan desain.
        Mengelola waktu dan deadline proyek desain agar tepat waktu.
      `,
      requirements: `
        Pengalaman minimal 1 tahun sebagai Graphic Designer.
        Menguasai Adobe Illustrator dan Photoshop.
        Kreatif dan detail-oriented.
      `,
      apply: 'Kirim CV ke recruitment@visualmaster.co.id',
    },
    {
      id: 4,
      title: 'Junior Graphic Designer',
      company: 'Artify Studio',
      salary: 'Rp4.500.000 - Rp6.500.000 / bulan',
      type: 'Part-Time, WFH',
      location: 'Bandung, Indonesia',
      category: 'Desain Grafis',
      responsibilities: `
        Membantu tim desain dalam membuat konten visual untuk media sosial dan website.
        Mendukung pengembangan konsep dan layout untuk presentasi klien.
        Mengatur file dan portofolio proyek desain.
        Melakukan revisi desain berdasarkan umpan balik klien.
      `,
      requirements: `
        Pendidikan minimal D3/S1 di bidang desain grafis.
        Portofolio yang kuat.
        Menguasai software desain.
      `,
      apply: 'Kirim CV ke jobs@artifystudio.com',
    },
    {
      id: 5,
      title: 'UI/UX Designer',
      company: 'Tech Solutions',
      salary: 'Rp7.000.000 - Rp10.000.000 / bulan',
      type: 'Full-Time, WFH',
      location: 'Jakarta, Indonesia',
      category: 'UI/UX Design',
      responsibilities: `
        Mendesain antarmuka pengguna yang intuitif, responsif, dan user-friendly.
        Membuat wireframe, mockup, dan prototipe untuk proyek aplikasi web dan mobile.
        Melakukan user testing dan iterasi desain berdasarkan hasil tes.
        Berkolaborasi dengan tim pengembang untuk memastikan desain sesuai dengan implementasi.
      `,
      requirements: `
        Pengalaman 2 tahun di bidang UI/UX.
        Menguasai alat desain seperti Figma dan Adobe XD.
        Kemampuan analitis untuk memahami kebutuhan pengguna.
      `,
      apply: 'Kirim CV ke uiux@techsolutions.com',
    },
    {
      id: 6,
      title: 'Junior UX Researcher',
      company: 'UX Hub Indonesia',
      salary: 'Rp5.000.000 - Rp7.000.000 / bulan',
      type: 'Part-Time, WFH',
      location: 'Yogyakarta, Indonesia',
      category: 'UI/UX Design',
      responsibilities: `
        Melakukan riset pengguna melalui wawancara, survei, dan pengujian produk.
        Mengumpulkan dan menganalisis data untuk mendapatkan insights bagi pengembangan produk.
        Menyusun laporan hasil riset yang dapat dipahami oleh tim desain dan pengembang.
        Bekerja sama dengan UI/UX designer untuk mengimplementasikan perubahan berdasarkan feedback pengguna.
      `,
      requirements: `
        Pendidikan di bidang psikologi atau desain lebih diutamakan.
        Pengalaman riset 1 tahun.
        Komunikasi yang baik.
      `,
      apply: 'Kirim CV ke recruit@uxhub.co.id',
    },
    {
      id: 7,
      title: 'Digital Marketing Specialist',
      company: 'DigiPlus Marketing',
      salary: 'Rp6.000.000 - Rp9.000.000 / bulan',
      type: 'Freelance, WFH',
      location: 'Bali, Indonesia',
      category: 'Digital Marketing',
      responsibilities: `
        Merancang dan melaksanakan strategi pemasaran digital untuk meningkatkan brand awareness.
        Mengelola kampanye iklan di Google Ads dan media sosial.
        Menganalisis data hasil kampanye untuk meningkatkan kinerja pemasaran.
        Membuat laporan bulanan dan menyajikan hasil kepada tim.
      `,
      requirements: `
        Pengalaman 2 tahun di digital marketing.
        Menguasai Google Ads dan SEO.
        Analitis dan kreatif.
      `,
      apply: 'Kirim CV ke hr@digiplus.com',
    },
    {
      id: 8,
      title: 'Social Media Strategist',
      company: 'Social Hive Agency',
      salary: 'Rp5.500.000 - Rp7.500.000 / bulan',
      type: 'Part-Time, WFH',
      location: 'Jakarta, Indonesia',
      category: 'Digital Marketing',
      responsibilities: `
        Mengembangkan strategi media sosial untuk platform seperti Instagram, Facebook, dan LinkedIn.
        Menciptakan konten yang menarik dan sesuai dengan target audiens.
        Mengukur performa konten dengan alat analitik dan menyesuaikan strategi jika diperlukan.
        Berinteraksi dengan followers dan meningkatkan engagement.
      `,
      requirements: `
        Pengalaman di bidang manajemen media sosial.
        Kreativitas tinggi dan pemahaman yang baik tentang tren sosial media.
        Kemampuan komunikasi yang baik.
      `,
      apply: 'Kirim CV ke apply@socialhive.co.id',
    }
];
  
export default jobData;  