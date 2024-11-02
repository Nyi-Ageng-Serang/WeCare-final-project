import add from "../../assets/Add.png";

function Sidebar({ onOpen, onSelectTopic }) {
  const topics = ["Freelance", "Tips & Trik", "Life Style", "STEM"];

  return (
    <>
      <div className="w-full lg:w-1/4 my-10">
        <button
          onClick={onOpen}
          className="bg-gray-100 text-gray-800 font-semibold w-full py-2 mb-4 rounded-lg shadow-md"
        >
          <img
            src={add}
            alt="Add button"
            width={30}
            className="inline-block mr-4"
          />
          Posting Diskusi Baru
        </button>

        <div className="font-semibold text-red">
          <p className="mt-10 my-4">Daftar Topik Diskusi</p>

          <ul className="space-y-3">
            {topics.map((topic) => (
              <li
                key={topic}
                onClick={() => onSelectTopic(topic)}
                className="bg-softPink p-2 rounded text-red cursor-pointer"
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
