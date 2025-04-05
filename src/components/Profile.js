import React from "react";
import "../styles/Profile.css";
import ProfileLinks from "./ProfileLinks";
import TechStack from "./TechStack";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-img-wrapper">
          <a
            href="https://github.com/Calculator5329"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-img-link"
          >
            <img
              src={`${process.env.PUBLIC_URL}/profile.png`}
              alt="Profile"
              className="profile-img"
            />
          </a>
        </div>

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
            {
              src: `${process.env.PUBLIC_URL}/icon/Python.svg`,
              name: "Python",
            },
            {
              src: `${process.env.PUBLIC_URL}/icon/Javascript.svg`,
              name: "Javascript",
            },
            { src: `${process.env.PUBLIC_URL}/icon/MySQL.svg`, name: "SQL" },
            { src: `${process.env.PUBLIC_URL}/icon/CSharp.svg`, name: "C#" },
            { src: `${process.env.PUBLIC_URL}/icon/Java.svg`, name: "Java" },
          ]}
        />
        <TechStack
          title="Frameworks & Libraries"
          stack={[
            { src: `${process.env.PUBLIC_URL}/icon/React.svg`, name: "React" },
            {
              src: `${process.env.PUBLIC_URL}/icon/FastAPI.svg`,
              name: "FastAPI",
            },
            { src: `${process.env.PUBLIC_URL}/icon/Flask.svg`, name: "Flask" },
            {
              src: `${process.env.PUBLIC_URL}/icon/Tensorflow.svg`,
              name: "TensorFlow",
            },
            {
              src: `${process.env.PUBLIC_URL}/icon/Pandas.svg`,
              name: "Pandas",
            },
          ]}
        />
        <TechStack
          title="Infrastructure & Tools"
          stack={[
            {
              src: `${process.env.PUBLIC_URL}/icon/Google Cloud.svg`,
              name: "Google Cloud",
            },
            { src: `${process.env.PUBLIC_URL}/icon/Azure.svg`, name: "Azure" },
            {
              src: `${process.env.PUBLIC_URL}/icon/Docker.svg`,
              name: "Docker",
            },
            {
              src: `${process.env.PUBLIC_URL}/icon/Raspberry Pi.svg`,
              name: "Raspberry Pi",
            },
            {
              src: `${process.env.PUBLIC_URL}/icon/GitHub.svg`,
              name: "GitHub",
            },
          ]}
        />
      </div>
    </div>
  );
}
