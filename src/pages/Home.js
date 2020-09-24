import React from "react";
import CardComponent from "../components/CardComponent";
import EventComponent from "../components/EventComponent";
import InfoComponent from "../components/InfoComponent";
import TimeOutComponent from "../components/TimeOutComponent";

const Home = () => {
  return (
    <div>
      <p>Home </p> <TimeOutComponent /> <EventComponent />
      <InfoComponent />
      <CardComponent />
    </div>
  );
};

export default Home;
