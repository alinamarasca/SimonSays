import React from "react";

interface TitleProps {
  title: string;
}
function Title(props: TitleProps) {
  return (
    <>
      <h1 id="title" className="title">
        {props.title}
      </h1>
    </>
  );
}

export default Title;
