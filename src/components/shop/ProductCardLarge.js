import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import CartButton from "../cart/AddToCartButton";

export default function productCardLarge({ data }) {
  const { title, price, image, slug, id, caption } = data.node;

  console.log({ image });

  return (
    <Card>
      <div className="product-image-container">
        <p className="image-caption">{caption}</p>
        <Link to={`/shop/${slug}`}>
          <Img fluid={image.fluid} className="product-image" />
        </Link>
      </div>
      <div className="product-info">
        <div className="top-wrapper">
          <Link to={`/shop/${slug}`}>
            <h1>{title}</h1>
          </Link>
          <hr />
        </div>
        <div className="price-button-container">
          <p className="price">${price}&nbsp;</p>
          <CartButton
            id={id}
            title={title}
            image={image}
            slug={slug}
            price={price}
          />
        </div>
      </div>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  margin: auto;
  margin: 2em 0;
  width: 500px;
  height: 400px;
  -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  background: rgb(35, 35, 35);
  transition: ease-in-out 200ms;

  &:hover {
    transform: translate(2px, 1px);
    box-shadow: 0px 7px 16px 0px rgba(0, 0, 0, 0.15);
    filter: brightness(110%);
    transition: ease-in-out 200ms;
  }

  .product-image-container {
    padding: 0;
    max-width: 50%;
    button {
      position: absolute;
      z-index: 100;
    }
    .product-image {
      width: 250px;
      height: 100%;
      margin: auto;
    }
    .image-caption {
      position: absolute;
      background: var(--purple1);
      width: auto;
      z-index: 100;
      padding: 0.5em;
      color: var(--purple3);
      text-transform: uppercase;
    }
  }

  .product-info {
    padding: 1.5em;
    padding-top: 1em;
    border-top: 2px solid var(--purple1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1 {
      font-size: 1.5rem;

      &:hover {
        text-decoration: underline;
        text-decoration-color: var(--purple1) !important;
      }
    }
    hr {
      margin-top: 1em;
    }
    p {
      color: #8d8d8d;
      font-size: 15px;
      font-weight: lighter;
      overflow: hidden;
    }
  }

  .price-button-container {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 1em;
    margin-left: 0;
    .price {
      font-weight: 400;
      font-size: 1.3rem;
      margin: auto;
      width: 100%;
    }
  }
`;
