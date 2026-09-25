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
        description="Local-first AI chat desktop app built with React and Rust (Tauri), with a Go sidecar for sandboxed tool execution. Multi-model routing through OpenRouter or fully-local Ollama, agent tasks, persistent memory, 1,100+ automated tests, CI, and installers for Windows, macOS, and Linux. A browser demo runs at gatesai.web.app."
        link="https://gatesai.web.app/"
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
        description="Equation almanac for the N2K dice-and-target game. A TypeScript solver precomputes the easiest equation for 184K+ solvable dice-and-target combinations, stored in a custom compact binary format and served through a Web Worker for off-main-thread lookups. React + MobX frontend with heatmaps, histograms, competitions, bot matches, and themed editions."
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
        title="Political Compass 2026"
        image={`${process.env.PUBLIC_URL}/political-compass.png`}
        description="A political compass test built for the 2026 US landscape, rendered as an ink-on-paper manuscript. 42 public figures are charted from cited evidence dossiers assembled by parallel AI research agents, with hand-drawn faction territories, an economic-by-social split view, and a Firestore leaderboard."
        link="https://political-test-2026.web.app"
        techIcons={[
          icon("TypeScript", "TypeScript.svg"),
          icon("React", "React.svg"),
          icon("Firebase", "Firebase.svg"),
          icon("Vite", "Vite.js.svg"),
        ]}
      />

      <Project
        title="Agent Handles"
        image={`${process.env.PUBLIC_URL}/agent-handles.png`}
        description="Makes a web app's interface addressable by AI agents. A Vite plugin verifies a stable identity on every interactive element, a generated registry maps each one to its source line, journeys are tests written as data and compiled to Playwright, and a drive API lets an agent operate the running app and get a receipt for every action. The site shows a real app being driven end to end."
        link="https://agent-handles.web.app"
        techIcons={[
          icon("TypeScript", "TypeScript.svg"),
          icon("Vite", "Vite.js.svg"),
          icon("React", "React.svg"),
          icon("Firebase", "Firebase.svg"),
        ]}
      />

      <Project
        title="Media Vault"
        image={`${process.env.PUBLIC_URL}/media-vault.png`}
        description="A private photo and video library that runs on your own computer: timeline, people, places, trips and search, with optional local AI for faces, text in photos, image search by description and video transcripts. One command sets it up, originals are never touched, and nothing leaves the machine."
        link="https://github.com/Calculator5329/media-vault-oss"
        techIcons={[
          icon("Python", "Python.svg"),
          icon("SQLite", "SQLite.svg"),
          icon("Hugging Face", "hf.svg"),
          icon("GitHub", "GitHub.svg"),
        ]}
      />

      <Project
        title="Milo"
        image={`${process.env.PUBLIC_URL}/milo.png`}
        description="A local voice companion: whisper.cpp, Ollama and Pocket TTS in one Python process, interruptible mid-sentence, with first audio about 300 ms after you stop talking. An animated SVG robot whose mouth follows real playback amplitude. A coding agent sets it up from the repo's CLAUDE.md."
        link="https://github.com/Calculator5329/milo"
        techIcons={[
          icon("Python", "Python.svg"),
          icon("Hugging Face", "hf.svg"),
          icon("JavaScript", "JavaScript.svg"),
          icon("GitHub", "GitHub.svg"),
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
