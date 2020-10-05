import React from "react";
import "../assets/css/InfoComponent.css";
import infoImage from "../assets/images/open-source-500x500.png";

const InfoComponent = () => {
  return (
    <div className="container mx-auto info-component-wrapper pb-5 mb-5">
      <div className="info-wrapper row py-5">
        <div className="info-content-wrapper col-12 col-md-8 align-self-center pb-5 pb-md-auto pt-3 pr-4">
          <p className="info-text-small"></p>
          <h4 className="">
            Contribute to the open source during the event. Open source is
            changing the world -{" "}
            <span className="styled-text-pink font-weight-bold">
              one pull request
            </span>{" "}
            at a time.
          </h4>
          <div className="info-button-wrapper">
            <a href="https://bit.ly/3jh35sR"><button className="learn-more-button mt-5">
              Register Now
            </button></a>
          </div>
        </div>

        <div className="info-image-wrapper col-12 col-md-4 align-self-center">
          <img
            className="img-round d-block rounded-circle"
            src={infoImage}
            alt="Info"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoComponent;
