import add from "../../assets/Add.png";

function Sidebar() {
  const topics = ["Freelance", "Tips & Trik", "Life Style", "STEM"];

  return (
    <>
      <div className="w-1/4 my-10">
        <button className="bg-softPink text-gray-800 font-semibold w-full py-2 mb-4 rounded-lg shadow-md">
          <img src={add} alt="Add button" width={30} className="inline-block mr-4" />
          Posting Diskusi Baru
        </button>

        <div className="font-semibold text-red">
          <p className="mt-10 my-4">Daftar Topik Diskusi</p>

          <ul className="space-y-2">
            {topics.map((topic) => (
              <li
                key={topic}
                className="bg-softPink p-2 rounded text-pink-600 cursor-pointer"
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
