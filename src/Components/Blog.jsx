import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const { title } = blog;
  return (
    <>
      <h2 className="text-4xl font-semibold">{title}</h2>
    </>
  );
};

// Props Validation
Blog.propTypes = {
  blog: PropTypes.object,
};

export default Blog;
