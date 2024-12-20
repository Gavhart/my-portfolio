import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false); // State to check submission status

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sending email using EmailJS
    emailjs
      .sendForm("service_1e39klv", "template_ub11gq8", e.target, "2StX9EXyHgh171sWm")
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true); // Set submission status to true on successful submission
        },
        (error) => {
          console.log(error.text);
        }
      );
    
    // Reset form data after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-20 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-50 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions, want to discuss a project, or just say hello? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-colors duration-300">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-50">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Name
                </label>
                <div className="relative">
                  <FontAwesomeIcon icon={faUser} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Email
                </label>
                <div className="relative">
                  <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="How can I help?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
            {/* Show confirmation message after form submission */}
            {isSubmitted && (
              <p className="mt-4 text-green-600 dark:text-green-400">
                Your message has been sent successfully! We'll get back to you soon.
              </p>
            )}
          </div>

          {/* Contact Info & Social */}
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-50">Connect With Me</h2>
              <p className="text-gray-700 dark:text-gray-300 max-w-sm">
                Feel free to connect through GitHub or LinkedIn to see more of my work or discuss potential collaborations.
              </p>
            </div>
            <div className="flex space-x-8">
              <a
                href="https://github.com/gavhart"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://linkedin.com/in/gavhart"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;