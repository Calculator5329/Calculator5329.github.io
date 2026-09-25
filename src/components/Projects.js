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
        description="A local-first AI chat desktop app I built with React, Rust and Go. It runs on cloud models or fully local Ollama, runs agent tasks, and ships installers for Windows, macOS and Linux."
        link="https://gatesai.web.app/"
        techIcons={[
          icon("TypeScript", "TypeScript.svg"),
          icon("React", "React.svg"),
          icon("OpenAI API", "OpenAI.svg"),
          icon("Anthropic", "Anthropic.svg"),
          icon("Gemini", "Gemini.svg"),
          icon("Ollama", "Ollama.svg"),
        ]}
      />

      <Project
        title="Fathom"
        image={`${process.env.PUBLIC_URL}/fathom.png`}
        description="Portfolio backtesting, asset allocation and retirement Monte Carlo over 150+ years of market history. Every analysis is a shareable URL."
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
        title="Media Vault"
        image={`${process.env.PUBLIC_URL}/media-vault.png`}
        description="A private photo and video library that runs on your own computer, with optional local AI for faces, text in photos and search by description. Nothing leaves the machine."
        link="https://github.com/Calculator5329/media-vault-oss"
        techIcons={[
          icon("Python", "Python.svg"),
          icon("SQLite", "SQLite.svg"),
          icon("Hugging Face", "hf.svg"),
          icon("GitHub", "GitHub.svg"),
        ]}
      />

      <Project
        title="Agent Handles"
        image={`${process.env.PUBLIC_URL}/agent-handles.png`}
        description="Makes a web app's interface addressable by AI agents. Every element gets a stable id, tests are written as data, and an agent can drive the running app with a receipt for each action."
        link="https://agent-handles.web.app"
        techIcons={[
          icon("TypeScript", "TypeScript.svg"),
          icon("Vite", "Vite.js.svg"),
          icon("React", "React.svg"),
          icon("Firebase", "Firebase.svg"),
        ]}
      />

      <Project
        title="Milo"
        image={`${process.env.PUBLIC_URL}/milo.png`}
        description="A local voice companion built on whisper.cpp, Ollama and Pocket TTS. You can interrupt it mid-sentence, and it starts talking about 300 ms after you stop."
        link="https://github.com/Calculator5329/milo"
        techIcons={[
          icon("Python", "Python.svg"),
          icon("Hugging Face", "hf.svg"),
          icon("JavaScript", "JavaScript.svg"),
          icon("GitHub", "GitHub.svg"),
        ]}
      />

      <Project
        title="Neon Vector Defense"
        image={`${process.env.PUBLIC_URL}/neon-vector-defense.png`}
        description="A sci-fi tower defense game with a deterministic simulation core, so replays and headless balance sims are exact. The link opens a demo mode."
        link="https://neon-vector-defense-7.web.app/?demo=1"
        techIcons={[
          icon("TypeScript", "TypeScript.svg"),
          icon("React", "React.svg"),
          icon("Firebase", "Firebase.svg"),
          icon("Vite", "Vite.js.svg"),
        ]}
      />

      <Project
        title="This Website"
        image={`${process.env.PUBLIC_URL}/portfolio-site.png`}
        description="This site. A React single-page app on GitHub Pages, with the source on GitHub."
        link="https://github.com/Calculator5329/Calculator5329.github.io"
        techIcons={[
          icon("JavaScript", "JavaScript.svg"),
          icon("React", "React.svg"),
          icon("CSS", "CSS.svg"),
          icon("GitHub", "GitHub.svg"),
        ]}
      />

      <Project
        title="N2K Almanac"
        image={`${process.env.PUBLIC_URL}/n2k-almanac.png`}
        description="An equation almanac for the N2K dice game. A solver precomputes the easiest equation for every solvable roll and serves it from a compact binary file in a Web Worker."
        link="https://n2k-almanac-v3.web.app"
        techIcons={[
          icon("TypeScript", "TypeScript.svg"),
          icon("React", "React.svg"),
          icon("MobX", "MobX.svg"),
          icon("Tailwind CSS", "Tailwind.svg"),
          icon("Vite", "Vite.js.svg"),
        ]}
      />
    </div>
  );
}
