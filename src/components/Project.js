import React from "react";
import "../styles/Project.css";

export default function Project({ title, image, description, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <div className="project-img-wrapper">
        <img src={image} alt={title} className="project-img" />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
    </a>
  );
}
