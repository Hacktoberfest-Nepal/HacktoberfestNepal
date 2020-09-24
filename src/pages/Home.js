import React from "react";
import CardHolderComponent from "../components/CardHolderComponent";
import EventComponent from "../components/EventComponent";
import InfoComponent from "../components/InfoComponent";
import TimeOutComponent from "../components/TimeOutComponent";

const Home = () => {
  return (
    <div>
      <p>Home </p> <TimeOutComponent /> <EventComponent />
      <InfoComponent />
      <CardHolderComponent />
    </div>
  );
};

export default Home;
