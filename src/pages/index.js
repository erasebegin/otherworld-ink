import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Background from "../components/globals/Background";
import About from "../components/home/About"
import SEO from "../components/seo";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
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
    img: file(relativePath: { eq: "crow-lord.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage;
