# Big Ant Frontend SPA (React)
A full **React Single Page Application** for the Big Ant Portfolio + Blog system.

This frontend consumes the backend API deployed on Render.

---

## 🎨 Tech Stack
- React + Vite
- React Router
- Context API
- Axios for API calls
- TailwindCSS (optional)
- JWT Authentication
- Deployment on Vercel

---

## 📁 Project Structure

big-ant-frontend/
│
├── src/
│ ├── components/
│ ├── pages/
│ ├── context/
│ ├── api/api.js
│ └── App.jsx
│
├── public/
├── package.json
└── .gitignore

yaml

---

## ⚙️ Installing & Running Locally

### 1. Install Dependencies
npm install

bash

### 2. Create `.env` File

Create `big-ant-frontend/.env`:

VITE_API_URL=http://localhost:5000/api

shell

### 3. Start Development Server
npm run dev

yaml

App runs at:
http://localhost:5173

yaml

---

## 🌐 API Base URL After Deployment

In Vercel → Project Settings → Environment Variables:

VITE_API_URL=https://big-ant-backend.onrender.com/api

yaml

---

## 📌 Features

### 🌍 Public Pages
| Route | Description |
|-------|-------------|
| `/` | Home |
| `/projects` | Portfolio projects |
| `/blog` | Blog list |
| `/blog/:id` | Blog detail + comments |
| `/contact` | Contact form |
| `/login` | Login |
| `/register` | Register |

---

### 🔐 Protected (Admin)
| Route | Description |
|-------|-------------|
| `/admin` | Blog & project management |

---

## 🧩 API Handling

### API Wrapper (`src/api/api.js`)

Handles:
- Base URL
- JWT token injection
- Global axios instance

---

## 🚀 Deployment on Vercel

### 1. Push frontend folder to GitHub  
*(Do NOT upload `node_modules` or `.env`)*

### 2. Import project on Vercel

### 3. Add Environment Variable:
VITE_API_URL=https://big-ant-backend.onrender.com/api

yaml

### 4. Deploy  
Vercel will build and publish the site.

---

## ✔️ Status
Frontend for Big Ant Capstone Full-Stack Portfolio + Blog System.