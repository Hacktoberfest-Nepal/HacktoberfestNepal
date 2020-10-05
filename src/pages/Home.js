import React from "react";
import CardHolderComponent from "../components/CardHolderComponent";
import EventComponent from "../components/EventComponent";
import HeroBanner from "../components/HeroBanner";
import InfoComponent from "../components/InfoComponent";
import ScheduleComponent from "../components/ScheduleComponent";
import TimeOutComponent from "../components/TimeOutComponent";
// import ContactComponent from "../components/ContactComponent";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <TimeOutComponent />
      <EventComponent />
      <InfoComponent />
      <CardHolderComponent />
      <ScheduleComponent />
      {/* <ContactComponent /> */}
    </div>
  );
};

export default Home;
