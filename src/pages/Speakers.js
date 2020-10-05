import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import SpeakerList from "../components/speakers/SpeakerList";

const Speakers = () => {
  useEffect(() => {
    document.title = "Speakers"
  }, []);
  return (
    <div>
      <BreadCrumb image="speaker-bg.png" title="Speakers" description="Speakers from expert fields" />
      <SpeakerList />

    </div>
  );
};

export default Speakers;
