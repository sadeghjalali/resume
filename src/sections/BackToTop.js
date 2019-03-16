/*scroll to top component(use vertical and up boutton)*/
import React, { Component } from "react";


import {VerticleButton as ScrollUpButton}from "react-scroll-up-button"

class BackToTop extends Component {

  render() {
    return (
      <div>
        <div>
        <ScrollUpButton />
        </div>
      </div>
    );
  }
}
export default BackToTop;
