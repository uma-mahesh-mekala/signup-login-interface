import React from "react";
import { useState } from "react";

function Button(props) {
  let [color, setColor] = useState("");
  let customStyle = {
    backgroundColor: props.clicked ? "#40A2D8" : color,
  };
  function handleMouseOver() {
    setColor("#40A2D8");
  }
  function handleMouseLeave() {
    setColor("");
  }

  return (
    <button
      style={customStyle}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={props.onClick}
      type={props.type}
    >
      {props.label}
    </button>
  );
}

export default Button;
