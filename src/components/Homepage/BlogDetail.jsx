import { useParams } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "../../context/BlogProvider";

function BlogDetail() {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <p>Blog not found!</p>;
  }

  return (
    <div className="max-w-2xl p-6 mx-auto font-medium">
      <img
        src={blog.img}
        alt=""
        className="w-full h-72 object-cover rounded-lg mb-4"
      />
      <div className="mb-4">
        <h1 className="text-3xl font-bold">{blog.title}</h1>
        <small className="text-gray-500">
          {blog.author} - {blog.date}
        </small>
      </div>
      <div className="text-gray-800 space-y-4">
        {blog.content.split("\n").map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default BlogDetail;
