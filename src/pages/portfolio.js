import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image"

import Title from "../components/globals/Title"
import Layout from "../components/layout";
import Background from "../components/globals/Background";
import SEO from "../components/seo";

const PortfolioPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <Background
        img={data.img.childImageSharp.fluid}
        title=" "
        styleClass="secondary-background"
      />
      <section className="portfolio-preview py-5">
        <Title title="portfolio" />
        <div className="row">
          <div className="col-12 mx-auto text-center card-container">
            {data.portfolio.edges.map(({ node }) => {
              return (
                <div className="portfolio-card" key={node.id}>
                  <Img fixed={node.image.fixed} className="card-image" />
                  <div className="card-text">
                    <h6 className="mb-0">{node.title}</h6>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    img: file(relativePath: { eq: "tao-gas-master.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    portfolio: allContentfulPortfolioEntry {
      edges {
        node {
          id
          title
          description {
            description
          }
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

export default PortfolioPage;
