import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Background from "../components/globals/Background";
import Info from "../components/home/Info";
import SEO from "../components/seo";

const AboutPage = ({ data }) => {
  
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    window.innerWidth <= 800 ? setIsMobile(true) : setIsMobile(false);
  });

  if (typeof window === "undefined") {
    global.window = {};
  }

  window.onresize = function() {
    window.innerWidth <= 800 ? setIsMobile(true) : setIsMobile(false);
  };

  const images = data.headerImage.edges[0].node;

  const largeImage = images.about.fluid;
  const smallImage = images.aboutSmall ? images.aboutSmall.fluid : null;

  return (
    <Layout>
      <SEO title="About" />
      <Background
        img={isMobile && smallImage ? smallImage : largeImage}
        title=" "
        styleClass="secondary-background"
      />
      <Info />
      <div className="about-btn-container">
        <a href="mailto:leon@otherworldink.com">
          <button className="btn text-uppercase btn-purple">contact me</button>
          {/* TODO: set to new contact page */}
        </a>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    headerImage: allContentfulHeaderImages(sort: { fields: createdAt }) {
      edges {
        node {
          about {
            fluid(cropFocus: CENTER, resizingBehavior: FILL) {
              ...GatsbyContentfulFluid
            }
          }
           aboutSmall {
             fluid(cropFocus: CENTER, resizingBehavior: FILL) {
               ...GatsbyContentfulFluid
             }
           }
        }
      }
    }
  }
`;

export default AboutPage;
