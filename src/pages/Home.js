import React from "react";
import CardHolderComponent from "../components/CardHolderComponent";
import EventComponent from "../components/EventComponent";
import HeroBanner from "../components/HeroBanner";
import InfoComponent from "../components/InfoComponent";
import ScheduleComponent from "../components/ScheduleComponent";
import TimeOutComponent from "../components/TimeOutComponent";
import Partners from "../components/home/Partners"

const Home = () => {
  useEffect(() => {
    document.title = "Sagarmatha HacktoberFest | Home"
  }, []);
  return (
    <div>
      <HeroBanner />
      <TimeOutComponent />
      {/* <EventComponent /> */}
      <InfoComponent />
      {/* <CardHolderComponent /> */}
      <ScheduleComponent />
      <Partners />
      {/* <ContactComponent /> */}
    </div>
  );
};

export default Home;
