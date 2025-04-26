// src/pages/Resume.js
import React from "react";

function Resume() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 py-16 px-6 transition-colors duration-300">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 transition-colors duration-300">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-extrabold mb-2">Gavin Hart</h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            541-816-1922 | Gavhart@yahoo.com | 
            <a 
              href="https://linkedin.com/in/gavhart" 
              target="_blank" 
              rel="noreferrer" 
              className="ml-1 text-blue-600 dark:text-blue-400 hover:underline"
            >
              linkedin.com/in/gavhart
            </a> | 
            <a 
              href="https://gavhart.github.io" 
              target="_blank" 
              rel="noreferrer" 
              className="ml-1 text-blue-600 dark:text-blue-400 hover:underline"
            >
              gavhart.github.io
            </a>
          </p>
          {/* Download Button */}
          <div className="mt-4">
            <a
              href="/resume.pdf"
              download="Gavin_Hart_Resume.pdf"
              className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-2 px-4 rounded-full font-medium transition-colors duration-300"
            >
              Download Resume
            </a>
          </div>
        </header>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-xl font-bold border-b border-gray-300 dark:border-gray-700 pb-2 mb-4">Education</h2>
          <div className="flex justify-between">
            <div>
              <p className="font-semibold">Brigham Young University - Idaho</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">B.S. Software Engineering – Full Stack Development</p>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">July 2024 • Rexburg, ID</p>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-xl font-bold border-b border-gray-300 dark:border-gray-700 pb-2 mb-4">Projects</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Hart Boys Skate Shop Website</strong> – Designed and developed a responsive skateboarding website using React and Tailwind CSS, with dynamic product displays and user-friendly navigation. This site will play a crucial role in the Owner getting brands to sponsor the shop.
            </li>
            <li>
              <strong>SharpsTarps E-commerce Website</strong> – Built a full product catalog website for industrial tarps, leveraging React, Tailwind CSS, and SEO best practices to maximize user engagement and mobile responsiveness.
            </li>
            <li>
              <strong>Weather Forecast App</strong> – Developed a sleek React-based application that consumes external weather APIs to deliver real-time weather updates with animated UI components.
            </li>
            <li>
              <strong>Mobile Note-Taking App</strong> – Built a cross-platform mobile app using React and tailwind to allow offline note management, simple UI, and local device storage.
            </li>
            <li>
              <strong>Headless Game</strong> – An experimental game with a graphical interface, focusing on gameplay mechanics and APIs.
            </li>
            <li>
              <strong>2D Adventure Game and Headless Game</strong> – In this activity I added some features to a game I helped write in a previous class. The game is a intricetly designed game using the phaser library. The game is a 2d platformer where the player must destroy the spiders and avoid not die.
            </li>
          </ul>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-xl font-bold border-b border-gray-300 dark:border-gray-700 pb-2 mb-4">Skills</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <p className="font-semibold">Front-end:</p>
              <p>React, Next.js, JavaScript, TypeScript, Tailwind CSS, HTML, CSS, Xamarin, Swift, Git/GitHub</p>
            </div>
            <div>
              <p className="font-semibold">Back-end:</p>
              <p>Node.js, Express, Python, C#, MySQL, MongoDB, Mongoose</p>
            </div>
            <div>
              <p className="font-semibold">Other Tools & Frameworks:</p>
              <p>Framer Motion, Postman, REST APIs, Responsive Design, Agile Methodology</p>
            </div>
          </div>
        </section>

        {/* Extra Learning */}
        <section className="mb-8">
          <h2 className="text-xl font-bold border-b border-gray-300 dark:border-gray-700 pb-2 mb-4">Extra Learning</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Currently building an AI-powered app inspired by ChatGPT, called <strong>ChadvinGPT</strong> (in progress).</li>
            <li>Completed Udemy course: <strong>React Native and Full Stack App Development</strong>.</li>
          </ul>
        </section>

        {/* Work Experience */}
        <section>
          <h2 className="text-xl font-bold border-b border-gray-300 dark:border-gray-700 pb-2 mb-4">Unrelated Work Experience</h2>
          <div className="flex justify-between mb-2">
            <div>
              <p className="font-semibold">Professional Driver</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">Various Companies</p>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">July 2019 - Present • Rexburg, ID</p>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Demonstrated exceptional punctuality and attention to detail through thorough vehicle inspections and time management.</li>
            <li>Maintained a professional, customer-focused demeanor to foster positive client and coworker relationships.</li>
            <li>Led onboarding and training for over 10 team members, enhancing team efficiency and morale.</li>
          </ul>
        </section>
      </div>
    </section>
  );
}

export default Resume;