function Searchbar() {
  return (
    <>
      <div className="flex justify-center shadow-md rounded-full">
        <input
          type="text"
          placeholder="Cari diskusi..."
          className="bg-softPink rounded-l focus:outline-none p-3.5 w-full"
        />
        <button className="bg-softPink p-2 rounded-r text-white">
          <i className="fas fa-search px-4 text-red"></i>
        </button>
      </div>
    </>
  );
}

export default Searchbar;
