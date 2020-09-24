import React from "react";
import "../assets/css/InfoComponent.css";
import infoImage from "../assets/images/open-source-500x500.png";

const InfoComponent = () => {
  return (
    <div className="container mx-auto info-component-wrapper pb-5 mb-5">
      <div className="info-wrapper row py-5">
        <div className="info-content-wrapper col-8 align-self-center pt-3 pr-4">
          <p className="info-text-small"></p>
          <p className="main-text font-weight-bold">
            Contribute to the open source during the event. Open source is
            changing the world -{" "}
            <span className="styled-text-pink font-weight-bold">
              one pull request
            </span>{" "}
            at a time.
          </p>
          <div className="info-button-wrapper">
            <button className="learn-more-button button-purple">
              Get Ticket
            </button>
          </div>
        </div>

        <div className="info-image-wrapper col-4 align-self-center">
          <img
            className="img-round d-block rounded-circle"
            src={infoImage}
            alt="Info"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoComponent;
