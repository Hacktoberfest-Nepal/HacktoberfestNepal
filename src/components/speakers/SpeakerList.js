import React from "react";
import "../../assets/css/Speakers.css";
import TitleComponent from "../Title";

const SpeakerList = () => {
  return (
    <div className="container mb-5">

      <h1 className="speaker-list">
        <div className="speaker card p-1">
          <img
            src="https://news.aut.ac.nz/__data/assets/image/0006/92328/placeholder-image10.jpg"
            alt=""
          />
          <h5 className="text-bold text-center mt-3">Name of Speaker</h5>
          <h6 className="text-muted text-center">CEO, of CEO</h6>

        </div>

        <div className="speaker card p-1 ml-3">
          <img
            src="https://news.aut.ac.nz/__data/assets/image/0006/92328/placeholder-image10.jpg"
            alt=""
          />
          <h5 className="text-bold text-center mt-3">Name of Speaker</h5>
          <h6 className="text-muted text-center">CEO, of CEO</h6>

        </div>

        <div className="speaker card p-1 ml-3">
          <img
            src="https://news.aut.ac.nz/__data/assets/image/0006/92328/placeholder-image10.jpg"
            alt=""
          />
          <h5 className="text-bold text-center mt-3">Name of Speaker</h5>
          <h6 className="text-muted text-center">CEO, of CEO</h6>

        </div>
      </h1>
    </div>
  );
};

export default SpeakerList;
