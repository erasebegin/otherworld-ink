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
        alt={true}
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
        alt={false}
      >
        <FaCartPlus size=".75em" />
      </Button>
    );
  }
}

const Button = styled.button`
  padding: ${(props) => (props.alt ? "0 .5em" : "0 0.5em 0.2em 0.5em")};
  transition: 200ms ease-in-out;
  background: ${(props) => (props.alt ? "var(--purple1)" : "var(--pink)")};
  color: ${(props) => (props.alt ? "var(--purple3)" : "var(--purple3)")};
  border: none;
  font-size: 1.5rem;

  &:hover {
    background: ${(props) => (props.alt ? "var(--pink)" : "var(--pink)")};
    color: ${(props) => (props.alt ? "var(--purple3)" : "var(--purple4)")};
  }
`;
