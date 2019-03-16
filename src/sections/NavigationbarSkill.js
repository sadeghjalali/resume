/*scroll to skill (navbar)*/
import React, { Component } from "react";

import { Link, Element } from "react-scroll";

class NavigationbarSkill extends Component {
  render() {
    return (
      <div>
        <Link
          activeClass="active"
          to="Skill"
          spy={true}
          smooth={true}
          offset={5}
          duration={1000}
          delay={10}
        >
          Skills
        </Link>
        <Element name="Skill" className="element" />
      </div>
    );
  }
}
export default NavigationbarSkill;
