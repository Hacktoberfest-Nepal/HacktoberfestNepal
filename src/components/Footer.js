import React from "react";
import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h2 className="footer-main-title">Sagarmatha HackObterFest Nepal</h2>
      <br />
      <br />
      Copyright &copy; {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
