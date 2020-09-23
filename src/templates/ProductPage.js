import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/react";
import styled from "styled-components";

import ProductPageHeader from "../components/product-page/ProductPageHeader";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ProductPage = ({ data }) => {
  const { title, description } = data.contentfulProduct;

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    window.innerWidth <= 800 ? setIsMobile(true) : setIsMobile(false);
  });

  if (typeof window === "undefined") {
    global.window = {};
  }

  window.onresize = function() {
    window.innerWidth <= 800 ? setIsMobile(true) : setIsMobile(false);
  };

  return (
    <Layout>
      <SEO title={title} />
      <Container className="container">
            <ProductPageHeader
              data={data.contentfulProduct}
              isMobile={isMobile}
            />
            {description ? (
              <MDXProvider>
                <article className="text-muted text-left">
                  <MDXRenderer>{description.childMdx.body}</MDXRenderer>
                </article>
              </MDXProvider>
            ) : (
              <article>&nbsp;</article>
            )}
      </Container>
    </Layout>
  );
};
export default ProductPage;

const Container = styled.div`
  article {
    p {
      margin: 2em 1em;
      font-size: 1.2rem;
    }
  }
`;
export const pageQuery = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      title
      slug
      id
      images {
        fluid(
          cropFocus: CENTER
          resizingBehavior: FILL
        ) {
          ...GatsbyContentfulFluid
        }
      }
      thumbnails: images {
        fixed(
          cropFocus: CENTER
          height: 100
          width: 100
          resizingBehavior: FILL
        ) {
          ...GatsbyContentfulFixed
        }
      }
      description {
        childMdx {
          body
        }
      }
      price
      descriptionShort {
        internal {
          content
        }
      }
    }

    allProducts: allContentfulProduct {
      edges {
        node {
          title
          slug
          images {
            fixed(
              cropFocus: CENTER
              height: 300
              width: 200
              resizingBehavior: FILL
            ) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`;
