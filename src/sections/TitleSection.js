import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import "./TitleSection.css";
import DownIcon from "../components/DownIcon";

import { Link, Element } from "react-scroll";

class TitleSection extends Component {
  render() {
    return (
      <div>
        <Fullpage className="nav first">
          <div>
            <h1  className="icons-wrapper">{data.title}</h1>
            <div>
              <h2 className="icons-wrapper">{data.subtitle}</h2>
            </div>
            <div className="icons-wrapper" >
              {Object.keys(data.links).map(key => {
                return <SocialIcon className="icon" url={data.links[key]} />;
              })}
            </div>
          </div>
        </Fullpage>

        <Link
          activeClass="active"
          to="Title"
          spy={true}
          smooth={true}
          offset={5}
          duration={500}
          delay={10}
        >
          <DownIcon icon={data.icons[0].down} />
        </Link>
        <Element name="Title" className="element" />
      </div>
    );
  }
}
export default TitleSection;
