import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Terms = ({data}) => (
  <Layout>
    <SEO title="Terms and Conditions" />
    <Img fluid={data.img.childImageSharp.fluid} />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "terms_and_conditions.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;


export default Terms;

