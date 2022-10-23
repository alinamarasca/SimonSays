import React from "react";

interface ButtonProps {
  text: string;
  // onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClick: any;
}

function ControlButton(props: ButtonProps) {
  return <button onClick={props.onClick}>{props.text}</button>;
}

export default ControlButton;
