import React from "react";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <div className="profile-container">
        <Profile />
      </div>
      <div className="right-container">
        <Education />
        <Projects />
      </div>
    </div>
  );
}

export default App;
