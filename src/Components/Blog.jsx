import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const {
    id,
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
        className="rounded-lg"
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
          <span>{reading_time} min read</span>
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
      <button className="text-blue-600 cursor-pointer underline">Mark as read</button>
    </div>
  );
};

// Props Validation
Blog.propTypes = {
  blog: PropTypes.object,
};

export default Blog;
