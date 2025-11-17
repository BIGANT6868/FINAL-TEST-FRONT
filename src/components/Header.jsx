import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header p-4 bg-gray-800 text-white flex justify-between">
      <Link to="/" className="font-bold text-xl">BIG ANT</Link>
      <nav className="space-x-4">
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/admin">Admin</Link>
      </nav>
    </header>
  );
};

export default Header;
