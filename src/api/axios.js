import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/api", // ← 你的 Node 后端地址
});
