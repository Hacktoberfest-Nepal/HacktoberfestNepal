import React from 'react'
import "../../assets/css/Partners.css";
import csitImage from "../../assets/images/partners/csit.jpg";
import askBuddieImage from "../../assets/images/partners/askbuddie.png";
import pythonNpImage from "../../assets/images/partners/python_nepal.jpg";
import eventsNpImage from "../../assets/images/partners/eventsnp.jpg";
import techPanaImage from "../../assets/images/partners/techpana.png";
import csajuImage from "../../assets/images/partners/csaju.jpg";

const Partners = () => {
    return (
        <div className=" shadow p-4 partners mt-5">

            <div className="row">

                <div className="col-lg-4 text-center">

                    <center><b class="partner-title">Community Partner</b></center>
                    <br />
                    <img src={csitImage} alt="" className="partner-image" />
                    <img src={askBuddieImage} alt="" className="partner-image" />
                    <img src={pythonNpImage} alt="" className="partner-image" />
                </div>

                <div className="col-lg-2 text-center">

                    <center><b class="partner-title">Organized By</b></center>
                    <br />
                    <img src={csajuImage} alt="" className="partner-image" />
                </div>

                <div className="col-lg-2 text-center">

                    <center><b class="partner-title">Event Partner</b></center>
                    <br />
                    <img src={eventsNpImage} alt="" className="partner-image" />
                </div>

                <div className="col-lg-4 text-center">

                    <center><b class="partner-title">Media Partner</b></center>
                    <br />
                    <img src={techPanaImage} alt="" className="partner-image" />
                </div>
            </div>
        </div>
    )
}

export default Partners
