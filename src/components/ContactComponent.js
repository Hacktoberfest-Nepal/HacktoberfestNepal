import React from "react";
import "../assets/css/contactComponent.css";
import { FaGithub, FaFacebook } from "react-icons/fa";

const ContactComponent = () => {
  return (
    <div className="contact-component-wrapper" style={{ height: "40vh" }}>
      <div className="container">
        <div className="contact-details-wrapper">
          <br /><br />
          <h1>Need Help?</h1>
          <p>You may contact to us via any of the following means: </p>
          <div className="row mt-5 justify-content-center">
            <div className="col-12 col-md-6 col-lg-4 text-center">
              <a
                href="https://github.com/Hacktoberfest-Nepal"
                target="_blank"
                rel="noopener noreferrer"
                className="home-contact-link">
                <FaGithub className="home-contact-icons styled-text-pink" />
                <div className="home-contact-details mt-5">
                  <small className="home-contact-description">
                    GitHub - Our Official Repository
                  </small>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-center">
              <a
                href="https://www.facebook.com/Csaju10"
                target="_blank"
                rel="noopener noreferrer"
                className="home-contact-link">
                <FaFacebook className="home-contact-icons styled-text-pink" />
                <div className="home-contact-details mt-5">

                  <small className="home-contact-description">
                    CSaju - Our Organizer Official Page
                  </small>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
