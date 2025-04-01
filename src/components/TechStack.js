// components/TechStack.js
import React from "react";
import "../styles/TechStack.css";

export default function TechStack({ title, stack }) {
  return (
    <div className="tech-stack-wrapper">
      <h2 className="tech-stack-title">{title}</h2>
      <div className="tech-stack">
        {stack.map((tech, index) => (
          <div className="tech-item-s" key={index}>
            <img src={tech.src} alt={tech.name} className="tech-icon-s" />
            <span className="tech-name-s">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
