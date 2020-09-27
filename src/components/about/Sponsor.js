import React from "react";
import "../../assets/css/SponsorComponent.css";
import TitleComponent from "../Title";

const Sponsor = () => {
  return (
    <div className="container sponsor">

      <TitleComponent
        title="Sponsors"
        description="We are grateful to our amazing partners and sponsors"
      />

      <div className="sponsorList mt-3">
        <img class="card" src="https://news.aut.ac.nz/__data/assets/image/0006/92328/placeholder-image10.jpg" />
        <img src="https://news.aut.ac.nz/__data/assets/image/0006/92328/placeholder-image10.jpg" />
        <img src="https://news.aut.ac.nz/__data/assets/image/0006/92328/placeholder-image10.jpg" />
        <img src="https://news.aut.ac.nz/__data/assets/image/0006/92328/placeholder-image10.jpg" />
        <img src="https://news.aut.ac.nz/__data/assets/image/0006/92328/placeholder-image10.jpg" />
      </div>

      <br />

      <div className="want-to-be-sponser card  p-5 mb-5">
        <h3 style={{ fontWeight: "900px" }}>Want to be Sponsor ?</h3>
        <button class="btn btn-primary p-3 apply-button mt-3">APPLY NOW</button>

      </div>
    </div>
  );
};

export default Sponsor;
