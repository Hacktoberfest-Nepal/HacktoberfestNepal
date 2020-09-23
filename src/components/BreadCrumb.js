import React from "react";
import "../assets/css/BreadCrumb.css";

const BreadCrumb = (props) => {
  return (
    <div className="breadcrumb">
      <center>
        <h2 className="breadcrumb-header">{props.menu}</h2>
        <hr id="breadcrumb-hr" />
        <span className="breadcrumb-sub-header">Home/{props.menu}</span>
      </center>
    </div>
  );
};

export default BreadCrumb;
