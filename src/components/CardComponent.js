import React from "react";
import "../assets/css/CardComponent.css";

const CardComponent = props => {
  const { featureIcon: FeatureIcon, title, description } = props.data;
  return (
    <div className="col-12 col-lg-3 col-md-4 mx-auto p-3 card-component-wrapper">
      <h1>
        <FeatureIcon className="card-icon styled-text-pink" />
      </h1>
      <p className="card-title styled-text-pink text-capitalize">{title}</p>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default CardComponent;
