/*FullPage Component*/
import React, { Component } from "react";
import "./Fullpage.css";

class Fullpage extends Component {


  state = {
    color: ""
  };
/*generate random color*/
  randomColor = () => {
    let letters = "0123456789ABCDEF";
    let colory = "#";
    for (let i = 0; i < 6; i++) {
      colory += letters[Math.floor(Math.random() * 16)];
    }
    this.setState({ color: colory });
  };



  render() {
    const { children } = this.props;

    return (
      <div className={`fullpage ${this.props.className || ``}`}
      /*use random color*/
      style={{ background: this.state.color }}
      onClick={this.randomColor}
      
      
      >{children}</div>
    );
  }
}
export default Fullpage;
