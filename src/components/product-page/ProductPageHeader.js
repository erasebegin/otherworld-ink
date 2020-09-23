import React, { useState } from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import ImageCarousel from "./ImageCarousel";
import AddToCartButton from "../cart/AddToCartButton";

export default function ProductPageHeader({ data, isMobile }) {
  const { title, descriptionShort, images, thumbnails, price, id, slug } = data;
  const [currDispImg, setCurrDispImg] = useState(images[0].fluid);

  const setCurrImg = (index) => {
    setCurrDispImg(images[index].fluid);
  };

  return (
    <Container>
      <div className="image-container">
        <Img fluid={currDispImg} className="product-image-main" />
      </div>
      <div className="product-header-info">
        <p className="product-header-title">{title}</p>
        <p className="product-header-description">
          {descriptionShort.internal.content}
        </p>
        {thumbnails !== null && thumbnails.length > 0 ? (
          <div className="carousel-container">
            <ImageCarousel thumbArr={thumbnails} setCurr={setCurrImg} />
          </div>
        ) : (
          <div className="padding"></div>
        )}
        <div className="price-button-container">
          <p>${price}</p>
          {isMobile ? (
            <AddToCartButton
              id={id}
              title={title}
              image={thumbnails[0].fixed}
              price={price}
              description={descriptionShort.internal.content}
              slug={slug}
            />
          ) : (
            <AddToCartButton
              id={id}
              title={title}
              image={thumbnails[0].fixed}
              price={price}
              description={descriptionShort.internal.content}
              slug={slug}
              alt
            />
          )}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin: auto;
  padding: 2em;
  background: var(--purple1);
  color: var(--purple3);
  margin-top: 2em;
  min-width: 80vw;

  @media (min-width: 800px) {
    max-width: 75vw;
    min-width: 70vw;
    flex-direction: row;
  }

  .image-container {
    padding: 1em;
    background: var(--purple2);
    z-index: 1;
    height: 400px;
    width: 300px;
    margin: auto;
    /* VIA CSS MATIC https://goo.gl/cIbnS */
    -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);

    .product-image-main {
      margin: auto;
      width: 90%;
      -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
      -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
      box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
      z-index: 81;
      height: 100%;

      @media (min-width: 600px) {
        min-width: 200px;
        width: 50%;
      }
    }
  }

  .product-header-info {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
    @media (min-width: 780px) {
      margin: 0;
    }
    .product-header-title {
      font-size: 1.9rem;
      font-weight: 600;
      text-align: center;
      order: 2;
    }
    .product-header-description {
      order: 3;
    }
    .carousel-container {
      order: 1;
    }
    .padding {
      order: 1;
      padding: 0.5em;
    }
    .price-button-container {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      order: 4;
      margin: auto;
      width: 100%;
      /* border-top: 1px solid var(--purple3); */
      p {
        font-size: 1.8rem;
        font-weight: 100;
        margin: 0;
      }
    }

    @media (min-width: 780px) {
      .product-header-title {
        order: 1;
      }
      .product-header-description {
        order: 2;
        margin-bottom: 0.5em;
      }
      .carousel-container {
        order: 3;
        align-self: flex-start;
      }
      .padding {
        order: 3;
        padding: 1em;
      }
      .price-button-container {
        order: 4;
        /* border: 1px solid red; */
      }
    }
  }
`;
