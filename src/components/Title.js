import React from "react";
import "../assets/css/TitleComponent.css";

const Title = (props) => {
  return (
    <div className="container mt-5 title-div">
      <h2 className="shadow-title">{props.title}</h2>
      <hr className="default-hr" />
      <b class="text-muted">{props.description}</b>
    </div>
  );
};

export default Title;
