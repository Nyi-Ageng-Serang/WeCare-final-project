import { useEffect, useState } from "react";
import add from "../../assets/Add.png";
import axios from "axios";

function Sidebar({ onOpen, onSelectTopic }) {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get("https://substantial-starla-ardhilla-fa22d60a.koyeb.app/forum/categories");
        
        if (response.data && response.data.categories) {
          const topicNames = response.data.categories.map((category) => category.name);
          setTopics(topicNames);
        } 
      } catch (error) {
        console.error("Error fetching topics:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchTopics();
  }, []);

  return (
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
          {loading ? (
            <li>Loading topics...</li>
          ) : (
            topics.length > 0 ? (
              topics.map((topic, index) => (
                <li
                  key={index}
                  onClick={() => onSelectTopic(topic)}
                  className="bg-softPink p-2 rounded text-red cursor-pointer"
                >
                  {topic}
                </li>
              ))
            ) : (
              <li>No topics available</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
