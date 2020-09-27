import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import SponsorComponent from "../components/about/Sponsor";
import OrganizersComponent from "../components/about/Organizers";

const About = () => {
  return (
    <div>
      <BreadCrumb image="about.png" title="About" description="All about Hacktoberfest" />
      <SponsorComponent />
      <OrganizersComponent />
    </div>
  );
};

export default About;
