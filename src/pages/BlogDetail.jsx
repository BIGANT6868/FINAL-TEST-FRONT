import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import API from "../api/api";
import { AuthContext } from "../context/AuthContext";

const BlogDetail = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await API.get(`/blog/${id}`);
      setBlog(res.data);
    };
    const fetchComments = async () => {
      const res = await API.get(`/blog/${id}/comments`);
      setComments(res.data);
    };
    fetchBlog();
    fetchComments();
  }, [id]);

  const handleComment = async () => {
    if (!newComment) return;
    const res = await API.post(`/blog/${id}/comments`, { content: newComment });
    setComments([...comments, res.data]);
    setNewComment("");
  };

  return (
    <div className="container">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>

      <h3>评论</h3>
      {comments.map((c) => (
        <div key={c._id}>
          <p>{c.content}</p>
          <small>作者ID: {c.author}</small>
        </div>
      ))}

      {user && (
        <div>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="写评论..."
          />
          <button onClick={handleComment}>提交评论</button>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
