import React, { useEffect, useState } from "react";
import API from "../api/api";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await API.get("/projects");
      setProjects(res.data);
    };
    fetchProjects();
  }, []);

  return (
    <div className="projects-container p-4">
      <h1 className="text-2xl font-bold mb-4">作品集</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(project => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
