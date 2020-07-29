import React from "react";
import "./styles.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Contact from "./components/contact";
import { Route, Switch } from "react-router-dom";
import CalculatorContainer from "./projects/calculator/calculatorcontainer";
import SurveyPage from "./projects/survey/survey";

export default function App() {
  return (
    <div id="app">
      <Navbar />
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Resume} path="/resume" />
        <Route component={Contact} path="/contact" />
        <Route component={Projects} exact path="/projects" />
        <Route component={CalculatorContainer} path="/projects/calculator" />
        <Route component={SurveyPage} path="/projects/survey" />
      </Switch>
      <style>@import url("https://use.typekit.net/bdo5zgq.css");</style>
    </div>
  );
}
