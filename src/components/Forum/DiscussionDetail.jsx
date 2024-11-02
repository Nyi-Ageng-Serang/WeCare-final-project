import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ForumContext } from "../../context/ForumProvider";
import Hero from "./HeroSection";

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
    <>
      <Hero />
      <div className="py-20 xl:mx-16 mx-10 font-medium min-h-screen">
        <div className="mb-12 bg-softPink p-6 rounded-lg shadow-sm">
          <p className="text-white font-normal py-1 text-center w-32 rounded-xl bg-red">
            {discussion.category}
          </p>
          <p className="my-6">{discussion.details}</p>

          <div className="flex gap-4 justify-between items-center">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10 bg-red rounded-full mr-2"></div>
              <p className="text-sm text-gray-500">{discussion.user}</p>
            </div>
            <p className="text-sm text-gray-500">{discussion.time}</p>
          </div>
        </div>

        <div>
          <textarea
            className="w-full p-2 mb-4 border rounded-lg bg-white border-black min-h-24 focus:outline-none"
            placeholder="Tambahkan komentar..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <div className="flex justify-end">
            <button
              onClick={handleAddComment}
              className="inline-block font-semibold border-2 border-red bg-red text-white py-1 px-10 rounded-md hover:bg-softPink hover:border-softPink hover:text-red"
            >
              Kirim
            </button>
          </div>
        </div>

        <div className="mt-20">
          <ul className="mb-4 space-y-6">
            {discussion.comments.map((comment, index) => (
              <li key={index} className="bg-softPink p-6 rounded-lg shadow-sm">
                <div className="flex gap-4 justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10 bg-red rounded-full mr-2"></div>
                    <p className="text-sm text-gray-600">{comment.user}</p>
                  </div>
                  <p className="text-sm text-gray-500">{comment.time}</p>
                </div>
                <p className="mt-2">{comment.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default DiscussionDetail;
