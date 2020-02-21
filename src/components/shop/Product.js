import React from "react";

export default function Product({product}) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <img src={product.image.fluid.src} className="card-img-top" />
        <div className="card-body text-center">
          <h6>{product.title}</h6>
          <h6>${product.price} </h6>
          <button
            className="btn btn-purple mt-3 text-capitalize snipcart-add-item"
            data-item-id={product.id}
            data-item-price={product.price}
            data-item-url="https://www.otherworldink.com/shop"
            data-item-image={product.image.fluid.src}
            data-item-name={product.title}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
