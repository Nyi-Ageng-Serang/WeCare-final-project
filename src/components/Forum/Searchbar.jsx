import { useState } from "react";

function Searchbar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(searchQuery); // Kirim query pencarian ke komponen parent saat tekan Enter
    }
  };

  const handleSearchClick = () => {
    onSearch(searchQuery); // Kirim query pencarian ke komponen parent
  };

  return (
    <div className="flex justify-center shadow-md rounded-full">
      <input
        type="text"
        placeholder="Cari diskusi..."
        className="bg-softPink rounded-l focus:outline-none p-3.5 w-full"
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyDown={handleKeyPress}
      />
      <button
        className="bg-softPink p-2 rounded-r text-white"
        onClick={handleSearchClick}
      >
        <i className="fas fa-search px-4 text-red"></i>
      </button>
    </div>
  );
}

export default Searchbar;
