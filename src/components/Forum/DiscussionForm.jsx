import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { ForumContext } from "../../context/ForumProvider";
import Cookies from "js-cookie"; // Import js-cookie untuk mengakses cookies

const DiscussionForm = ({ onClose, refreshDiscussions }) => {
  const { addDiscussion } = useContext(ForumContext);
  const [topics, setTopics] = useState([]); // Menyimpan data topik dari API
  const [topic, setTopic] = useState(""); // Menyimpan topik yang dipilih
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);

  // Fungsi untuk mendapatkan token dari cookies
  const getToken = () => {
    return Cookies.get("token"); // Sesuaikan dengan nama cookie token yang Anda gunakan
  };

  // Fetch topik diskusi dari endpoint
  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get(
          "https://substantial-starla-ardhilla-fa22d60a.koyeb.app/forum/categories"
        );
        setTopics(response.data.categories); // Menyimpan data topik ke state
      } catch (error) {
        console.error("Error fetching topics:", error);
        alert("Gagal memuat topik diskusi.");
      }
    };

    fetchTopics();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = getToken();

    if (!token) {
      alert("Token tidak ditemukan. Silakan login terlebih dahulu.");
      setLoading(false);
      return;
    }

    try {
      // Membuat request untuk menambahkan diskusi
      const response = await axios.post(
        "https://substantial-starla-ardhilla-fa22d60a.koyeb.app/forum/post",
        {
          category: topic, // Mengirimkan ID kategori yang dipilih
          title: title,
          content: details,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Menambahkan Bearer token ke header
          },
        }
      );

      console.log("Response:", response); // Log respons untuk melihat struktur respons

      if (response.status === 201) {
        alert("Diskusi berhasil diposting!");
        onClose();
        window.location.reload();
      } else {
        console.log("Unexpected response status:", response.status);
        alert("Gagal memposting diskusi. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Error posting discussion:", error.message);
      console.log("Full error:", error); // Log error lengkap untuk debug

      if (error.response) {
        // Log detail error dari respons server jika ada
        console.log("Error response data:", error.response.data);
      }

      alert("Terjadi kesalahan saat memposting diskusi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 tracking-wide">
      <form
        className="bg-white p-6 rounded shadow-lg lg:w-2/5 w-full mx-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl text-center font-semibold mb-4">
          Posting Diskusi Baru
        </h2>
        <div className="mb-4">
          <label className="block mb-1">Pilih Topik Diskusi</label>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full focus:outline-none"
            required
          >
            <option value="">Pilih topik</option>
            {topics.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name} {/* Tampilkan nama kategori */}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Judul Diskusi</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full focus:outline-none"
            placeholder="Masukan judul diskusi"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Detail Diskusi</label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full h-48 focus:outline-none"
            placeholder="Masukan detail diskusi yang ingin anda mulai"
            required
          ></textarea>
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            className="font-semibold border-2 border-red text-red py-1 px-8 rounded-md hover:bg-softPink hover:border-softPink hover:text-red mr-3"
            onClick={onClose}
          >
            Batal
          </button>
          <button
            type="submit"
            className="font-semibold border-2 border-red bg-red text-white py-1 px-8 rounded-md hover:bg-softPink hover:border-softPink hover:text-red"
            disabled={loading}
          >
            {loading ? "Memposting..." : "Posting"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DiscussionForm;
