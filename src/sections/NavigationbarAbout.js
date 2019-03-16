/*scroll to about(navbar)*/
import React, { Component } from "react";

import { Link, Element } from "react-scroll";

class NavigationbarAbout extends Component {
  render() {
    return (
      <div>
        <Link
          activeClass="active"
          to="Title"
          spy={true}
          smooth={true}
          offset={5}
          duration={1000}
          delay={10}
        >
          About
        </Link>
        <Element name="Title" className="element" />
      </div>
    );
  }
}
export default NavigationbarAbout;
