import React, { Component } from "react";

import SnowStorm from "./sections/SnowStorm";

import Nav from "./sections/Nav";

import TitleSection from "./sections/TitleSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";

import BackToTop from "./sections/BackToTop";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <SnowStorm />
        <TitleSection />
        <AboutSection />
        <SkillSection />
        <BackToTop />
      </div>
    );
  }
}
export default App;
