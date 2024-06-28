import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmarks, hanldMarkAsRead }) => {
  const {
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-12">
      <img
        className="rounded-lg w-full"
        src={cover}
        alt={`cover picture of the ${title}`}
      />
      <div className="flex justify-between items-center">
        <div className="flex  gap-4 items-center my-6">
          <img className="w-12" src={author_img} alt="" />
          <div>
            <h2>{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read </span>
          <button
            onClick={() => handleAddToBookmarks(blog.title)}
            className="text-2xl ml-5"
          >
            <FaBookmark />
          </button>
        </div>
      </div>

      <h2 className="text-4xl font-semibold ">{title}</h2>
      <p className="my-4">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>{" "}
          </span>
        ))}
      </p>
      <button
        onClick={() => {
          hanldMarkAsRead(reading_time);
        }}
        className="text-blue-600 cursor-pointer underline"
      >
        Mark as read
      </button>
    </div>
  );
};

// Props Validation
Blog.propTypes = {
  blog: PropTypes.object,
};

export default Blog;
