import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-4 shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Branding */}
        <Link to="/" className="text-2xl font-extrabold text-gray-900 dark:text-gray-50 tracking-tight">
          My<span className="text-blue-600 dark:text-blue-400">Portfolio</span>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          {["About", "Projects", "Resume", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase() === 'about' ? '' : item.toLowerCase()}`}
                className="text-gray-900 dark:text-gray-50 font-medium hover:text-blue-600 dark:hover:text-blue-400 relative transition-colors duration-300"
              >
                <span className="pb-1 hover:after:scale-x-100 after:transition-transform after:duration-300 after:block after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-[2px] after:scale-x-0 after:bg-blue-600 dark:after:bg-blue-400">
                  {item}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle */}
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleDarkMode}
            className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400 text-white py-2 px-4 rounded-full transition-colors duration-300"
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
          
          <button className="md:hidden text-gray-900 dark:text-gray-50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h18M3 6h18M3 18h18"></path>
            </svg>
          </button> 
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;