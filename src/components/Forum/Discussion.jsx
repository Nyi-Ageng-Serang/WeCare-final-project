import { useState, useEffect } from "react";
import axios from "axios";
import DiscussionList from "./DiscussionList";
import Searchbar from "./Searchbar";

function Discussion() {
  const [discussions, setDiscussions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mengambil data kategori saat komponen pertama kali dimuat
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://substantial-starla-ardhilla-fa22d60a.koyeb.app/forum/categories"
        );
        // Menyimpan data kategori
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
        alert("Terjadi kesalahan saat mengambil data kategori.");
      }
    };

    fetchCategories();
  }, []);

  // Mengambil data diskusi dan mencocokkan kategori
  useEffect(() => {
    const fetchDiscussions = async () => {
      try {
        const response = await axios.get(
          "https://substantial-starla-ardhilla-fa22d60a.koyeb.app/forum/posts"
        );
        
        // Menyaring dan mengubah data yang diterima, termasuk kategori
        const formattedDiscussions = response.data.posts.map(post => {
          // Mencocokkan ID kategori
          const category = categories.find(cat => cat._id === post.category);

          return {
            id: post._id,
            category: category ? category.name : "Unknown", // Menampilkan nama kategori atau 'Unknown' jika tidak ditemukan
            user: post.user.fullName, // Nama user
            text: post.title, // Judul postingan
            time: new Date(post.createdAt).toLocaleString(), // Waktu postingan
          };
        });

        // Menyimpan data diskusi yang sudah diformat
        setDiscussions(formattedDiscussions);
      } catch (error) {
        console.error("Error fetching discussions:", error);
        alert("Terjadi kesalahan saat mengambil data.");
      } finally {
        setLoading(false);
      }
    };

    // Menunggu data kategori diambil terlebih dahulu sebelum mengambil data diskusi
    if (categories.length > 0) {
      fetchDiscussions();
    }
  }, [categories]); // Menjalankan efek ini setiap kali data kategori berubah

  return (
    <div className="w-full lg:w-3/4 my-10">
      <Searchbar />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <DiscussionList discussions={discussions} />
      )}
    </div>
  );
}

export default Discussion;
