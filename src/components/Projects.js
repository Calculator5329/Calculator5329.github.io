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
        description="Local-first AI chat workspace built in TypeScript as a Tauri (Rust) desktop app with a Go execution bridge. Multimodal and multi-model — routing through OpenRouter for cloud models or Ollama for fully-local inference — with local (ComfyUI) and API-based image generation, sandboxed file/command tools, and persistent memory."
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
        title="N2K Almanac"
        image={`${process.env.PUBLIC_URL}/n2k-almanac.png`}
        description="A mathematical almanac for the Number Knockout game. A TypeScript solver computes the easiest equation for every dice-and-target combination, stored in a custom compact binary format and served through a Web Worker for instant off-main-thread lookups. The React + MobX frontend browses 370K+ solutions with heatmaps, histograms, and 16 fully-themed 'editions.'"
        link="https://n2k-almanac.web.app"
        techIcons={[
          icon("TypeScript", "TypeScript.svg"),
          icon("React", "React.svg"),
          icon("MobX", "MobX.svg"),
          icon("Tailwind CSS", "Tailwind.svg"),
          icon("Vite", "Vite.js.svg"),
        ]}
      />

      <Project
        title="Retirement Sim"
        image={`${process.env.PUBLIC_URL}/retirement-sim.png`}
        description="Historical retirement simulator that plays through 150+ years of real S&P, bond, and CPI data. Step through a single timeline month by month, or batch-test a withdrawal strategy across every historical start date to find your safe rate."
        link="https://calculator5329.github.io/retirement-sim"
        techIcons={[
          icon("TypeScript", "TypeScript.svg"),
          icon("React", "React.svg"),
          icon("Firebase", "Firebase.svg"),
          icon("Vite", "Vite.js.svg"),
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
        title="Notdop Minigames"
        image={`${process.env.PUBLIC_URL}/notdop-minigames.png`}
        description="An arcade of 12+ original browser minigames — shmups, physics puzzles, and reflex challenges — with a shared coin economy, unlockable themes, and Firestore-backed progression. Built in vanilla JavaScript for instant, install-free play."
        link="https://notdop-minigames.web.app"
        techIcons={[
          icon("JavaScript", "JavaScript.svg"),
          icon("CSS", "CSS.svg"),
          icon("Firebase", "Firebase.svg"),
        ]}
      />
    </div>
  );
}
