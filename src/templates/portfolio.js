import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import Title from "../components/globals/Title";
import SEO from "../components/seo";
const PortfolioEntry = ({ data }) => {
  const { title, description, image } = data.contentfulPortfolioEntry;
  return (
    <Layout>
      <SEO title={title} />
      <div className="portfolio-page">
        <Title title={title} styleClass="display-4 text-capitalize mt-4" />
        <div className="row">
          <div className="col-lg-4 mx-auto ">
            <Img fixed={image.fixed} />
            <div>
              <p className="lead text-muted text-center">{description.description}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default PortfolioEntry;
export const pageQuery = graphql`
  query($slug: String!) {
    contentfulPortfolioEntry(slug: { eq: $slug }) {
      title
      slug
      image {
        fixed {
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
      description {
        description
      }
    }
  }
`;
