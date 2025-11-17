import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { AuthProvider } from "./context/AuthContext";
import { BlogProvider } from "./context/BlogContext";
import { ProjectProvider } from "./context/ProjectContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BlogProvider>
        <ProjectProvider>
          <App />
        </ProjectProvider>
      </BlogProvider>
    </AuthProvider>
  </StrictMode>
);
