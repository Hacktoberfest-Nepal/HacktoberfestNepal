import React from "react";
import "../assets/css/TitleComponent.css";

const Title = (props) => {
  return (
    <div className="container mt-5">
      <h2 className="shadow-title">{props.title}</h2>
      <hr className="default-hr" />
      <b>{props.description}</b>
    </div>
  );
};

export default Title;
