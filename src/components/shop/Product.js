import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import AddToCartButton from "../cart/AddToCartButton";

export default function Product({ product }) {
  const { image, title, price, caption, id, slug } = product.node;

  return (
    <Card className="mx-auto my-3 col-9 col-md-6 col-lg-3">
      <div className="img-container">
        <Link to={`/shop/${slug}`} >
        <Img className="" fixed={image.fixed} alt={title} />
        </Link>
      </div>
      <h4 className="text-center my-2">{title}</h4>
      <p className="caption">{caption}</p>
      <p className="price">${price}</p>
      <AddToCartButton
        id={id}
        title={title}
        image={image}
        price={price}
      />
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--purple3);
  border-radius: 10px;
  padding: 1em;
  transition: 200ms ease-in-out;

  .img-container {
    position: relative;
    overflow: hidden;
  }

  h4 {
    color: var(--purple2);
    text-align: left;
    font-weight: 800;
  }

  .caption {
    color: var(--pink);
  }

  .price {
    font-weight: 300;
    font-size: 1.3rem;
    color: var(--purple2);
  }

  &:hover {
    box-shadow: 0px 0px 10px 0px var(--pink);
    transform: scale(1.05);
    transition: 200ms ease-in-out;

    button {
      transform: initial;
      transition: 200ms ease-in-out;
    }
  }

  .cart-link {
    text-decoration: none;
    color: var(--purple3);
  }
`;
