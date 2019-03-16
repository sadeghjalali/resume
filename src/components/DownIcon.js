import React, { Component } from "react";
const DownIcon = props => {
  return (
    <div
    onClick={props.onClick}
      style={{
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        marginBottom: "-34px",
        transform: "translateY(-80px)"
      }}
    >
      <div
        style={{
          maxWidth: "30px"
        }}
      >
        <img src={props.icon} 
        style={{
          maxWidth: "100%",
          maxHeight: '100%'
        }}
        />
      </div>
    </div>
  );
};

export default DownIcon;
