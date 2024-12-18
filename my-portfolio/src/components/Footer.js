import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#333", padding: "1rem", color: "#fff", marginTop: "auto" }}>
      <p>&copy; {new Date().getFullYear()} Gavin Hart</p>
      <div>
        <a href="https://github.com/gavhart" target="_blank" rel="noreferrer" style={{ color: "#fff", marginRight: "1rem" }}>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/gavhart" target="_blank" rel="noreferrer" style={{ color: "#fff" }}>
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;