// src/pages/Button.js

import React, { useState } from "react";

function Button() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="app">
      <section className="container">
        <h1 className="text-center">
          Welcome to the Fun Button Page!
        </h1>
        <p className="text-center">Click the button below for a surprise!</p>

        {/* Button with dynamic class based on state */}
        <button
          className={`trap-button ${isClicked ? "active" : ""}`}
          onClick={handleClick}
        >
          {isClicked ? "Clicked!" : "Click Me!"}
        </button>

        {/* Fun animation or message when button is clicked */}
        {isClicked && (
          <div className="text-center mt-4 text-lg text-green-600">
            🎉 Wow, you clicked the button! 🎉
          </div>
        )}
      </section>
    </div>
  );
}

export default Button;