import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card border p-4 rounded shadow">
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover mb-2" />
      <h3 className="text-lg font-bold">{project.title}</h3>
      <p>{project.description}</p>
      {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-500">查看项目</a>}
    </div>
  );
};

export default ProjectCard;
