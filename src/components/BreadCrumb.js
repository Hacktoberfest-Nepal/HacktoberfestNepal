import React from "react";
import "../assets/css/BreadCrumb.css";
import TitleComponent from "../components/Title"

const BreadCrumb = (props) => {
  return (

    <div className="breadcrumb" style={{ backgroundColor: "white" }}>

      <img src={require(`../assets/images/breadcrumb/${props.image}`)} className="img-fluid" alt="" style={{ objectFit: "contain", height: "300px" }} />
      <center>
        <TitleComponent
          title={props.title}
          description={props.description}
        />

      </center>
    </div>
  );
};

export default BreadCrumb;
