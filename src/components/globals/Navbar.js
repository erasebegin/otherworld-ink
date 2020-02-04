import React, { useState } from "react";
import { Link, Image } from "gatsby";
import logo from "../../images/otherworld-logo.svg";
import { MdShoppingCart } from "react-icons/md";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
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
    },
    {
      id: 3,
      path: "/portfolio",
      text: "portfolio"
    }
  ]);

  const navbarHandler = () => {
    if(navOpen){
      setNavOpen(false)
      setNavCss("collapse navbar-collapse")
      console.log("navbar is closed")
    } else {
      setNavOpen(true)
      setNavCss("collapse navbar-collapse show")
      console.log("navbar is open")
    }
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo"/>
      </Link>
      <button className="navbar-toggler" type="button" onClick={navbarHandler}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={navCss}>
        <ul className="navbar-nav mx-auto">
          {navLinks.map(link => {
            return (
              <li key={link.id} className="nav-item">
                <Link to={link.path} className="nav-link text-uppercase">
                  {link.text}
                </Link>
              </li>
            );
          })}
          <li>
            <MdShoppingCart className="cart-icon" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
