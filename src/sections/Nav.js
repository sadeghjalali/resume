import React, { Component } from "react";

import NavigationbarAbout from "./NavigationbarAbout";
import NavigationbarSkill from "./NavigationbarSkill";
import "./nav.css";
class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    /*bind this to handleScroll*/
    this.handleScroll = this.handleScroll.bind(this);
  }
  /*now*/
  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }
  /*later*/
  componentDidMount() {
    const el = document.querySelector("nav");
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener("scroll", this.handleScroll);
  }
  /*if and else*/
  componentDidUpdate() {
    this.state.scroll > this.state.top
      ? (document.body.style.paddingTop = `${this.state.height}px`)
      : (document.body.style.paddingTop = 0);
  }

  render() {
    return (
      <nav className={this.state.scroll > this.state.top ? "fixed-nav" : ""}>
        <ul>
          <li>
            {/*<ChangeColor /> (Its for next version)I dont have enugh time for this item because this item need enough knowledge for props,state and lifecycle method*/}
          </li>
          <li>
            <NavigationbarAbout />
          </li>
          <li>
            <NavigationbarSkill />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
