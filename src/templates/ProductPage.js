
import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/react";
import styled from "styled-components";

import Layout from "../components/layout";
import Title from "../components/globals/Title";
import SEO from "../components/seo";

const ProductPage = ({ data }) => {
  const { title, description, image } = data.contentfulProduct;

  return (
    <Layout>
      <SEO title={title} />
      <Container className="container">
        <Title title={title} styleClass="display-4 text-capitalize mt-4" />
        <div className="row">
          <div className="col-11 col-sm-8 col-lg-6 mx-auto text-center">
              <Img fluid={image.fluid} className="img-fluid" />
            {description ? (
              <MDXProvider>
                <article className="text-muted text-left">
                  <MDXRenderer>{description.childMdx.body}</MDXRenderer>
                </article>
              </MDXProvider>
            ) : (
              <article>&nbsp;</article>
            )}
          </div>
        </div>
      </Container>
    </Layout>
  );
};
export default ProductPage;

const Container = styled.div`
  article {
    p {
      margin: 2em 0;
      font-size: 1.2rem;
    }
  }
`
export const pageQuery = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      title
      slug
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      description {
        childMdx {
          body
        }
      }
    }

    allProducts: allContentfulProduct {
      edges {
        node {
          title
          slug
          image {
            fixed(
              cropFocus: CENTER
              height: 300
              width: 200
              resizingBehavior: FILL
            ) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;
