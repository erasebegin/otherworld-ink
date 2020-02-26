import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import Title from "../components/globals/Title";
import Pagination, { NextPost } from "../components/globals/Pagination";
import SEO from "../components/seo";
const PortfolioEntry = ({ data }) => {
  const { title, slug, description, image } = data.contentfulPortfolioEntry;

  return (
    <Layout>
      <SEO title={title} />
      <div className="container">
        <Title title={title} styleClass="display-4 text-capitalize mt-4" />
        <div className="row">
          <div className="col-11 col-sm-8 col-lg-6 mx-auto text-center">
            <NextPost current={slug} data={data.allPosts.edges} type="portfolio">
              <Img fixed={image.fixed} className="img-fluid" />
            </NextPost>
            <div className="my-5 p-3">
              <p className="lead text-muted text-center">
                {description.description}
              </p>
            </div>
          </div>
        </div>
        <Pagination current={slug} data={data.allPosts.edges} type="portfolio" />
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

    allPosts: allContentfulPortfolioEntry {
      edges {
        next {
          slug
        }
        previous {
          slug
        }
        node {
          slug
        }
      }
    }
  }
`;
