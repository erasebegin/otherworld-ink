import React from "react";
import { Link } from "gatsby";
import Title from "../globals/Title";
import Img from "gatsby-image";

export default function PortfolioPreview({ data }) {
  const previewData = data.edges.slice(0, 4);

  if (data.edges.length === 0) {
    return <div></div>;
  } else {
    return (
      <section className="portfolio-preview py-5">
        <Title title="portfolio" />
        <div className="container">
          <div className="row">
            {previewData.map(({ node }) => {
              return (
                <div
                  className="portfolio-card mx-auto my-3 mx-3 text-center"
                  key={node.id}
                >
                  <Link to={`/portfolio/${node.slug}`}>
                    <Img fixed={node.image.fixed} />
                  </Link>
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
