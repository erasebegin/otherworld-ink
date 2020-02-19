import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

import Title from "../components/globals/Title";
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
        <div className="container">
          <Title title="portfolio" />
          <div className="row">
            
              {data.portfolio.edges.map(({ node }) => {
                return (
                  <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3" key={node.id}>
                    <div className="card" style={{ minHeight: "100%" }}>
                      <Link to={`/portfolio/${node.slug}`}>
                        <Img fixed={node.image.fixed} className="card-img-top"/>
                      </Link>
                      <div className="card-body text-center">
                        <h6 className="mb-0">{node.title}</h6>
                      </div>
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
    portfolio: allContentfulPortfolioEntry(limit: 1000) {
      edges {
        node {
          id
          title
          description {
            description
          }
          image {
            fixed(height: 220, width: 345) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
          slug
        }
      }
    }
  }
`;

export default PortfolioPage;
