  
  /*just for yourself*/
  /*(Its for next version of resume(but its working))*/
  /*in this component random color (right)and i dont need to change it*/
  /*I dont have enugh time for this item because this item need more knowledge for props,state and lifecycle method*/


import React, { Component } from "react";
import "../App.css";

class ChangeColor extends Component {
  state = {
    color: ""
  };

  randomColor = () => {
    let letters = "0123456789ABCDEF";
    let colory = "#";
    for (let i = 0; i < 6; i++) {
      colory += letters[Math.floor(Math.random() * 16)];
    }
    this.setState({ color: colory });
  };

  render() {
    return (
      <div>
        style={{ background: this.state.color }}
        onClick={this.randomColor}
      </div>
    );
  }
}

export default ChangeColor;
