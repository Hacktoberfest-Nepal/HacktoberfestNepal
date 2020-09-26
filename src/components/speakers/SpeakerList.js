import React from "react";
import "../../assets/css/Speakers.css";
import TitleComponent from "../Title";

const SpeakerList = () => {
  return (
    <div className="container">
      <TitleComponent
        title="Speakers"
        description="Speakers from expert fields"
      />
      <h1 className="speaker-list">
        <div className="speaker">
          <img
            src="https://news.aut.ac.nz/__data/assets/image/0006/92328/placeholder-image10.jpg"
            alt=""
          />
          <div className="speaker-description">CEO, of CEO</div>
        </div>

        <div className="speaker">
          <img src="https://news.aut.ac.nz/__data/assets/image/0006/92328/placeholder-image10.jpg" />
          <div className="speaker-description">CEO, of CEO</div>
        </div>

        <div className="speaker">
          <img src="https://news.aut.ac.nz/__data/assets/image/0006/92328/placeholder-image10.jpg" />
          <div className="speaker-description">CEO, of CEO</div>
        </div>

        <div className="speaker">
          <img src="https://news.aut.ac.nz/__data/assets/image/0006/92328/placeholder-image10.jpg" />
          <div className="speaker-description">CEO, of CEO</div>
        </div>

        <div className="speaker">
          <img src="https://news.aut.ac.nz/__data/assets/image/0006/92328/placeholder-image10.jpg" />
          <div className="speaker-description">CEO, of CEO</div>
        </div>
      </h1>
    </div>
  );
};

export default SpeakerList;
