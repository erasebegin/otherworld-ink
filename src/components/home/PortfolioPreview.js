import React, { useState } from "react";
import Title from "../globals/Title";
import Img from "gatsby-image";

export default function PortfolioPreview({ data }) {
    console.log("logging from preview:",data)
    const previewData = data.edges.slice(0,5);

  if (data.edges.length === 0) {
    return <div></div>;
  } else {
    return (
      <section className="portfolio-preview py-5">
        <Title title="portfolio" />
        <div className="row">
          <div className="col-12 mx-auto text-center card-container">
            {previewData.map(({ node }) => {
              return (
                <div
                  className="portfolio-card"
                  key={node.id}
                >
                  <Img fixed={node.image.fixed} className="card-image" />
                  <div className="card-text">
                      <h6 className="mb-0">{node.title}</h6>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
