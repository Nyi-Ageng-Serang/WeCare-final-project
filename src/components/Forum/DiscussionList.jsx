import DiscussionItem from "./DiscussionItem";
import { useState } from "react";

function DiscussionList({ discussions }) {
  const [currentPage, setCurrentPage] = useState(1); // Halaman saat ini
  const itemsPerPage = 5; // Jumlah item per halaman

  // Hitung jumlah halaman
  const totalPages = Math.ceil(discussions.length / itemsPerPage);

  // Potong data berdasarkan halaman saat ini
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentDiscussions = discussions.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="w-full my-10">
      {currentDiscussions.length === 0 ? (
        <h1 className="pt-3">Tidak ada diskusi ditemukan.</h1>
      ) : (
        currentDiscussions.map((item) => (
          <DiscussionItem
            key={item.id}
            id={item.id}
            category={item.category}
            user={item.user}
            text={item.text}
            time={item.time}
          />
        ))
      )}

      <div className="flex justify-between items-center mt-4 gap-8">
        <button
          className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="text-center">
          Halaman {currentPage} dari {totalPages}
        </span>
        <button
          className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default DiscussionList;
