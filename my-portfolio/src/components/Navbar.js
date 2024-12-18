// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 py-4 px-6 shadow-sm">
      <h1 className="text-lg font-bold text-gray-900 dark:text-gray-50">My Portfolio</h1>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="text-gray-900 dark:text-gray-50 hover:text-blue-500 dark:hover:text-blue-400">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="text-gray-900 dark:text-gray-50 hover:text-blue-500 dark:hover:text-blue-400">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/resume" className="text-gray-900 dark:text-gray-50 hover:text-blue-500 dark:hover:text-blue-400">
            Resume
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-gray-900 dark:text-gray-50 hover:text-blue-500 dark:hover:text-blue-400">
            Contact
          </Link>
        </li>
      </ul>
      <button
        onClick={toggleDarkMode}
        className="ml-4 bg-blue-500 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 text-white py-1 px-3 rounded"
      >
        {dark ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
}

export default Navbar;