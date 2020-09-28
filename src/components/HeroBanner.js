import React from "react";
import "../assets/css/heroBanner.css";

const HeroBanner = () => {
  return (
    <div className="hero-banner-wrapper d-flex pb-5">
      <div className="row w-100">
        <div className="col-12 col-md-8 col-lg-6 align-self-center">
          <p className="">October 10, 2020</p>
          <h1 className="banner-heading text-break">
            Sagarmatha Hacktoberfest
          </h1>
          <p className="banner-description">
            <span></span>
            Every contribution is important.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
