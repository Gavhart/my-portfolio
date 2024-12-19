// src/pages/About.js
import React from "react";

function About() {
  return (
    <section className="bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Profile Image */}
        <div className="flex justify-center">
        <img
  src="/images/gavin.jpg"
  alt="Gavin Hart"
  className="rounded-full w-10 h-10 md:w-10 md:h-10 lg:w-10 lg:h-10 object-cover shadow-lg"
/>
        </div>
        
        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Hello, I'm Gavin Hart</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I’m a passionate <span className="font-semibold">Full Stack Developer</span> with experience 
            in React, Node.js, and MongoDB. My goal is to build intuitive, user-friendly applications 
            that have a positive impact. Outside of coding, I enjoy fishing in southeastern Idaho 
            and experimenting with new tech stacks to keep my skills sharp.
          </p>
          <p className="text-gray-700 leading-relaxed">
            My background also includes developing software projects such as 
            <span className="font-semibold"> Contact Management APIs </span>
            and building responsive websites for real companies like SharpsTarps. 
            I aim to grow with my next company and bring my problem-solving skills 
            to innovative teams.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded shadow">
              View My Resume
            </button>
            <button className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded shadow">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;