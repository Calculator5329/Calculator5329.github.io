import React from "react";
import "../styles/Profile.css";
import ProfileLinks from "./ProfileLinks";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <a
          href="https://github.com/Calculator5329"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-img-link"
        >
          <div className="profile-img-wrapper">
            <img src="/profile.png" alt="Profile" className="profile-img" />
          </div>
        </a>

        <h1 className="profile-name">Ethan</h1>

        <p className="profile-bio">
          CS graduate starting an AI/ML Master's in April. Skilled in Python,
          Java, C#, SQL & JavaScript. Curious learner into AI, economics,
          finance & philosophy.
        </p>

        <a
          href="https://ia601207.us.archive.org/35/items/eg-resume-3-30/EG_Resume_3_30.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          Download Resume
        </a>
      </div>
      <div className="profile-card">
        <ProfileLinks />
      </div>
    </div>
  );
}
