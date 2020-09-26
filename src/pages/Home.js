import React from "react";
import CardHolderComponent from "../components/CardHolderComponent";
import EventComponent from "../components/EventComponent";
import InfoComponent from "../components/InfoComponent";
import ScheduleComponent from "../components/ScheduleComponent";
import TimeOutComponent from "../components/TimeOutComponent";

const Home = () => {
  return (
    <div>
      <p>Home </p> <TimeOutComponent /> <EventComponent />
      <InfoComponent />
      <CardHolderComponent />
      <ScheduleComponent />
    </div>
  );
};

export default Home;
