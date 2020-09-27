import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import SpeakerList from "../components/speakers/SpeakerList";

const Speakers = () => {
  return (
    <div>
      <BreadCrumb image="speaker-bg.png" title="Speakers" description="Speakers from expert fields" />
      <SpeakerList />

    </div>
  );
};

export default Speakers;
