import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../assets/css/Navbar.css";
import hacktoberfestLogo from "../assets/images/logo.png";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const navBarData = [
  {
    path: "/",
    pathName: "Home",
  },
  {
    path: "/about",
    pathName: "About",
  },
  {
    path: "/speakers",
    pathName: "Speakers",
  },
  {
    path: "/contact",
    pathName: "Contact",
  },
];

const activeStyle = {
  color: " rgb(224, 70, 129)",
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <div className="container">
      <nav className="d-flex justify-content-between mt-0">
        <div className="navbar-logo align-self-center">
          <Link to="/">
            <img src={hacktoberfestLogo} alt="HacktoberFest" className="w-50" />
          </Link>
        </div>
        <ul className="align-self-center d-none d-md-block">
          {navBarData.map(navData => {
            return (
              <NavLink activeStyle={activeStyle} exact to={navData.path}>
                <li>{navData.pathName}</li>
              </NavLink>
            );
          })}
        </ul>
        {isMenuOpen ? <OverlayMenu closeMenu={closeMenu} /> : null}

        <button className="d-md-none d-block menu-bar" onClick={toggleMenu}>
          {isMenuOpen ? <GrClose /> : <FaBars />}
        </button>
      </nav>
    </div>
  );
};

const OverlayMenu = ({ closeMenu }) => {
  return (
    <nav className="overlay-navbar">
      <ul className="overlay-nav-links">
        {navBarData.map(navData => {
          return (
            <NavLink
              className="overlay-nav-link"
              activeStyle={activeStyle}
              onClick={closeMenu}
              exact
              to={navData.path}>
              <li>{navData.pathName}</li>
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
