function Searchbar() {
  return (
    <>
      <div className="flex justify-center shadow-md">
        <input
          type="text"
          placeholder="Cari diskusi..."
          className="bg-softPink rounded-l p-3 w-full"
        />
        <button className="bg-softPink p-2 rounded-r text-white">
          <i className="fas fa-search px-4 text-red"></i>
        </button>
      </div>
    </>
  );
}

export default Searchbar;
