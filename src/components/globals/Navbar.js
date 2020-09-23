import React, { useState } from "react";
import { Link } from "gatsby";
import { MdShoppingCart } from "react-icons/md";
import styled from "styled-components";

import logo from "../../images/otherworld-logo.svg";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [navCss, setNavCss] = useState("collapse navbar-collapse");
  const [navLinks] = useState([
    {
      id: 1,
      path: "/",
      text: "home",
    },
    {
      id: 2,
      path: "/blog",
      text: "news",
    },
    {
      id: 3,
      path: "/portfolio",
      text: "portfolio",
    },
    {
      id: 4,
      path: "/shop",
      text: "shop",
    },
    {
      id: 5,
      path: "/about",
      text: "about",
    },
    {
      id: 6,
      path: "/contact",
      text: "contact",
    },
  ]);

  const navbarHandler = () => {
    if (navOpen) {
      setNavOpen(false);
      setNavCss("collapse navbar-collapse");
      console.log("navbar is closed");
    } else {
      setNavOpen(true);
      setNavCss("collapse navbar-collapse show");
      console.log("navbar is open");
    }
  };

  return (
    <Nav className="navbar navbar-expand-sm navbar-dark">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo" />
      </Link>
      <button
        className="navbar navbar-toggler"
        type="button"
        onClick={navbarHandler}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={navCss}>
        <ul className="navbar-nav mx-auto">
          {navLinks.map((link) => {
            return (
              <li key={link.id} className="nav-item">
                <Link to={link.path} className="nav-link text-uppercase">
                  {link.text}
                </Link>
              </li>
            );
          })}
          <li>
            <button className="snipcart-checkout cart-icon">
              <MdShoppingCart />
            </button>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  background: linear-gradient(
    59deg,
    rgb(39, 73, 111),
    rgb(53, 31, 83),
    #4600a1
  );
  background-size: 400% 400%;

  -webkit-animation: nav-gradient 30s ease infinite;
  -moz-animation: nav-gradient 30s ease infinite;
  animation: nav-gradient 30s ease infinite;

  @-webkit-keyframes nav-gradient {
    0% {
      background-position: 0% 52%;
    }
    50% {
      background-position: 100% 49%;
    }
    100% {
      background-position: 0% 52%;
    }
  }
  @-moz-keyframes nav-gradient {
    0% {
      background-position: 0% 52%;
    }
    50% {
      background-position: 100% 49%;
    }
    100% {
      background-position: 0% 52%;
    }
  }
  @keyframes nav-gradient {
    0% {
      background-position: 0% 52%;
    }
    50% {
      background-position: 100% 49%;
    }
    100% {
      background-position: 0% 52%;
    }
  }

  .nav-link {
    font-size: 1.7rem;
    font-family: "Catamaran", sans-serif;
    text-transform: uppercase;
    color: white;
    transition: 0.25s;
    &:hover {
      color: var(--purple2);
      transition: 0.25s;
    }
  }

  .cart-icon {
    cursor: pointer;
    color: var(--pink);
    font-size: 2rem;
    margin: 0.5rem 1rem;
    transition: 200ms;
    background: none;
    border: none;
    &:hover {
      filter: brightness(1.3);
      color: var(--pink);
      transition: 200ms;
    }
  }
`;
