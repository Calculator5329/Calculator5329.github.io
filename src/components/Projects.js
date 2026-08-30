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
        title="GatesAI Chat"
        image={`${process.env.PUBLIC_URL}/gatesai-chat.png`}
        description="Local-first AI chat desktop app built with React and Rust (Tauri), with a Go sidecar for sandboxed tool execution. Multi-model routing through OpenRouter or fully-local Ollama, agent tasks, persistent memory, 1,100+ automated tests, CI, and installers for Windows, macOS, and Linux. A browser Web Lite demo runs from the repo's GitHub Pages."
        link="https://github.com/Calculator5329/GatesAI-Chat"
        techIcons={[
          icon("TypeScript", "TypeScript.svg"),
          icon("React", "React.svg"),
          icon("OpenAI API", "OpenAI.svg"),
          icon("Anthropic", "Anthropic.svg"),
          icon("Gemini", "Gemini.svg"),
        ]}
      />

      <Project
        title="Fathom"
        image={`${process.env.PUBLIC_URL}/fathom.png`}
        description="Market-analysis suite: portfolio backtesting, asset-class allocation over 150+ years of market history, and Monte Carlo retirement simulation validated against the Trinity study. Every analysis is a shareable URL. React and TypeScript with a custom backtest engine, ECharts visualizations, and Web Worker simulation."
        link="https://ethan-488900.web.app"
        techIcons={[
          icon("TypeScript", "TypeScript.svg"),
          icon("React", "React.svg"),
          icon("Tailwind CSS", "Tailwind.svg"),
          icon("Firebase", "Firebase.svg"),
          icon("Vite", "Vite.js.svg"),
        ]}
      />

      <Project
        title="N2K Almanac"
        image={`${process.env.PUBLIC_URL}/n2k-almanac.png`}
        description="Equation almanac for the N2K dice-and-target game. A TypeScript solver precomputes the easiest equation for 184K+ dice-and-target combinations, stored in a custom compact binary format and served through a Web Worker for off-main-thread lookups. React + MobX frontend with heatmaps, histograms, competitions, bot matches, and themed editions."
        link="https://n2k-almanac-v3.web.app"
        techIcons={[
          icon("TypeScript", "TypeScript.svg"),
          icon("React", "React.svg"),
          icon("MobX", "MobX.svg"),
          icon("Tailwind CSS", "Tailwind.svg"),
          icon("Vite", "Vite.js.svg"),
        ]}
      />

      <Project
        title="Neon Vector Defense"
        image={`${process.env.PUBLIC_URL}/neon-vector-defense.png`}
        description="Sci-fi tower defense with a deterministic simulation core: a full replay system, headless balance simulations, and bot playtests validate balance changes. Procedural canvas rendering, procedural audio, and Firebase-backed leaderboards. The link opens a recruiter demo mode."
        link="https://neon-vector-defense-7.web.app/?demo=1"
        techIcons={[
          icon("TypeScript", "TypeScript.svg"),
          icon("React", "React.svg"),
          icon("Firebase", "Firebase.svg"),
          icon("Vite", "Vite.js.svg"),
        ]}
      />

      <Project
        title="Skyline Courier"
        image={`${process.env.PUBLIC_URL}/skyline-courier.png`}
        description="First-person momentum parkour game built with Three.js: run, wall-run, dash, slide, and grapple across two themed courses in the browser. Custom physics and movement code with playable web deployment on Firebase Hosting."
        link="https://skyline-courier-5329.web.app"
        techIcons={[
          icon("JavaScript", "JavaScript.svg"),
          icon("Firebase", "Firebase.svg"),
          icon("Vite", "Vite.js.svg"),
        ]}
      />

      <Project
        title="This Website!"
        image={`${process.env.PUBLIC_URL}/portfolio-site.png`}
        description="This portfolio site: a React single-page app deployed to GitHub Pages, presenting projects, technical stack, education, and resume."
        link="https://github.com/Calculator5329/Calculator5329.github.io"
        techIcons={[
          icon("JavaScript", "JavaScript.svg"),
          icon("React", "React.svg"),
          icon("CSS", "CSS.svg"),
          icon("GitHub", "GitHub.svg"),
        ]}
      />
    </div>
  );
}
