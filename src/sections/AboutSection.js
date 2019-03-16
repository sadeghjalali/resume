/*About Component*/
import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import "./AboutSection.css";
import DownIcon from "../components/DownIcon";
import { Link, Element } from "react-scroll";

class AboutSection extends Component {
  render() {
    return (
      <div>
        <Fullpage className="second">
          <h3>{data.sections[0].title}</h3>
          <div>{/*just for iterate from data.json*/}
            {data.sections[0].items.map(p => {
              return <p>{p.content}</p>;
            })}
          </div>
        </Fullpage>
        {/*scroll to skill unit*/}
        <Link
          activeClass="active"
          to="Skill"
          spy={true}
          smooth={true}
          offset={5}
          duration={500}
          delay={10}
        >
          <DownIcon icon={data.icons[0].down} />
        </Link>
        <Element name="Skill" className="element" />
      </div>
    );
  }
}
export default AboutSection;
