import React, { useState } from "react";
import { Link, Image } from "gatsby";
import logo from "../../images/otherworld-logo.svg";
// import { FaCartArrowDown } from "react-icons/fa";

export default function Navbar() {
  const [navOpen, serNavOpen] = useState(false);
  const [navCss, setNavCss] = useState("collapse navbar-collapse");
  const [navLinks, setNavLinks] = useState([
    {
      id: 1,
      path: "/",
      text: "home"
    },
    {
      id: 2,
      path: "/about",
      text: "about"
    }
  ]);

  const navbarHandler = () => {
    console.log("navbar handler says ey");
  };

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo" height={80} />
      </Link>
      <button className="navbar-toggle" type="button" onClick={navbarHandler}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={navCss}>
        <ul className="navbar-nav mx-auto">
          {navLinks.map(link => {
            return (
              <li key={link.id} className="nav-item">
                <Link to={link.path} className="nav-link text-capitalize">
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
