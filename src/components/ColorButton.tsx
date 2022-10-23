import React from "react";

interface ButtonProps {
  color: Colors;
}

enum Colors {
  GREEN = "green",
  RED = "red",
  BLUE = "blue",
  YELLOW = "yellow"
}

function ColorButton(props: ButtonProps) {
  const color = props.color;
  return (
    <button className="color-button" style={{ backgroundColor: color }}>
      {props.color}
    </button>
  );
}

export { ColorButton, Colors };
