import { createContext, useState, useEffect } from "react";
import API from "../api/api";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  // 获取所有项目
  const fetchProjects = async () => {
    try {
      const res = await API.get("/projects");
      setProjects(res.data);
    } catch (err) {
      console.error("获取项目失败", err);
    }
  };

  // 添加项目
  const addProject = async (newProject) => {
    try {
      const res = await API.post("/projects", newProject);
      setProjects([...projects, res.data]);
    } catch (err) {
      console.error("添加项目失败", err);
    }
  };

  // 更新项目
  const updateProject = async (id, updatedProject) => {
    try {
      const res = await API.put(`/projects/${id}`, updatedProject);
      setProjects(projects.map(p => (p._id === id ? res.data : p)));
    } catch (err) {
      console.error("更新项目失败", err);
    }
  };

  // 删除项目
  const deleteProject = async (id) => {
    try {
      await API.delete(`/projects/${id}`);
      setProjects(projects.filter(p => p._id !== id));
    } catch (err) {
      console.error("删除项目失败", err);
    }
  };

  // 页面加载时获取项目
  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider value={{ projects, addProject, updateProject, deleteProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
