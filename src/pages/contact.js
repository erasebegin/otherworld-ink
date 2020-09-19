import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Background from "../components/globals/Background";
import Contact from "../components/home/Contact";
import SEO from "../components/seo";

const ContactPage = ({ data }) => {
  
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

  const largeImage = images.contact.fluid;
  const smallImage = images.contactSmall ? images.contactSmall.fluid : null;

  return (
    <Layout>
      <SEO title="Contact" />
      <Background
        img={isMobile && smallImage ? smallImage : largeImage}
        title=" "
        styleClass="secondary-background"
      />
      <Contact />
    </Layout>
  );
};

export const query = graphql`
  {
    headerImage: allContentfulHeaderImages(sort: { fields: createdAt }) {
      edges {
        node {
          contact {
            fluid(cropFocus: CENTER, resizingBehavior: FILL) {
              ...GatsbyContentfulFluid
            }
          }
           contactSmall {
             fluid(cropFocus: CENTER, resizingBehavior: FILL) {
               ...GatsbyContentfulFluid
             }
           }
        }
      }
    }
  }
`;

export default ContactPage;
