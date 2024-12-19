// src/pages/Projects.js
import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projectData = [
    {
      title: "Contact Management API",
      description: "A CRUD API using Node.js, Express, MongoDB, and Swagger documentation.",
      link: "#",
      image: "/images/contact-api.png"
    },
    {
      title: "SharpsTarps Website",
      description: "A responsive e-commerce site built with React and Tailwind CSS.",
      link: "#",
      image: "/images/sharpstarps.jpeg"
    },
    {
      title: "Weather App",
      description: "A React-based weather forecast application consuming external APIs.",
      link: "#",
      image: "/images/weather.jpg"
    },
    {
      title: "Note Taking Mobile App",
      description: "A mobile note-taking app built with Xamarin, focused on simplicity and offline capabilities.",
      link: "#",
      image: "/images/notes.jpg"
    },
    {
      title: "Headless Game Prototype",
      description: "An experimental game without a graphical interface, focusing on gameplay mechanics and APIs.",
      link: "#",
      image: "/images/game.jpg"
    },
    {
      title: "2D Adventure Game",
      description: "A Python-based 2D game with Pygame, featuring sprite animations and level design.",
      link: "#",
      image: "/images/2d.png"
    },
    {
      title: "Local Business Website",
      description: "A simple, SEO-friendly website for a local business, built with Next.js for fast performance.",
      link: "#",
      image: "/images/buisness.jpg"
    },
    {
      title: "Chatbot Integration Demo",
      description: "Integrated OpenAI's API into a React app to create a functional, responsive chatbot.",
      link: "#",
      image: "/images/chatbot.png"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-20 px-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-50 mb-4">My Projects</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here’s a selection of my work, showcasing applications, websites, and APIs I’ve built or contributed to. Each project focuses on creating intuitive user experiences, clean code, and scalable architectures.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              {project.image && (
                <div className="h-40 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}
              {/* Project Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">{project.title}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-2 px-4 rounded-full font-medium transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;