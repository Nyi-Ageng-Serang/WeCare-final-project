import { useState, useEffect } from "react";
import axios from "axios";
import DiscussionList from "./DiscussionList";
import Searchbar from "./Searchbar";

function Discussion() {
  const [discussions, setDiscussions] = useState([]);
  const [filteredDiscussions, setFilteredDiscussions] = useState([]); // Menyimpan hasil filter pencarian
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mengambil data kategori saat komponen pertama kali dimuat
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://substantial-starla-ardhilla-fa22d60a.koyeb.app/forum/categories"
        );
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

        const formattedDiscussions = response.data.posts.map((post) => {
          const category = categories.find((cat) => cat._id === post.category);

          return {
            id: post._id,
            category: category ? category.name : "Unknown",
            user: post.user.fullName,
            text: post.title,
            time: new Date(post.createdAt).toLocaleString(),
          };
        });

        setDiscussions(formattedDiscussions);
        setFilteredDiscussions(formattedDiscussions); // Menyimpan semua diskusi untuk pencarian
      } catch (error) {
        console.error("Error fetching discussions:", error);
        alert("Terjadi kesalahan saat mengambil data.");
      } finally {
        setLoading(false);
      }
    };

    if (categories.length > 0) {
      fetchDiscussions();
    }
  }, [categories]);

  // Fungsi untuk menangani pencarian
  const handleSearch = (query) => {
    if (query.trim() === "") {
      setFilteredDiscussions(discussions); // Jika query kosong, tampilkan semua diskusi
    } else {
      const filtered = discussions.filter((discussion) =>
        discussion.text.toLowerCase().includes(query.toLowerCase()) // Pencarian berdasarkan judul
      );
      setFilteredDiscussions(filtered);
    }
  };

  return (
    <div className="w-full lg:w-3/4 my-10">
      <Searchbar onSearch={handleSearch} /> {/* Kirimkan fungsi pencarian ke Searchbar */}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <DiscussionList discussions={filteredDiscussions} />
      )}
    </div>
  );
}

export default Discussion;
