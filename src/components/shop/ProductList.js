import React from "react";
import ProductCard from "./ProductCard";
import ProductCardLarge from "./ProductCardLarge";
import styled from "styled-components";

export default function ProductList({ items, isMobile, limit }) {
  if (items) {
    const products = items.slice(0, limit);
    //if limit === undefined, whole array is copied
    return (
      <Container>
        <div className="card-container">
          {products.map((product, index) => {
            if (isMobile === true) {
              return <ProductCard data={product} key={index} />;
            } else {
              return (
                <div>
                  <ProductCardLarge data={product} key={index} />
                </div>
              );
            }
          })}
        </div>
      </Container>
    );
  } else {
    return <></>;
  }
}

const Container = styled.section`
  min-height: 100vh;
  .card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 2em auto;
    padding: 3em;

    @media (min-width: 800px) {
      flex-flow: row wrap;
      align-content: left;
    }
  }
`;

ProductList.defaultProps = {
  limit: 5,
  cardClass: "columns is-desktop is-multiline",
  columnSize: "is-half",
};
