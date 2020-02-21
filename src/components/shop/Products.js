import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Product from "./Product";
import Title from "../globals/Title";

export default function Products() {
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title="Shop" />
              <div className="row">
                {data.products.edges.map(({ node: product }) => {
                  return (
                    <Product
                      key={product.id}
                      product={product}
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

const getProducts = graphql`
  {
    products: allContentfulProduct {
      edges {
        node {
          id
          price
          title
          image {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;
