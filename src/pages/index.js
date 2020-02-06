import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Background from "../components/globals/Background";
import Info from "../components/home/Info";
import PortfolioPreview from "../components/home/PortfolioPreview";
import SEO from "../components/seo";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Background
      img={data.img.childImageSharp.fluid}
      title=" "
      styleClass="default-background"
    />
    <Info />
    <div className="about-btn-container">
      <Link to="/about/">
        <button className="btn text-uppercase btn-purple">read more</button>
      </Link>
    </div>
    <PortfolioPreview data={data.portfolio}/>
    <div className="about-btn-container">
      <Link to="/portfolio">
        <button className="btn text-uppercase btn-purple">see more</button>
      </Link>
    </div>
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
    portfolio: allContentfulPortfolioEntry(limit:1000) {
      edges {
        node {
          id
          slug
          title
          image {
            fixed(height: 200, width: 200) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
