// Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-100 dark:bg-gray-900 py-4 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300 z-50">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Gavin Hart
        </p>
        <div className="flex space-x-6">
          <a
            href="https://github.com/gavhart"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            href="https://linkedin.com/in/gavhart"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;