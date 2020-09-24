import React from "react";
import "../assets/css/EventComponent.css";
import eventImage from "../assets/images/2.jpg";

const EventComponent = () => {
  return (
    <div className="container row mx-auto event-component-wrapper">
      <div className=" col-12 col-md-6 event-image-wrapper">
        <img
          className="event-image"
          src={eventImage}
          alt="Event"
          width="auto"
        />
      </div>
      <div className="col-12 col-md-6 mb-4 align-self-end">
        <h1 className="event-component-header">Event</h1>
        <div className="event-wrapper pl-2">
          <h3 className="event-title">
            <span className="styled-text-pink">Open source</span> powers the
            World!
          </h3>
          <p className="event-description-text">
            Lorem ipsum proin gravida nibh vel velit auctor aliquet.
            Aeneansollicitudin, lorem quis bibendum auctonisi elit consequat
            ipsum nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
            vulputate cursusa sit nibh vel velit.
          </p>
          <button className="learn-more-button">Discover More</button>
        </div>
      </div>
    </div>
  );
};

export default EventComponent;
