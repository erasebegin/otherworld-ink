import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import CartButton from "../cart/AddToCartButton";

export default function productCardLarge({ data }) {
  const {
    title,
    description,
    price,
    image,
    slug,
    id
  } = data.node;

  console.log({image})

  return (
    <Card>
      <div className="product-image-container">
        <Link to={`/shop/${slug}`}>
          <Img fluid={image.fluid} className="product-image" />
        </Link>
      </div>
      <div className="product-info">
        <div className="top-wrapper">
          <Link to={`/shop/${slug}`}>
            <h1>{title.toLowerCase()}</h1>
          </Link>
          <hr />
          {/* <p>{description.internal.content}</p> */}
        </div>
        <div className="price-button-container">
          <CartButton
            id={id}
            title={title}
            // description={description.internal.content}
            image={image}
            slug={slug}
            price={price}
          />
          <p className="price">${price}&nbsp;</p>
        </div>
      </div>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  font-family: "Heebo";
  margin: auto;
  margin-top: 1em;
  width: 500px;
  height: 400px;
  -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);

  .product-image-container {
    padding: 0;
    max-width: 50%;
    button {
      position: absolute;
      /* border-top-right-radius: 0;
      border-bottom-right-radius: 0; */
      z-index: 100;
    }
    .product-image {
      width: 250px;
      height: 100%;
      margin: auto;
    }
  }

  .product-info {
    padding: 1.5em;
    padding-top: 1em;
    border-top: 2px solid #b18d17;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1 {
      font-size: 34px;
      color: #474747;
      font-family: "Playfair Display", serif;
    }
    hr {
      margin-top: 1em;
    }
    p {
      color: #8d8d8d;
      line-height: 1.7em;
      font-size: 15px;
      font-weight: lighter;
      overflow: hidden;
    }
  }

  .price-button-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin-top: 1em;
    margin-left: 0;
    .price {
      font-family: "Playfair Display", serif;
      font-weight: 400;
      font-size: 1.3rem !important;
    }
  }
`;
