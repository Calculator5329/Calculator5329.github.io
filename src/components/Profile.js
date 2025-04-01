import React from "react";
import "../styles/Profile.css";
import ProfileLinks from "./ProfileLinks";
import TechStack from "./TechStack";

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
      <div className="profile-card" style={{ paddingTop: "0.5rem" }}>
        <TechStack
          title="Languages"
          stack={[
            { src: "/icon/Python.svg", name: "Python" },
            { src: "/icon/Javascript.svg", name: "Javascript" },
            { src: "/icon/MySQL.svg", name: "SQL" },
            { src: "/icon/CSharp.svg", name: "C#" },
            { src: "/icon/Java.svg", name: "Java" },
          ]}
        />
        <TechStack
          title="Frameworks & Libraries"
          stack={[
            { src: "/icon/React.svg", name: "React" },
            { src: "/icon/FastAPI.svg", name: "FastAPI" },
            { src: "/icon/Flask.svg", name: "Flask" },
            { src: "/icon/Tensorflow.svg", name: "TensorFlow" },
            { src: "/icon/Pandas.svg", name: "Pandas" },
          ]}
        />
        <TechStack
          title="Infrastructure & Tools"
          stack={[
            { src: "/icon/Google Cloud.svg", name: "Google Cloud" },
            { src: "/icon/Azure.svg", name: "Azure" },
            { src: "/icon/Docker.svg", name: "Docker" },
            { src: "/icon/Raspberry Pi.svg", name: "Raspberry Pi" },
            { src: "/icon/GitHub.svg", name: "GitHub" },
          ]}
        />
      </div>
    </div>
  );
}
