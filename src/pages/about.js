import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Background from "../components/globals/Background";
import Info from "../components/home/Info"
import SEO from "../components/seo";

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <Background
      img={data.img.childImageSharp.fluid}
      title=" "
      styleClass="secondary-background"
    />
    <Info />
    <div className="about-btn-container">
      <a href = "mailto:leon@otherworldink.com">
        <button className="btn text-uppercase btn-purple">contact me</button>
      </a>
    </div>
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "tekno-priest.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default AboutPage;
