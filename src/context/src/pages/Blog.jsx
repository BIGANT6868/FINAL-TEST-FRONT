import React, { useEffect, useState } from "react";
import API from "../api/api";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await API.get("/blog");
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="blog-container p-4">
      <h1 className="text-2xl font-bold mb-4">博客</h1>
      {blogs.map(blog => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default Blog;
