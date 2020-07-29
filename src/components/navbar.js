import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  // Declare a new state variable, which we'll call "count"

  return (
    <div className="nav">
      <NavLink exact to="/" activeClassName="selected">
        Home
      </NavLink>
      <NavLink to="/projects" activeClassName="selected">
        Projects
      </NavLink>
      <NavLink to="/resume" activeClassName="selected">
        Resume
      </NavLink>
      <NavLink to="/contact" activeClassName="selected">
        Contact
      </NavLink>
    </div>
  );
}
