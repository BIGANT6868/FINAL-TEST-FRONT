// src/context/BlogContext.jsx
import { createContext, useState, useEffect } from "react";
import API from "../api/api"; // 你之前的 API 配置文件

// 创建上下文
export const BlogContext = createContext();

// 提供者组件
export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 从后端获取博客列表
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await API.get("/blog");
        setBlogs(res.data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs, loading, error }}>
      {children}
    </BlogContext.Provider>
  );
};
