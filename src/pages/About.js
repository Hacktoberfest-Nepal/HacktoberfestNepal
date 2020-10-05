import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import SponsorComponent from "../components/about/Sponsor";
import InfoComponent from "../components/about/Info";

const About = () => {
  useEffect(() => {
    document.title = "About"
  }, []);

  return (
    <div>
      <BreadCrumb image="about.png" title="About" description="All about Hacktoberfest" />
      <InfoComponent />
      <SponsorComponent />
    </div>
  );
};

export default About;
