import React from "react";

function Resume() {
  // Add your actual resume PDF path or link
  const resumeUrl = "/resume.pdf";

  return (
    <section style={{ padding: "2rem" }}>
      <h1>Resume</h1>
      <a href={resumeUrl} download="Gavin_Hart_Resume">Download My Resume</a>
      {/* 
        Or embed your resume if you want it displayed inline:
        <iframe src={resumeUrl} style={{ width: "100%", height: "600px" }} title="Resume" />
      */}
    </section>
  );
}

export default Resume;