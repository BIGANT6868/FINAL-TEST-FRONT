import { createContext, useState, useEffect } from "react";
import API from "../api/api";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  // 获取所有博客
  const fetchBlogs = async () => {
    try {
      const res = await API.get("/blog");
      setBlogs(res.data);
    } catch (err) {
      console.error("获取博客失败", err);
    }
  };

  // 添加博客
  const addBlog = async (newBlog) => {
    try {
      const res = await API.post("/blog", newBlog);
      setBlogs([...blogs, res.data]);
    } catch (err) {
      console.error("添加博客失败", err);
    }
  };

  // 更新博客
  const updateBlog = async (id, updatedBlog) => {
    try {
      const res = await API.put(`/blog/${id}`, updatedBlog);
      setBlogs(blogs.map(b => (b._id === id ? res.data : b)));
    } catch (err) {
      console.error("更新博客失败", err);
    }
  };

  // 删除博客
  const deleteBlog = async (id) => {
    try {
      await API.delete(`/blog/${id}`);
      setBlogs(blogs.filter(b => b._id !== id));
    } catch (err) {
      console.error("删除博客失败", err);
    }
  };

  // 页面加载时获取博客
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
