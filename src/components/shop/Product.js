import React from "react";
import Img from "gatsby-image";

export default function Product({ title, price, image, key }) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img fluid={image.fluid} className="card-img-top" />
        <div className="card-body text-center">
          <h6>{title}</h6>
          <h6>${price} </h6>
          <button
            className="btn btn-purple mt-3 text-capitalize snipcart-add-item"
            data-item-id={key}
            data-item-price={price}
            data-item-url="https://www.otherworldink.com/shop"
            data-item-image={image.fluid.src}
            data-item-name={title}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
