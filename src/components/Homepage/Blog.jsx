import { useContext, useState } from "react";
import Logo from "../../assets/logoWecare.png";
import { BlogContext } from "../../context/BlogProvider";
import { useNavigate } from "react-router-dom";

function Blog() {
  const { blogs } = useContext(BlogContext);
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();
  const blogsPerPage = 4;

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, blogs.length - blogsPerPage)
    );
  };

  const handleBlogClick = (id) => {
    navigate(`/blog/${id}`);
  };

  const currentBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);

  return (
    <>
      <div className="w-full py-6 my-6">
        <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center my-4">
            <h1 className="text-2xl font-bold my-4">Berita Terbaru</h1>
            <div>
              <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                className="px-2 pb-1 bg-red text-softPink text-2xl font-bold rounded-md mr-2"
              >
                &lt;
              </button>
              <button
                onClick={handleNext}
                disabled={startIndex + blogsPerPage >= blogs.length}
                className="px-2 pb-1 bg-red text-softPink text-2xl font-bold rounded-md"
              >
                &gt;
              </button>
            </div>
          </div>

          <div className="flex flex-nowrap gap-4 overflow-x-auto py-4 hide-scrollbar">
            {currentBlogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => handleBlogClick(blog.id)}
                className="flex-shrink-0 w-64 sm:w-72 md:w-80 p-4 transform transition duration-500 ease-in-out hover:scale-105"
              >
                <img
                  src={blog.img}
                  alt=""
                  className="w-full h-48 object-cover rounded-lg shadow-md transition duration-500 ease-in-out"
                />
                <div className="bg-softPink p-4 min-h-[220px] flex flex-col justify-between rounded-b-lg">
                  <h3 className="text-lg font-semibold my-2">{blog.title}</h3>
                  <p className="text-sm text-gray-700">
                    {blog.content.substring(0, 100)}...
                  </p>
                  <small className="text-gray-500">
                    {blog.author} - {blog.date}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .hide-scrollbar {
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </>
  );
}

export default Blog;
