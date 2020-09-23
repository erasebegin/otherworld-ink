import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import CartButton from "../cart/AddToCartButton";

export default function productCard({ data }) {
  const { id, title, price, images, slug } = data.node;

  return (
    <Card className="column">
      <div className="card">
        <div>
          <Link to={`/shop/${slug}`}>
            <Img
              fluid={images[0].fluid}
              className="product-image"
              alt="a random image"
            />
          </Link>
        </div>
        <div className="card-content">
          <div className="title-container">
            <Link to={`/shop/${slug}`}>
              <p className="card-title">{title}</p>
            </Link>
          </div>
          <div className="content">
          </div>
        </div>
        <div className="footer">
          <p className="price">${price}</p>
          <CartButton
            id={id}
            title={title}
            image={images[0].fluid}
            slug={slug}
            price={price}
          />
        </div>
      </div>
    </Card>
  );
}

const Card = styled.div`
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    min-width: 80vw;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-bottom: 4em;
    background: rgb(35, 35, 35) !important;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    width: 100%;
    padding: 1em 2em;
    border-top: 2px solid var(--purple1);
    background: rgb(40, 40, 40);

    p {
      width: 100%;
      font-weight: 400;
      font-size: 1.3rem;
      color: #8d8d8d;
    }
  }

  .title-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1em;
    margin: 1em 0;
    .card-title {
      font-size: 1.6rem;
      color: var(--purple3);
      &:hover {
        text-decoration: underline;
        text-decoration-color: var(--purple1) !important;
      }
    }
  }

  .product-image {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
    max-width: 92%;
    height: 300px;
    margin: 0 auto;
    margin-top: -3.5%;
    margin-bottom: 0.5em;
    object-fit: cover;
  }
`;
