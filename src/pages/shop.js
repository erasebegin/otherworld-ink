import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Background from "../components/globals/Background";
import ProductList from "../components/shop/ProductList";

export default function Shop({ data }) {
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

  const images = data.headerImage.edges[0].node;

  const largeImage = images.shop.fluid;
  const smallImage = images.shopSmall ? images.shopSmall.fluid : null;

  return (
    <div>
      <Layout>
        <Background
          img={isMobile && smallImage ? smallImage : largeImage}
          title=" "
          styleClass="secondary-background"
        />
        <ProductList items={data.products.edges} isMobile={isMobile} limit={20}/>
      </Layout>
    </div>
  );
}

export const query = graphql`
  {
    headerImage: allContentfulHeaderImages(sort: { fields: createdAt }) {
      edges {
        node {
          shop {
            fluid(cropFocus: CENTER, resizingBehavior: FILL) {
              ...GatsbyContentfulFluid
            }
          }
          shopSmall {
            fluid(cropFocus: CENTER, resizingBehavior: FILL) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    products: allContentfulProduct {
      edges {
        node {
          id
          description {
            description
          }
          price
          slug
          title
          images {
            fluid(resizingBehavior: CROP, cropFocus: CENTER) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
