import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ backgroundColor: "#333", padding: "1rem" }}>
      <ul style={{ display: "flex", gap: "1rem", listStyleType: "none", margin: 0, color: "#fff" }}>
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>About</Link>
        </li>
        <li>
          <Link to="/projects" style={{ textDecoration: "none", color: "#fff" }}>Projects</Link>
        </li>
        <li>
          <Link to="/resume" style={{ textDecoration: "none", color: "#fff" }}>Resume</Link>
        </li>
        <li>
          <Link to="/contact" style={{ textDecoration: "none", color: "#fff" }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;