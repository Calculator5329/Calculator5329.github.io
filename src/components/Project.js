import React from "react";
import "../styles/Project.css";

export default function Project({
  title,
  image,
  description,
  link,
  techIcons = [],
  placeholder = false,
}) {
  const totalIcons = techIcons.length;
  const half = Math.ceil(totalIcons / 2);
  const iconGap = totalIcons === 4 ? "32px" : "24px";

  if (placeholder) {
    return (
      <div className="project-card placeholder">
        <div className="coming-soon-overlay">
          <span className="coming-soon-text">Coming Soon</span>
        </div>
      </div>
    );
  }

  const cardContent = (
    <>
      <div className="project-img-wrapper">
        {(
          <>
            <div className="tech-icons left-icons" style={{ gap: iconGap }}>
              {techIcons.slice(0, half).map((icon, index) => (
                <div className="tech-icon-wrapper" key={`left-${index}`}>
                  <div className="tech-tooltip">
                    <img
                      src={icon.src}
                      alt={`tech-left-${index}`}
                      className="tech-icon"
                    />
                    <span className="tooltip-text">{icon.name}</span>
                  </div>
                </div>
              ))}
            </div>

            <img src={image} alt={title} className="project-img" />

            <div className="tech-icons right-icons" style={{ gap: iconGap }}>
              {techIcons.slice(half).map((icon, index) => (
                <div className="tech-icon-wrapper" key={`right-${index}`}>
                  <div className="tech-tooltip">
                    <img
                      src={icon.src}
                      alt={`tech-right-${index}`}
                      className="tech-icon"
                    />
                    <span className="tooltip-text">{icon.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
    </>
  );

  if (!link) {
    return <div className="project-card">{cardContent}</div>;
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      {cardContent}
    </a>
  );
}
