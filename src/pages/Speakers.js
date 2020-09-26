import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import SpeakerList from "../components/speakers/SpeakerList";

const Speakers = () => {
  return (
    <div>
      <BreadCrumb menu="speakers" />
      <SpeakerList />
    </div>
  );
};

export default Speakers;
