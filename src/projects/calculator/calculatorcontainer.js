import React from "react";
import Calculator from "./calculator";
import "./calculator.css";
import "../../styles.css";
import { Link } from "react-router-dom";

export default function CalculatorContainer() {
  return (
    <div id="calculatorcontainer">
      <div id="back">
        <Link to="/projects">Back to Projects</Link>
      </div>
      <h1>JavaScript Calculator</h1>
      <div className="about">
        <p>
          This calculator is capable of arithmetic calculations on rational
          numbers
        </p>
        <p>Built with HTML5, CSS, JavaScript, React</p>
      </div>
      <Calculator />
    </div>
  );
}
