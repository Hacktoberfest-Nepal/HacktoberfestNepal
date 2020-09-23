import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";

const Navbar = () => (
  <div className="container">
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/about">
          <li>About</li>
        </Link>

        <Link to="/speakers">
          <li>Speakers</li>
        </Link>

        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  </div>
);

export default Navbar;
