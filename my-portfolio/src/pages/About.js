import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link for internal navigation

function About() {
  // Framer Motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const buttonHover = {
    scale: 1.05,
    boxShadow: "0px 5px 15px rgba(0,0,0,0.3)"
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 md:py-16 py-8 md:px-6 px-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-20">
        
        {/* Decorative Animated Shapes */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200 dark:bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
        <div className="absolute -top-32 -right-32 w-72 h-72 bg-purple-200 dark:bg-gray-600 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-ping" />

        {/* Profile Image with Motion */}
        <motion.div 
          className="flex justify-center relative z-10"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/images/gavin.jpg"
            alt="Gavin Hart"
            className="rounded-full w-52 h-52 md:w-56 md:h-56 object-cover shadow-lg border-4 border-white dark:border-gray-800 transform transition-transform duration-300"
          />
        </motion.div>
        
        {/* Text Content with Motion */}
        <motion.div 
          className="relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-gray-50 leading-tight">
            Hello, I’m <span className="text-blue-600 dark:text-blue-400">Gavin Hart</span>
          </h2>
          <p className="text-lg text-gray-800 dark:text-gray-300 leading-loose mb-4">
          I’m a passionate <span className="font-semibold text-purple-600 dark:text-purple-400">Full Stack Developer</span>&nbsp;with experience in React, Node.js, and MongoDB. I love building intuitive, user-friendly applications that 
            make a positive impact. When I’m not coding, you can find me fishing or exploring new technologies to keep my skills sharp. I’m always learning and looking for new challenges, especially in design and UX, to refine my skills.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300 leading-loose">
            I’ve developed <span className="font-semibold text-blue-600 dark:text-blue-400">Contact Management APIs</span> and responsive websites for real 
            companies like SharpsTarps. I’m eager to grow with my next company and bring my problem-solving skills 
            to innovative teams that value creativity and impact.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link 
              to="/resume"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-2 px-5 rounded-full shadow transition-all duration-300 hover:shadow-md transform hover:scale-105"
            >
              View My Resume
            </Link>
            <motion.a 
              href="/contact"
              className="bg-gray-800 dark:bg-gray-700 text-white py-2 px-5 rounded-full font-medium transition-all duration-300"
              whileHover={buttonHover}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;