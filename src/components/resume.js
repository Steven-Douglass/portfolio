import React from "react";
import "./resume.css";
import resume from "./StevenDouglassResume.pdf";

export default function Resume() {
  return (
    <div className="resume">
      <p>
        Please see my resume below, or alternatively download a PDF copy{" "}
        <a href={resume}>here</a>
      </p>

      <iframe
        id="resumeFrame"
        src="https://onedrive.live.com/embed?cid=693351EDED51F294&resid=693351EDED51F294%21336819&authkey=APGfFx4fio45yPQ&em=2"
        frameBorder="0"
        scrolling="no"
        title="Steven Douglass Resume"
      />
    </div>
  );
}
