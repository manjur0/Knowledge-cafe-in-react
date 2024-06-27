import { bool } from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("./../../public/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-2/3 mr-10">
      <h1 className="font-bold text-4xl">Blogs: {blogs.length}</h1>

      {/* blogs mapping and sent single blog component using props*/}
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
