import React from "react";
import "../assets/css/SponsorComponent.css";

const Sponsor = () => {
  return (
    <div className="container sponsor p-4">
      <h2 class="shadow-title">Sponsors</h2>
      <hr class="default-hr" />
      <b>We are grateful to our amazing partners and sponsors</b>
      <div className="sponsorList mt-3">
        <img src="https://news.aut.ac.nz/__data/assets/image/0006/92328/placeholder-image10.jpg" />
        <img src="https://news.aut.ac.nz/__data/assets/image/0006/92328/placeholder-image10.jpg" />
        <img src="https://news.aut.ac.nz/__data/assets/image/0006/92328/placeholder-image10.jpg" />
        <img src="https://news.aut.ac.nz/__data/assets/image/0006/92328/placeholder-image10.jpg" />
        <img src="https://news.aut.ac.nz/__data/assets/image/0006/92328/placeholder-image10.jpg" />
      </div>
      <br />
      <h3 style={{ fontWeight: "900px" }}>Want to be Sponsor ?</h3>

      <button class="btn btn-primary p-3 apply-button">APPLY NOW</button>
    </div>
  );
};

export default Sponsor;
