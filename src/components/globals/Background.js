import React from "react";
import BackgroundImage from "gatsby-background-image";
import logo from "../../images/otherworld-logo.svg";

export default function Background({ img, styleClass, title, children }) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
      <img src={logo} className="main-logo"></img>
      {children}
    </BackgroundImage>
  );
}

Background.defaultProps = {
  title: "default title",
  styleClass: "default-background"
};
