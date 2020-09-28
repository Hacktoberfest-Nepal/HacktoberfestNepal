import React from "react";
import "../assets/css/contactComponent.css";
import { FaGithub, FaFacebook } from "react-icons/fa";

const ContactComponent = () => {
  return (
    <div className="contact-component-wrapper">
      <div className="container">
        <h1 className="text-masked contact-component-header">Contact</h1>
        <div className="contact-details-wrapper">
          <h1>Need Help?</h1>
          <p>You may contact to us via any of the following means: </p>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 text-center">
              <a
                href="https://github.com/Hacktoberfest-Nepal"
                target="_blank"
                rel="noopener noreferrer"
                className="home-contact-link">
                <FaGithub className="home-contact-icons styled-text-pink" />
                <div className="home-contact-details">
                  <h1 className="styled-text-pink home-contact-heading">
                    GitHub
                  </h1>
                  <p className="home-contact-description">
                    Our Official Repository
                  </p>
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
                <div className="home-contact-details">
                  <h1 className="styled-text-pink home-contact-heading">
                    CSaju
                  </h1>
                  <p className="home-contact-description">
                    Our Organizer Official Page
                  </p>
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
