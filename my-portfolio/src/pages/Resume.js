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
            541-816-1922 | Har19076@byui.edu | 
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
              https://gavhart.github.io
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
              <p className="text-sm text-gray-700 dark:text-gray-300">Software Engineering - Full Stack Development</p>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">July 2024 • Rexburg</p>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-xl font-bold border-b border-gray-300 dark:border-gray-700 pb-2 mb-4">Projects</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Built headless game.</li>
            <li>Adventure game in Python.</li>
            <li>Built a 2D game.</li>
            <li>Weather app.</li>
            <li>Multiple websites.</li>
            <li>Website for local business.</li>
            <li>Made a mobile note taking app.</li>
          </ul>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-xl font-bold border-b border-gray-300 dark:border-gray-700 pb-2 mb-4">Skills</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <p className="font-semibold">Front-end:</p>
              <p>React, JavaScript, HTML, CSS, TypeScript, Tailwind CSS, Xamarin, Git/GitHub, Next.js, Swift</p>
            </div>
            <div>
              <p className="font-semibold">Back-end:</p>
              <p>Python, C#, MySQL, MongoDB, Mongoose</p>
            </div>
          </div>
        </section>

        {/* Extra Learning */}
        <section className="mb-8">
          <h2 className="text-xl font-bold border-b border-gray-300 dark:border-gray-700 pb-2 mb-4">Extra learning</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Building an AI app like ChatGPT called ChadvinGPT (in progress). Enjoying the learning experience!</li>
            <li>Udemy course - Building apps in React and native.</li>
          </ul>
        </section>

        {/* Work Experience */}
        <section>
          <h2 className="text-xl font-bold border-b border-gray-300 dark:border-gray-700 pb-2 mb-4">Work Experience</h2>
          <div className="flex justify-between mb-2">
            <div>
              <p className="font-semibold">Various Companies</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">Professional Driver</p>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">July 2019 - Present • Rexburg, ID</p>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Demonstrated exceptional punctuality, conducting comprehensive pre-departure inspections ahead of the stipulated schedule.</li>
            <li>Cultivated a collaborative and harmonious workplace environment, emphasizing equilibrium between esteemed customers and dedicated team members.</li>
            <li>Spearheaded the recruitment, onboarding, and oversight of a proficient team comprising more than 10 individuals, ensuring their seamless assimilation into the workforce.</li>
          </ul>
        </section>
      </div>
    </section>
  );
}

export default Resume;