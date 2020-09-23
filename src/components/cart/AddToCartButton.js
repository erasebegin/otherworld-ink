import React from "react";
import { FaCartPlus } from "react-icons/fa";
import styled from "styled-components";

export default function AddToCartButton({
  id,
  title,
  image,
  price,
  description,
  slug,
  alt,
}) {
  if (alt) {
    return (
      <Button
        className="snipcart-add-item is-size-3 is-size-4-mobile"
        data-item-id={id}
        data-item-price={price}
        data-item-url={`/${slug}`}
        data-item-description={description}
        // data-item-image={image ? image.fluid.src : null}
        data-item-name={title}
      >
        ADD TO CART <FaCartPlus />
      </Button>
    );
  } else {
    return (
      <Button
        className="snipcart-add-item is-size-3 is-size-4-mobile"
        data-item-id={id}
        data-item-price={price}
        data-item-url={`/${slug}`}
        data-item-description={description}
        // data-item-image={image ? image.fluid.src : null}
        data-item-name={title}
      >
        <FaCartPlus size=".75em" />
      </Button>
    );
  }
}

const Button = styled.button`
  padding: 0 .5em .2em .5em;
  transition: 200ms ease-in-out;
  background: var(--pink);
  color: white;
  border: none;
  font-size: 1.5rem;

  &:hover {
    background: var(--purple1);
    color: var(--pink);
  }
`;