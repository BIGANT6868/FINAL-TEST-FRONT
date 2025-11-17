import React, { useState } from "react";
import API from "../api/api";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/contact", form);
    setStatus("消息已发送！");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container">
      <h1>联系我</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="姓名"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="邮箱"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          placeholder="消息"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button type="submit">发送</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default Contact;
