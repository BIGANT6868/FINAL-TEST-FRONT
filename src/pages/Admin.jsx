import React, { useState, useEffect, useContext } from "react";
import API from "../api/api";
import { AuthContext } from "../context/AuthContext";

const Admin = () => {
  const { user } = useContext(AuthContext);

  // 博客状态
  const [blogs, setBlogs] = useState([]);
  const [blogForm, setBlogForm] = useState({ title: "", content: "", tags: "" });

  // 项目状态
  const [projects, setProjects] = useState([]);
  const [projectForm, setProjectForm] = useState({ title: "", description: "", link: "", imageUrl: "" });

  // 获取博客和项目
  const fetchBlogs = async () => {
    const res = await API.get("/blog");
    setBlogs(res.data);
  };

  const fetchProjects = async () => {
    const res = await API.get("/projects");
    setProjects(res.data);
  };

  useEffect(() => {
    fetchBlogs();
    fetchProjects();
  }, []);

  // 博客操作
  const createBlog = async () => {
    const res = await API.post("/blog", {
      ...blogForm,
      tags: blogForm.tags.split(",").map(tag => tag.trim())
    }, {
      headers: { Authorization: `Bearer ${user.token}` }
    });
    setBlogs([...blogs, res.data]);
    setBlogForm({ title: "", content: "", tags: "" });
  };

  const deleteBlog = async (id) => {
    await API.delete(`/blog/${id}`, { headers: { Authorization: `Bearer ${user.token}` } });
    setBlogs(blogs.filter(blog => blog._id !== id));
  };

  // 项目操作
  const createProject = async () => {
    const res = await API.post("/projects", projectForm, {
      headers: { Authorization: `Bearer ${user.token}` }
    });
    setProjects([...projects, res.data]);
    setProjectForm({ title: "", description: "", link: "", imageUrl: "" });
  };

  const deleteProject = async (id) => {
    await API.delete(`/projects/${id}`, { headers: { Authorization: `Bearer ${user.token}` } });
    setProjects(projects.filter(project => project._id !== id));
  };

  return (
    <div className="admin-container">
      <h1>后台管理 - BIG ANT</h1>

      {/* 博客管理 */}
      <section>
        <h2>博客管理</h2>
        <input
          placeholder="标题"
          value={blogForm.title}
          onChange={e => setBlogForm({ ...blogForm, title: e.target.value })}
        />
        <textarea
          placeholder="内容"
          value={blogForm.content}
          onChange={e => setBlogForm({ ...blogForm, content: e.target.value })}
        />
        <input
          placeholder="标签, 逗号分隔"
          value={blogForm.tags}
          onChange={e => setBlogForm({ ...blogForm, tags: e.target.value })}
        />
        <button onClick={createBlog}>新增博客</button>

        <ul>
          {blogs.map(blog => (
            <li key={blog._id}>
              {blog.title} 
              <button onClick={() => deleteBlog(blog._id)}>删除</button>
            </li>
          ))}
        </ul>
      </section>

      {/* 项目管理 */}
      <section>
        <h2>作品集管理</h2>
        <input
          placeholder="标题"
          value={projectForm.title}
          onChange={e => setProjectForm({ ...projectForm, title: e.target.value })}
        />
        <input
          placeholder="描述"
          value={projectForm.description}
          onChange={e => setProjectForm({ ...projectForm, description: e.target.value })}
        />
        <input
          placeholder="链接"
          value={projectForm.link}
          onChange={e => setProjectForm({ ...projectForm, link: e.target.value })}
        />
        <input
          placeholder="图片 URL"
          value={projectForm.imageUrl}
          onChange={e => setProjectForm({ ...projectForm, imageUrl: e.target.value })}
        />
        <button onClick={createProject}>新增作品</button>

        <ul>
          {projects.map(project => (
            <li key={project._id}>
              {project.title} 
              <button onClick={() => deleteProject(project._id)}>删除</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Admin;
