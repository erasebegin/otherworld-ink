import React from "react";
import BackgroundImage from "gatsby-background-image";
import logo from "../../images/otherworld-logo.svg";
import "./gradient-animation.css";

export default function Background({ img, styleClass, title, children }) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
      <img src={logo} className="main-logo"></img>
      {/* color divs are for gradient animation */}
      <div id="blue"></div>
      <div id="red"></div>
      <div id="green"></div>
      {children}
    </BackgroundImage>
  );
}

Background.defaultProps = {
  title: "default title",
  styleClass: "default-background"
};
