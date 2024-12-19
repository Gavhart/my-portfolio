import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [dark, setDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // Mobile menu visibility state

  const toggleDarkMode = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  // Toggle mobile menu visibility
  };

  return (
    <nav className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-5 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Branding */}
        <Link to="/" className="text-3xl font-extrabold text-gray-900 dark:text-gray-50 tracking-tight">
          My<span className="text-blue-600 dark:text-blue-400">Portfolio</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8">
          {["About", "Projects", "Resume", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase() === 'about' ? '' : item.toLowerCase()}`}
                className="text-gray-900 dark:text-gray-50 font-medium relative transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <span className="pb-1 hover:after:scale-x-100 after:transition-all after:duration-300 after:block after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-[2px] after:scale-x-0 after:bg-blue-600 dark:after:bg-blue-400">
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

          {/* Hamburger Menu Icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-900 dark:text-gray-50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h18M3 6h18M3 18h18"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out absolute bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 top-full left-0 w-full mt-4 rounded-lg shadow-lg`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          {["About", "Projects", "Resume", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase() === 'about' ? '' : item.toLowerCase()}`}
                className="text-gray-900 dark:text-gray-50 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;