import React from "react";
import {
  FaBehanceSquare,
  FaTwitterSquare,
  FaInstagram,
  FaEnvelopeSquare
} from "react-icons/fa";
import { Link } from 'gatsby'
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterStyled className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-center text-capitalize">
            <h5>
              all rights reserved &copy; {new Date().getFullYear().toString()}
            </h5>
          </div>
        </div>
        <div>
          <ul className="contact-list contact-nav-link">
            <li className="nav-link">
              <a
                href="https://www.instagram.com/otherworld__ink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li className="nav-link contact-nav-link">
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitterSquare />
              </a>
            </li>
            <li className="nav-link contact-nav-link">
              <a
                href="https://www.behance.net/Leon_dB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaBehanceSquare />
              </a>
            </li>
            <li className="nav-link contact-nav-link">
              <a href="mailto:leon@otherworldink.com">
                <FaEnvelopeSquare />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-10 mx-auto col-md-6 text-center text-capitalize">
          <h5>
            <Link to="/legal" className="terms-link">Our Policies</Link>
          </h5>
        </div>
      </div>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  color: var(--purple3);
  background: linear-gradient(59deg, #27496f, #351f53, #4600a1);
  background-size: 400% 400%;

  -webkit-animation: nav-gradient 20s ease infinite;
  -moz-animation: nav-gradient 20s ease infinite;
  animation: nav-gradient 20s ease infinite;

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

  .terms-link {
    text-decoration: none;
    color: var(--purple3);
    font-size: 1.2rem;
    &:hover {
      filter: brightness(0.9)
    }
  }
`
