import { Link } from "react-router-dom";

function DiscussionItem({ id, category, user, text, time }) {
  return (
    <>
      <div className="p-4 my-8 border-b border-gray-400">
        <p className="text-white text-center w-24 rounded-xl bg-red">
          {category}
        </p>
        <Link to={`/discussions/${id}`}>
          <p className="font-semibold my-2">{text}</p>
        </Link>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full mr-2"></div>
            <p className="text-sm text-gray-500">{user}</p>
          </div>
          <p>{time}</p>
        </div>
      </div>
    </>
  );
}

export default DiscussionItem;
