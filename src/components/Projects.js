import React from "react";
import "../styles/Profile.css";
import Project from "./Project";

const icon = (name, file) => ({
  src: `${process.env.PUBLIC_URL}/icon/${file || name + ".svg"}`,
  name,
});

export default function Projects() {
  return (
    <div className="projects-container">
      <Project
        title="Agent-v2"
        image={`${process.env.PUBLIC_URL}/agent-v2.png`}
        description="Provider-agnostic LLM agentic engine supporting OpenAI, Anthropic, and Gemini. Runs multi-step tool loops, streams results via SSE, and enforces schema-validated tools — built for long-horizon tasks like reading files, editing code, and spawning dev servers."
        link="https://github.com/Calculator5329/agent-v2"
        techIcons={[
          icon("TypeScript", "TypeScript.svg"),
          icon("React", "React.svg"),
          icon("OpenAI API", "OpenAI.svg"),
          icon("Anthropic", "Anthropic.svg"),
          icon("Gemini", "Gemini.svg"),
          icon("Vite", "Vite.js.svg"),
        ]}
      />

      <Project
        title="Circuit Builder"
        image={`${process.env.PUBLIC_URL}/circuit-builder.png`}
        description="Visual digital logic circuit designer and simulator with a node-based drag-and-drop canvas, real-time gate simulation, and a step-by-step tutorial mode covering half adders, full adders, and more."
        link="https://circuit-builder-d5ea8.web.app"
        techIcons={[
          icon("TypeScript", "TypeScript.svg"),
          icon("React", "React.svg"),
          icon("Tailwind CSS", "Tailwind.svg"),
          icon("Firebase", "Firebase.svg"),
        ]}
      />

      <Project
        title="Mental Math Site"
        image={`${process.env.PUBLIC_URL}/n2k-webapp.png`}
        description="Fast-paced mental math web app with Board Slam and Written Problems game modes, global leaderboards, player profiles with medals, and 24+ avatars. Built with React, FastAPI, Firebase Auth, and PostgreSQL."
        link="https://mentalmath.site"
        techIcons={[
          icon("React", "React.svg"),
          icon("FastAPI", "FastAPI.svg"),
          icon("Firebase", "Firebase.svg"),
          icon("PostgreSQL", "PostgreSQL.svg"),
        ]}
      />

      <Project
        title="Finance GUI"
        image={`${process.env.PUBLIC_URL}/finance-gui.png`}
        description="Node-based visual retirement planner with drag-and-drop income flow, tax-aware projections using 2024 federal brackets, savings overflow routing, and year-by-year compound growth charts."
        link="https://finance-gui-d5ea8.web.app"
        techIcons={[
          icon("TypeScript", "TypeScript.svg"),
          icon("React", "React.svg"),
          icon("Tailwind CSS", "Tailwind.svg"),
          icon("Firebase", "Firebase.svg"),
        ]}
      />

      <Project
        title="This Website!"
        image={`${process.env.PUBLIC_URL}/portfolio-site.png`}
        description="My personal portfolio site for showcasing projects and resume. Built with React and hosted on GitHub Pages."
        link="https://github.com/Calculator5329/Calculator5329.github.io"
        techIcons={[
          icon("JavaScript", "JavaScript.svg"),
          icon("CSS", "CSS.svg"),
          icon("React", "React.svg"),
          icon("GitHub", "GitHub.svg"),
        ]}
      />

      <Project
        title="More Coming Soon"
        description=""
        placeholder={true}
      />
    </div>
  );
}
