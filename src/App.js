import React from "react";
import Project from "./components/Project";
import Profile from "./components/Profile";
import Education from "./components/Education";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <div className="profile-container">
        <Profile />
      </div>
      <div className="right-container">
        <div className="projects-container">
          {/* Code for "Projects" title: <p className="projects-title">My Projects</p>*/}
          <Project
            title="ArXiv Dashboard"
            image="https://i.imgur.com/6MH80qX.jpeg"
            description="NLP-powered research dashboard using RAG (FAISS + Gemini), GPT summaries, and per-paper chatbots. Deployed on a Raspberry Pi with Cloudflare tunnel."
            link="https://calculator5329.github.io/ai-papers/"
            techIcons={[
              { src: "/icon/React.svg", name: "React" },
              { src: "/icon/Python.svg", name: "Python" },
              { src: "/icon/Gemini.svg", name: "Gemini" },
              { src: "/icon/Raspberry Pi.svg", name: "Raspberry Pi" },
              { src: "/icon/Cloudflare.svg", name: "Cloudflare" },
              { src: "/icon/SQLite.svg", name: "SQLite" },
            ]}
          />

          <Project
            title="News Bias Analyzer"
            image="https://i.imgur.com/fAGOD5x.jpeg"
            description="AI-powered app classifying news by political bias and authenticity using ML and OpenAI embeddings. Built with FastAPI + React and deployed to Vercel."
            link="https://capstone-frontend-1-beige.vercel.app/"
            techIcons={[
              { src: "/icon/Next.js.svg", name: "Next.js" },
              { src: "/icon/FastAPI.svg", name: "FastAPI" },
              { src: "/icon/OpenAI.svg", name: "OpenAI API" },
              { src: "/icon/Tensorflow.svg", name: "Tensorflow" },
            ]}
          />

          <Project
            title="Book Recommendation Website"
            image="https://i.imgur.com/TuwX6q3.jpeg"
            description="Uses OpenAI embeddings + FAISS to build a vector search recommendation system for books. Runs on Google Cloud with a real-time API backend."
            link="https://calculator5329.github.io/book-reccomendations-r/"
            techIcons={[
              { src: "/icon/React.svg", name: "React" },
              { src: "/icon/Flask.svg", name: "Flask" },
              { src: "/icon/OpenAI.svg", name: "OpenAI API" },
              { src: "/icon/Google Cloud.svg", name: "Google Cloud" },
            ]}
          />

          <Project
            title="Stock Portfolio Analyzer"
            image="https://i.imgur.com/b455H8s.png"
            description="Full-stack portfolio backtesting app with Pandas/NumPy + FastAPI backend (on Azure) and Next.js frontend (on Netlify)."
            link="https://cheery-tiramisu-028ceb.netlify.app/"
            techIcons={[
              { src: "/icon/TypeScript.svg", name: "TypeScript" },
              { src: "/icon/Pandas.svg", name: "Pandas" },
              { src: "/icon/Docker.svg", name: "Docker" },
              { src: "/icon/Azure.svg", name: "Azure" },
            ]}
          />
        </div>
        <div>
          <Education></Education>
        </div>
      </div>
    </div>
  );
}

export default App;
