import React from "react";
import { Link } from "react-router-dom";
import calculator from "./calculator/calculator.png";
import survey from "./survey/survey.png";

export default function ProjectList() {
  return (
    <div className="project-list">
      <div className="project-item">
        <Link to="/projects/calculator">
          <h2>Calculator</h2>
          <img src={calculator} className="icon" alt="LinkedIn" />
        </Link>
      </div>
      <div className="project-item">
        <Link to="/projects/survey">
          <h2>Survey</h2>
          <img src={survey} className="icon" alt="LinkedIn" />
        </Link>
      </div>
    </div>
  );
}
