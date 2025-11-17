import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 临时注释掉 Context Providers，先保证部署成功
// import { AuthProvider } from './context/AuthContext'
// import { BlogProvider } from './context/BlogContext'
// import { ProjectProvider } from './context/ProjectContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AuthProvider>
      <BlogProvider>
        <ProjectProvider> */}
          <App />
        {/* </ProjectProvider>
      </BlogProvider>
    </AuthProvider> */}
  </StrictMode>
)
