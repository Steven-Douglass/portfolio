import React from "react";
import Calculator from "../projects/calculator/calculator";
import ProjectList from "../projects/projectlist";
import { Link, NavLink } from "react-router-dom";
import "../styles.css";

export default function Projects() {
  return (
    <div className="projects">
      <ProjectList />
    </div>
  );
}
