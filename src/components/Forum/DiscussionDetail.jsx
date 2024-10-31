import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ForumContext } from "../../context/ForumProvider";

function DiscussionDetail() {
  const { id } = useParams();
  const { discussions, addComment } = useContext(ForumContext);
  const discussion = discussions.find((discussion) => discussion.id === id);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      addComment(id, newComment);
      setNewComment("");
    }
  };

  if (!discussion) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="py-10 mx-10 font-medium min-h-screen">
      <div className="mb-12 bg-softPink p-4 rounded-lg">
        <p className="text-white font-normal py-1 text-center w-32 rounded-xl bg-red">
          {discussion.category}
        </p>
        <p className="my-4">{discussion.details}</p>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full mr-2"></div>
            <p className="text-sm text-gray-500">{discussion.user}</p>
          </div>
          <p className="text-sm text-gray-500">{discussion.time}</p>
        </div>
      </div>

      <div>
        <textarea
          className="w-full p-2 mb-2 border rounded-lg bg-white border-black"
          placeholder="Tambahkan komentar..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button
          onClick={handleAddComment}
          className="inline-block font-normal border-2 border-red bg-red text-white py-1 px-12 rounded-md hover:bg-pink hover:border-pink hover:text-red"
        >
          Kirim
        </button>
      </div>

      <h2 className="text-xl font-semibold mt-8">Komentar</h2>
      <ul className="mb-4">
        {discussion.comments.map((comment, index) => (
          <li key={index} className="p-2 border-b border-gray-300">
            <p className="text-sm text-gray-600">{comment.user}</p>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DiscussionDetail;
