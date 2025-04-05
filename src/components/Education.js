// components/TechStack.js
import React from "react";
import "../styles/Education.css";

export default function TechStack({ title, stack }) {
  return (
    <div>
      <div className="education-container">
        <div className="education-card">
          <a
            href="https://www.wgu.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="education-logo-link"
          >
            <img src="/wgu.png" alt="WGU Logo" className="education-logo" />
          </a>
          <div className="education-content">
            <div className="education-separator"></div>
            <div className="education-text">
              <h3>Bachelors Degree in Computer Science</h3>
              <p>Western Governors University</p>
              <p>2023-2025</p>
            </div>
          </div>
          <div className="diploma-div">
            <a
              href="/diploma.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="diploma-link"
            >
              <img src="/diploma.png" alt="Diploma" className="diploma-logo" />
            </a>
          </div>
        </div>

        <div className="certification-card">
          <a
            href="https://cs.lpi.org/caf/Xamman/certification/verify/LPI000614495/p9tu55hjfa"
            target="_blank"
            rel="noopener noreferrer"
            className="certification-link"
          >
            <div className="certification-content">
              <img
                src="/LPI.png"
                alt="Icon"
                className="certification-logo"
                style={{ borderRadius: "100%" }}
              />

              <div className="certification-separator"></div>
              <div className="education-text">
                <h3>Linux Essentials</h3>
                <p>2025</p>
              </div>
            </div>
          </a>
          <a
            href="https://www.peoplecert.org/login"
            target="_blank"
            rel="noopener noreferrer"
            className="certification-link"
          >
            <div className="certification-content">
              <img src="/ITIL.png" alt="Icon" className="certification-logo" />

              <div className="certification-separator"></div>
              <div className="education-text">
                <h3>ITIL 4 Foundations</h3>
                <p>2023</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
