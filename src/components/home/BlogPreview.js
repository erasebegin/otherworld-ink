import React from "react";
import { Link } from "gatsby";
import Title from "../globals/Title";
import Img from "gatsby-image";

export default function BlogPreview({ data }) {
  const previewData = data.edges.slice(0, 4);

  if (data.edges.length === 0) {
    return <div className="muted">Nothing to display</div>;
  } else {
    return (
      <section className="portfolio-preview py-5">
        <Title title="news" />
        <div className="container">
          <div className="row">
            {previewData.map(({ node }) => {
              return (
                <div
                  className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3"
                  key={node.id}
                >
                  <div className="card">
                    <Link to={`/blog/${node.slug}`} >
                      <Img fixed={node.image.fixed} className="card-img-top"/>
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
