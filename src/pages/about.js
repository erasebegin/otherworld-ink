import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Background from "../components/globals/Background";
import About from "../components/home/Info"
import SEO from "../components/seo";

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <Background
      img={data.img.childImageSharp.fluid}
      title=" "
      styleClass="default-background"
    />
    <About />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "televirtual.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default AboutPage;
