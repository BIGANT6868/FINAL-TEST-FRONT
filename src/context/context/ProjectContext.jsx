import React, { createContext, useState } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  const addProject = (project) => {
    setProjects((prev) => [...prev, project]);
  };

  return (
    <ProjectContext.Provider value={{ projects, setProjects, addProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
