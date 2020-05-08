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
      <section className="portfolio-preview">
        <Link to="/portfolio" className="gatsby-link">
          <Title title="portfolio" />
        </Link>
        <div className="container">
          <div className="row">
            {previewData.map(({ node }) => {
              return (
                <div
                  className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3"
                  key={node.id}
                >
                  <div className="card">
                    <Link to={`/portfolio/${node.slug}`}>
                      <Img fixed={node.image.fixed} className="card-img-top" />
                    </Link>
                    <div className="card-body text-center">
                      <h6 className="mb-0">{node.title}</h6>
                    </div>
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
