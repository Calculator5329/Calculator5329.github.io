import React from "react";
import "../styles/Profile.css";
import Project from "./Project";

export default function Projects() {
  return (
    <div className="projects-container">
      {/* Code for "Projects" title: <p className="projects-title">My Projects</p>*/}
      <Project
        title="ArXiv Dashboard"
        image="https://i.imgur.com/6MH80qX.jpeg"
        description="NLP-powered research dashboard using RAG (FAISS + Gemini), GPT summaries, and per-paper chatbots. Deployed on a Raspberry Pi with Cloudflare tunnel."
        link="https://calculator5329.github.io/ai-papers/"
        techIcons={[
          {
            src: `${process.env.PUBLIC_URL}/icon/React.svg`,
            name: "React",
          },
          {
            src: `${process.env.PUBLIC_URL}/icon/Python.svg`,
            name: "Python",
          },
          {
            src: `${process.env.PUBLIC_URL}/icon/Gemini.svg`,
            name: "Gemini",
          },
          {
            src: `${process.env.PUBLIC_URL}/icon/Raspberry Pi.svg`,
            name: "Raspberry Pi",
          },
          {
            src: `${process.env.PUBLIC_URL}/icon/Cloudflare.svg`,
            name: "Cloudflare",
          },
          {
            src: `${process.env.PUBLIC_URL}/icon/SQLite.svg`,
            name: "SQLite",
          },
        ]}
      />

      <Project
        title="News Bias Analyzer"
        image="https://i.imgur.com/fAGOD5x.jpeg"
        description="AI-powered app classifying news by political bias and authenticity using ML and OpenAI embeddings. Built with FastAPI + React and deployed to Vercel."
        link="https://capstone-frontend-1-beige.vercel.app/"
        techIcons={[
          {
            src: `${process.env.PUBLIC_URL}/icon/Next.js.svg`,
            name: "Next.js",
          },
          {
            src: `${process.env.PUBLIC_URL}/icon/FastAPI.svg`,
            name: "FastAPI",
          },
          {
            src: `${process.env.PUBLIC_URL}/icon/OpenAI.svg`,
            name: "OpenAI API",
          },
          {
            src: `${process.env.PUBLIC_URL}/icon/Tensorflow.svg`,
            name: "Tensorflow",
          },
        ]}
      />

      <Project
        title="Book Recommendation Website"
        image="https://i.imgur.com/TuwX6q3.jpeg"
        description="Uses OpenAI embeddings + FAISS to build a vector search recommendation system for books. Runs on Google Cloud with a real-time API backend."
        link="https://calculator5329.github.io/book-reccomendations-r/"
        techIcons={[
          {
            src: `${process.env.PUBLIC_URL}/icon/React.svg`,
            name: "React",
          },
          {
            src: `${process.env.PUBLIC_URL}/icon/Flask.svg`,
            name: "Flask",
          },
          {
            src: `${process.env.PUBLIC_URL}/icon/OpenAI.svg`,
            name: "OpenAI API",
          },
          {
            src: `${process.env.PUBLIC_URL}/icon/Google Cloud.svg`,
            name: "Google Cloud",
          },
        ]}
      />

      <Project
        title="Stock Portfolio Analyzer"
        image="https://i.imgur.com/b455H8s.png"
        description="Full-stack portfolio backtesting app with Pandas/NumPy + FastAPI backend (on Azure) and Next.js frontend (on Netlify)."
        link="https://cheery-tiramisu-028ceb.netlify.app/"
        techIcons={[
          {
            src: `${process.env.PUBLIC_URL}/icon/TypeScript.svg`,
            name: "TypeScript",
          },
          {
            src: `${process.env.PUBLIC_URL}/icon/Pandas.svg`,
            name: "Pandas",
          },
          {
            src: `${process.env.PUBLIC_URL}/icon/Docker.svg`,
            name: "Docker",
          },
          {
            src: `${process.env.PUBLIC_URL}/icon/Azure.svg`,
            name: "Azure",
          },
        ]}
      />

      <Project
        title="Mental Math Site"
        image={`${process.env.PUBLIC_URL}/llm_project.png`}
        description="This project is a web app that builds mental math skills through fast-paced games and provides leaderboards and player trophies. It uses React, FastAPI, PostgreSQL, and Firebase Auth for secure login."
        link=""
        techIcons={[
          {
            src: `${process.env.PUBLIC_URL}/icon/FastAPI.svg`,
            name: "FastAPI",
          },
          {
            src: `${process.env.PUBLIC_URL}/icon/React.svg`,
            name: "React",
          },
          {
            src: `${process.env.PUBLIC_URL}/icon/SQL.svg`,
            name: "SQL",
          },
          {
            src: `${process.env.PUBLIC_URL}/icon/Cloudflare.svg`,
            name: "Cloudflare",
          },
        ]}
      />

      <Project
        title="This Website!"
        image={`${process.env.PUBLIC_URL}/portfolio-site.png`}
        description="This is my personal website for hosting my projects and resume. Built with React and hosted on GitHub Pages."
        link="https://github.com/Calculator5329/portfolio"
        techIcons={[
          {
            src: `${process.env.PUBLIC_URL}/icon/Javascript.svg`,
            name: "JavaScript",
          },
          {
            src: `${process.env.PUBLIC_URL}/icon/CSS.svg`,
            name: "CSS",
          },
          {
            src: `${process.env.PUBLIC_URL}/icon/React.svg`,
            name: "React",
          },
          {
            src: `${process.env.PUBLIC_URL}/icon/Github.svg`,
            name: "GitHub",
          },
        ]}
      />
    </div>
  );
}
