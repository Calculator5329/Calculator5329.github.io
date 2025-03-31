import React from "react";
import Project from "./components/Project";
import Profile from "./components/Profile";

function Projects() {
  return (
    <div className="main-container">
      <div className="profile-container">
        <Profile />
      </div>
      <div className="projects-container">
        <Project
          title="AI Research Dashboard"
          image="https://i.imgur.com/6MH80qX.jpeg"
          description="An AI-powered dashboard for tracking research trends using ArXiv and Hugging Face data."
          link="https://github.com/Calculator5329/ai-dashboard"
        />
        <Project
          title="AI Research Dashboard"
          image="https://i.imgur.com/fAGOD5x.jpeg"
          description="An AI-powered dashboard for tracking research trends using ArXiv and Hugging Face data."
          link="https://github.com/Calculator5329/ai-dashboard"
        />
        <Project
          title="AI Research Dashboard"
          image="https://i.imgur.com/b455H8s.png"
          description="An AI-powered dashboard for tracking research trends using ArXiv and Hugging Face data."
          link="https://github.com/Calculator5329/ai-dashboard"
        />
        <Project
          title="AI Research Dashboard"
          image="https://i.imgur.com/TuwX6q3.jpeg"
          description="An AI-powered dashboard for tracking research trends using ArXiv and Hugging Face data."
          link="https://github.com/Calculator5329/ai-dashboard"
        />
      </div>
    </div>
  );
}

export default Projects;
