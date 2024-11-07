function RecomenDesk({ category }) {
    let description = null;
  
    switch (category) {
      case "Digital Marketing":
        description = (
          <>
            <p className="text-sm sm:text-base md:text-lg ">
                <span className="font-semibold">Digital Marketing </span>adalah strategi pemasaran yang memanfaatkan platform digital untuk menjangkau audiens yang lebih luas 
                dan berinteraksi dengan mereka secara langsung. Tujuan utamanya adalah untuk meningkatkan kesadaran merek, menarik calon 
                pelanggan, dan mendorong konversi melalui berbagai saluran online. Digital Marketing mencakup berbagai metode, seperti 
                optimasi mesin pencari (SEO), pemasaran media sosial, email marketing, dan iklan berbayar, yang semuanya berfokus pada 
                membangun hubungan yang kuat dengan audiens dan memberikan nilai melalui konten yang relevan.
            </p>
            <br />
            <p className="text-sm sm:text-base md:text-lg">
              Kerja seorang Digital Marketing mencakup:
            </p>
            <ul className="list-decimal ml-6 mt-4 space-y-2 text-sm sm:text-base md:text-lg">
                <li>Riset Pasar: Menganalisis tren pasar, perilaku konsumen, dan pesaing untuk menyusun strategi pemasaran yang tepat sasaran.</li>
                <li>Pengelolaan Media Sosial: Mengembangkan dan memelihara akun media sosial perusahaan untuk membangun komunitas dan keterlibatan dengan audiens.</li>
                <li>SEO dan Konten Marketing: Mengoptimalkan konten agar lebih mudah ditemukan di mesin pencari dan relevan dengan kebutuhan audiens.</li>
                <li>Pengelolaan Iklan Berbayar: Merencanakan dan meluncurkan iklan digital melalui Google Ads, Facebook Ads, dan platform lainnya untuk menjangkau audiens yang lebih luas.</li>
                <li>Email Marketing: Membuat dan mengelola kampanye email untuk meningkatkan keterlibatan pengguna dan mendorong konversi.</li>
                <li>Analisis Kinerja: Memantau data dan hasil kampanye untuk mengevaluasi efektivitas strategi. Digital marketer menggunakan analisis data untuk mengoptimalkan kampanye di masa mendatang.</li>
                <li>Kolaborasi Tim: Bekerja sama dengan tim desain, pengembangan, dan copywriting untuk menciptakan kampanye yang terpadu dan efektif dalam menarik audiens.</li>
            </ul>
          </>
        );
        break;
      case "Desain Grafis":
        description = (
          <>
            <p className="font-semibold text-sm sm:text-base md:text-lg">
                <span className="font-semibold">Desain Grafis </span>adalah proses menciptakan visual yang komunikatif dan estetis untuk menyampaikan pesan atau cerita. 
                Melalui elemen-elemen seperti warna, tipografi, dan gambar, desain grafis bertujuan untuk menarik perhatian audiens dan 
                mempermudah mereka memahami informasi. Desain grafis digunakan dalam berbagai media, mulai dari logo, kemasan produk, iklan, 
                media sosial, hingga website. Seorang desainer grafis harus memiliki kemampuan untuk menggabungkan kreativitas dengan prinsip-prinsip 
                desain agar pesan yang disampaikan efektif dan menarik.
            </p>
            <br />
            <p className="text-sm sm:text-base md:text-lg">
                Kerja seorang desainer grafis mencakup:
            </p>
            <ul className="list-decimal ml-6 mt-4 space-y-2 text-sm sm:text-base md:text-lg">
                <li>Riset dan Konsep Desain: Memahami tujuan proyek, audiens target, dan merek untuk mengembangkan konsep desain yang sesuai dan inovatif.</li>
                <li>Pemilihan Warna dan Tipografi: Memilih skema warna dan jenis huruf yang memperkuat pesan serta selaras dengan identitas merek.</li>
                <li>Pembuatan Visual: Menggunakan perangkat lunak seperti Adobe Photoshop, Illustrator, atau Canva untuk membuat elemen visual yang menarik dan berkualitas tinggi.</li>
                <li>Desain Logo dan Identitas Merek: Menciptakan logo dan elemen identitas visual yang mewakili merek dengan konsisten dan mudah dikenali.</li>
                <li>Pengeditan dan Penyempurnaan: Mengedit dan merevisi desain berdasarkan umpan balik untuk memastikan kualitas, konsistensi, dan keselarasan dengan tujuan proyek.</li>
                <li>Desain untuk Media Digital dan Cetak: Membuat desain yang sesuai untuk berbagai media, baik digital (media sosial, website) maupun cetak (poster, brosur).</li>
                <li>Kolaborasi dengan Tim: Bekerja sama dengan copywriter, fotografer, dan tim pemasaran untuk menciptakan kampanye yang kohesif dan efektif.</li>
            </ul>
          </>
        );
        break;
      case "UI/UX Design":
        description = (
          <>
            <p className="font-semibold text-sm sm:text-base md:text-lg">
            <span className="font-semibold">UI/UX Design </span>adalah proses mendesain antarmuka dan pengalaman pengguna untuk menciptakan 
            produk yang tidak hanya menarik secara visual tetapi juga mudah digunakan. UI (User Interface) berfokus pada elemen visual dan 
            tata letak antarmuka, sementara UX (User Experience) berfokus pada kemudahan penggunaan dan kepuasan pengguna saat berinteraksi 
            dengan produk. Tujuan utama dari UI/UX Design adalah untuk membuat pengguna merasa nyaman dan terbantu dalam memenuhi kebutuhan 
            mereka saat menggunakan aplikasi atau situs web.
            </p>
            <br />
            <p className="text-sm sm:text-base md:text-lg">
                Kerja seorang desainer UI/UX mencakup:
            </p>
            <ul className="list-decimal ml-6 mt-4 space-y-2 text-sm sm:text-base md:text-lg">
                <li>Riset Pengguna: Mempelajari kebutuhan, preferensi, dan perilaku pengguna melalui wawancara, survei, dan uji coba untuk menciptakan desain yang relevan dan berfokus pada pengguna.</li>
                <li>Pembuatan Wireframe dan Prototipe: Membuat sketsa dan prototipe interaktif untuk menunjukkan alur dan tata letak sebelum masuk ke tahap desain akhir.</li>
                <li>Desain Antarmuka Visual: Merancang elemen visual, seperti warna, ikon, dan tipografi, untuk menciptakan antarmuka yang menarik dan sesuai dengan identitas merek.</li>
                <li>Uji Coba Pengguna (User Testing): Menguji prototipe dengan pengguna nyata untuk mengevaluasi efektivitas desain dan mengidentifikasi area yang perlu ditingkatkan.</li>
                <li>Pengembangan Alur Pengguna (User Flow): Menyusun alur yang logis dan mudah diikuti oleh pengguna, agar pengalaman mereka menggunakan produk menjadi intuitif dan efisien.</li>
                <li>Kolaborasi dengan Tim Pengembang: Bekerja sama dengan tim teknis untuk memastikan desain diterapkan dengan akurat dan berfungsi sebagaimana yang direncanakan.</li>
                <li>Iterasi dan Penyempurnaan: Menyesuaikan dan meningkatkan desain berdasarkan umpan balik dari pengguna dan data penggunaan untuk terus menyempurnakan pengalaman pengguna.</li>
            </ul>
          </>
        );
        break;
      case "CopyWriting":
        description = (
          <>
            <p className="text-sm sm:text-base md:text-lg">
              <span className="font-semibold">Copywriting</span>adalah pekerjaan yang melibatkan penulisan teks atau konten 
              untuk tujuan pemasaran atau promosi. Tujuan utamanya adalah untuk menarik 
              perhatian audiens, memengaruhi mereka, dan mendorong mereka melakukan 
              tindakan tertentu, seperti membeli produk, mendaftar layanan, atau mengikuti 
              sebuah kampanye. Copywriting bisa ditemukan di berbagai bentuk konten, seperti 
              iklan, brosur, website, media sosial, dan email marketing.
            </p>
            <br />
            <p className="text-sm sm:text-base md:text-lg">
              Kerja seorang copywriter mencakup:
            </p>
            <ul className="list-decimal ml-6 mt-4 space-y-2 text-sm sm:text-base md:text-lg">
                <li>Riset: Memahami target audiens, produk, dan pesaing untuk mengetahui apa yang akan menarik perhatian mereka.</li>
                <li>Menulis konten: Membuat teks yang menarik, persuasif, dan sesuai dengan kebutuhan klien atau perusahaan, baik untuk iklan, website, atau kampanye digital.</li>
                <li>Mengedit dan Merevisi: Meninjau dan memperbaiki konten untuk memastikan pesan yang disampaikan jelas, tepat, dan bebas dari kesalahan. Proses ini juga melibatkan penyesuaian gaya penulisan agar sesuai dengan identitas merek.</li>
                <li>Strategi Pemasaran: Bekerja sama dengan tim pemasaran untuk merancang strategi komunikasi yang efektif. Copywriter harus mampu menciptakan pesan yang sejalan dengan tujuan pemasaran dan meningkatkan visibilitas merek.</li>
                <li>Analisis Kinerja: Memantau dan menganalisis hasil kampanye yang telah diluncurkan untuk mengevaluasi efektivitas konten. Dengan memanfaatkan data dan umpan balik, seorang copywriter dapat menyesuaikan strategi dan menciptakan konten yang lebih baik di masa mendatang.</li>
                <li>Kreativitas dan Inovasi: Menciptakan ide-ide segar dan inovatif untuk menarik perhatian audiens di tengah persaingan yang ketat. Copywriter harus mampu berpikir di luar kebiasaan dan menghasilkan konten yang unik serta menarik.</li>
                <li>Kolaborasi: Bekerja sama dengan desainer grafis, fotografer, dan tim pemasaran lainnya untuk memastikan konten tidak hanya menarik secara teks, tetapi juga visual. Kolaborasi yang baik akan meningkatkan daya tarik keseluruhan dari kampanye pemasaran.</li>
            </ul>
          </>
        );
        break;
      default:
        description = (
          <p className="text-sm sm:text-base md:text-lg">Kategori tidak tersedia</p>
        );
    }
  
    return (
      <div className="mt-8 bg-[#FFB1B1] bg-opacity-40 p-4 lg:p-6 rounded-lg shadow-lg">
        {description}
      </div>
    );
  }
  
export default RecomenDesk;  