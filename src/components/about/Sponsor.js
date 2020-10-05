import React from "react";
import "../../assets/css/SponsorComponent.css";
import TitleComponent from "../Title";

const Sponsor = () => {
  return (


    <div className="container want-to-be-sponser  p-5 mb-5 mt-5">
      <h3 style={{ fontWeight: "900px" }}>Want to be Sponsor ?</h3><br />
      <a href="/contact"><button class="btn btn-primary p-3 apply-button mt-3">Contact us</button></a>

    </div>
  );
};

export default Sponsor;
