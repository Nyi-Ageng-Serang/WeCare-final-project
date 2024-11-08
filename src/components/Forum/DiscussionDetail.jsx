import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie"; // Untuk memeriksa token di cookies
import Hero from "./HeroSection";

function DiscussionDetail() {
  const { id } = useParams();
  const [discussion, setDiscussion] = useState(null);
  const [categoryName, setCategoryName] = useState(""); // Menyimpan nama kategori
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Menyimpan status login

  // Fungsi untuk memeriksa apakah user sudah login berdasarkan token di cookies
  const checkLoginStatus = () => {
    const token = Cookies.get("token"); // Mengambil token dari cookies
    if (token) {
      setIsLoggedIn(true); // Jika token ditemukan, user sudah login
    } else {
      setIsLoggedIn(false); // Jika tidak ada token, user belum login
    }
  };

  // Ambil data kategori dari API
  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://substantial-starla-ardhilla-fa22d60a.koyeb.app/forum/categories"
      );
      return response.data.categories;
    } catch (error) {
      console.error("Error fetching categories:", error);
      alert("Terjadi kesalahan saat mengambil data kategori.");
      return [];
    }
  };

  // Ambil data post dari API berdasarkan post-id
  useEffect(() => {
    const fetchDiscussion = async () => {
      try {
        setLoading(true);

        // Periksa status login
        checkLoginStatus();

        // Ambil data kategori terlebih dahulu
        const categories = await fetchCategories();

        // Ambil data post berdasarkan id
        const response = await axios.get(
          `https://substantial-starla-ardhilla-fa22d60a.koyeb.app/forum/post/${id}`
        );
        
        if (response.status === 200) {
          const post = response.data.post;

          // Cari nama kategori berdasarkan id kategori
          const category = categories.find(
            (category) => category._id === post.category
          );
          const categoryName = category ? category.name : "Kategori tidak ditemukan";
          
          setDiscussion(post);
          setCategoryName(categoryName);
        } else {
          console.error("Error:", response.status);
          alert("Terjadi kesalahan saat mengambil data.");
        }
      } catch (error) {
        console.error("Error fetching discussion:", error);
        alert("Terjadi kesalahan saat mengambil data.");
      } finally {
        setLoading(false);
      }
    };

    fetchDiscussion();
  }, [id]);

  const handleAddComment = async () => {
    if (!isLoggedIn) {
      alert("Anda harus login untuk mengirim komentar.");
      return;
    }

    if (newComment.trim()) {
      const token = Cookies.get("token");

      try {
        const response = await axios.post(
          "https://substantial-starla-ardhilla-fa22d60a.koyeb.app/forum/comment",
          {
            postId: id,
            content: newComment,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`, // Kirimkan token dengan header
            },
          }
        );

        if (response.status === 201) {
          setNewComment(""); // Reset textarea setelah komentar terkirim
          alert("Komentar berhasil ditambahkan.");
          window.location.reload();
        } else {
          alert("Terjadi kesalahan saat mengirim komentar.");
        }
      } catch (error) {
        console.error("Error posting comment:", error);
        alert("Terjadi kesalahan saat mengirim komentar.");
      }
    }
  };

  if (loading) {
    return <h1 className="min-h-screen">Loading...</h1>;
  }

  if (!discussion) {
    return <h1>Diskusi tidak ditemukan.</h1>;
  }

  return (
    <>
      <Hero />
      <div className="py-20 xl:mx-16 mx-10 font-medium min-h-screen">
        <div className="mb-12 bg-softPink p-6 rounded-lg shadow-sm">
          <p className="text-white font-normal py-1 text-center w-32 rounded-xl bg-red">
            {categoryName} {/* Tampilkan nama kategori yang sesuai */}
          </p>
          <h2 className="my-6 text-xl font-semibold">{discussion.title}</h2>
          <p className="my-6">{discussion.content}</p>

          <div className="flex gap-4 justify-between items-center">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10 bg-red rounded-full mr-2"></div>
              <p className="text-sm text-gray-500">{discussion.user.fullName}</p>
            </div>
            <p className="text-sm text-gray-500">{new Date(discussion.createdAt).toLocaleString()}</p>
          </div>
        </div>

        <div>
          <textarea
            className="w-full p-2 mb-4 border rounded-lg bg-white border-black min-h-24 focus:outline-none"
            placeholder="Tambahkan komentar..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            disabled={!isLoggedIn} // Nonaktifkan textarea jika user belum login
          ></textarea>
          <div className="flex justify-end">
            <button
              onClick={handleAddComment}
              className="inline-block font-semibold border-2 border-red bg-red text-white py-1 px-10 rounded-md hover:bg-softPink hover:border-softPink hover:text-red"
              disabled={!isLoggedIn || !newComment.trim()} // Nonaktifkan tombol jika user belum login atau komentar kosong
            >
              Kirim
            </button>
          </div>
        </div>

        <div className="mt-20">
          <ul className="mb-4 space-y-6">
            {discussion.comments.map((comment, index) => (
              <li key={index} className="bg-softPink p-6 rounded-lg shadow-sm">
                <div className="flex gap-4 justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10 bg-red rounded-full mr-2"></div>
                    <p className="text-sm text-gray-600">{comment.userName || "Anonim"}</p>
                  </div>
                  <p className="text-sm text-gray-500">{new Date(comment.createdAt).toLocaleString()}</p>
                </div>
                <p className="mt-2">{comment.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default DiscussionDetail;
