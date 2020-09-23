import React from "react";
import loadable from "@loadable/component";
// import BackgroundImage from "gatsby-background-image";
import { Link } from "gatsby";

import logo from "../../images/otherworld-logo.svg";

// gatsby-background-image was causing HTML build error since it tried to access the window object which is not available at build time

// this setup will work for gatsby build, but will break when using gatsby develop. While using gatsby develop, switch BackgroundImage to normal
// import instead of using @loadable/component

const BackgroundImage = loadable(() => import("gatsby-background-image"));

export default function Background({ img, styleClass, title, children }) {
  return (
    <Link to="/">
      <BackgroundImage className={styleClass} fluid={img}>
        <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
          {title}
        </h1>
        <img src={logo} className="main-logo" alt="main logo"></img>
        {children}
      </BackgroundImage>
    </Link>
  );
}

Background.defaultProps = {
  title: "default title",
  styleClass: "default-background",
};
