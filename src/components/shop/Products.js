import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Product from "./Product";
import Title from "../globals/Title";

const getProducts = graphql`
  {
    products: allContentfulProduct {
      edges {
        node {
          id
          price
          title
          image {
            fluid(maxHeight: 400) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default function Products() {
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        return (
          <section className="py-5">
            <div class="container">
              <Title title="Shop" />
              <div class="row">
                {data.products.edges.map(({node:product}) => {
                  return (
                    <Product
                      key={product.id}
                      title={product.title}
                      price={product.price}
                      image={product.image}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        );
      }}
    />
  );
}
