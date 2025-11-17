import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card border p-4 rounded shadow mb-4">
      <h3 className="text-lg font-bold">{blog.title}</h3>
      <p>{blog.content.substring(0, 100)}...</p>
      <Link to={`/blog/${blog._id}`} className="text-blue-500">阅读全文</Link>
    </div>
  );
};

export default BlogCard;
