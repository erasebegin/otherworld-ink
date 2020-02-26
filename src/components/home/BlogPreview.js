import React from "react";
import { Link } from "gatsby";
import Title from "../globals/Title";
import Img from "gatsby-image";

export default function BlogPreview({ data }) {
  const previewData = data.edges.slice(0, 4);

  if (data.edges.length === 0) {
    return <div className="text-muted">Nothing to display</div>;
  } else {
    return (
      <section className="portfolio-preview py-5">
        <Link to="/blog" className="gatsby-link">
          <Title title="news" />
        </Link>
        <div className="container">
          <div className="row">
            {previewData.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-11 col-md-10 my-3 d-flex mx-auto card"
                >
                  <div className="row no-gutters">
                    <div className="col-md-4 col-sm-6 card-img">
                      <Link to={`/blog/${node.slug}`}>
                        <Img fixed={node.image.fixed} />
                      </Link>
                    </div>
                    {/* card text */}
                    <div className="col-md-8 col-sm-6">
                      <div className="card-body">
                        <Link
                          to={`/blog/${node.slug}`}
                          className="card-title news-card-title gatsby-link"
                        >
                          <h4 className="mb-0">{node.title}</h4>
                        </Link>
                        <div className="card-text">
                          <p className="mb-0 text-muted">{node.createdAt}</p>

                          <p className="text-muted">
                            {node.description.description}
                          </p>
                        </div>
                      </div>
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
