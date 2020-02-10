import React from "react";
import {
  FaBehanceSquare,
  FaTwitterSquare,
  FaInstagram,
  FaEnvelopeSquare
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer py-3">
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
                rel="noopener"
              >
                <FaInstagram />
              </a>
            </li>
            <li className="nav-link contact-nav-link">
              <a href="https://www.twitter.com" target="_blank" rel="noopener">
                <FaTwitterSquare />
              </a>
            </li>
            <li className="nav-link contact-nav-link">
              <a
                href="https://www.behance.net/Leon_dB"
                target="_blank"
                rel="noopener"
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
      </div>
    </footer>
  );
}
