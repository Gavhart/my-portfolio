import React from "react";

function Projects() {
  const projectData = [
    {
      title: "Contact Management API",
      description: "CRUD API with Express, MongoDB, Mongoose, and Swagger docs.",
      link: "#"
    },
    {
      title: "SharpsTarps Website",
      description: "Responsive front-end built with HTML, CSS, and JavaScript.",
      link: "#"
    }
    // Add more projects as desired
  ];

  return (
    <section style={{ padding: "2rem" }}>
      <h1>Projects</h1>
      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}>
        {projectData.map((project, index) => (
          <div key={index} style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "5px" }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;