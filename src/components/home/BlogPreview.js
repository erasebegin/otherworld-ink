import React from "react";
import { Link } from "gatsby";
import Title from "../globals/Title";
import Img from "gatsby-image";

export default function BlogPreview({ data }) {
  const previewData = data.edges.slice(0, 4);
  console.log(previewData);

  if (data.edges.length === 0) {
    return <div className="text-muted">Nothing to display</div>;
  } else {
    return (
      <section className="portfolio-preview py-5">
        <Title title="news" />
        <div className="container">
          <div className="row">
            {previewData.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-11 col-md-10 my-3 d-flex mx-auto"
                >
                  <Link to={`/blog/${node.slug}`}>
                    <Img fixed={node.image.fixed} />
                  </Link>
                  {/* item text */}
                  <div className="flex-grow-1 px-3">
                    <div className="justify-content-between">
                      <Link to={`/blog/${node.slug}`}>
                        <h6 className="mb-0">
                          <small>{node.title}</small>
                        </h6>
                      </Link>
                      <p className="mb-0 text-muted">{node.createdAt}</p>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.description}</small>
                    </p>
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
