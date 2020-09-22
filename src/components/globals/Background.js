import React from "react";

import loadable from "@loadable/component";

// gatsby-background-image was causing HTML build error since it tried to access the window object which is not available at build time

const BackgroundImage = loadable(() => import("gatsby-background-image"));

export default function Background({ img, styleClass, title, children }) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  );
}

Background.defaultProps = {
  title: "default title",
  styleClass: "default-background",
};
