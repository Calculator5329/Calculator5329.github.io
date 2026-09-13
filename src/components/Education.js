import React from "react";
import "../styles/Education.css";

// <h2 className="education-title">Education & Certifications</h2>

export default function Education({ title, stack }) {
  return (
    <div className="education-container-m">
      <div className="education-container">
        <div className="education-card">
          <a
            href="https://www.wgu.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="education-logo-link"
          >
            <img
              src={`${process.env.PUBLIC_URL}/wgu.png`}
              alt="WGU Logo"
              className="education-logo"
            />
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
              href={`${process.env.PUBLIC_URL}/diploma.pdf`}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="diploma-link"
            >
              <img
                src={`${process.env.PUBLIC_URL}/diploma.png`}
                alt="Diploma"
                className="diploma-logo"
              />
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
                src={`${process.env.PUBLIC_URL}/LPI.png`}
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
            href="https://candidate.peoplecert.org/MobileReports.aspx?id=C50C19EEFA7581640739F630619F04D8B7A6E580CDD16994E3B69E74FCF888569FED31E56DB917176ABEC007D03A6DF753832C24816B2DC03504AD9E0F142E4193AE88E5F7F13A98A487BDCCB2938A0480D00B5A59F5B795031B740DE24F9B4650F74B35776B8839454DBF66CD2F715EE4C40BF02A5B7F644658564C52B04EC5"
            target="_blank"
            rel="noopener noreferrer"
            className="certification-link"
          >
            <div className="certification-content">
              <img
                src={`${process.env.PUBLIC_URL}/ITIL.png`}
                alt="Icon"
                className="certification-logo"
              />

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
