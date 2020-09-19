import React, { useState, useEffect } from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

import Title from "../components/globals/Title";
import Layout from "../components/layout";
import Background from "../components/globals/Background";
import SEO from "../components/seo";

const BlogPage = ({ data }) => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    window.innerWidth <= 800 ? setIsMobile(true) : setIsMobile(false);
  });

  if (typeof window === "undefined") {
    global.window = {};
  }

  window.onresize = function() {
    window.innerWidth <= 800 ? setIsMobile(true) : setIsMobile(false);
  };

  const images = data.headerImage.edges[0].node;

  const largeImage = images.news.fluid;
  const smallImage = images.newsSmall ? images.newsSmall.fluid : null;
  return (
    <Layout>
      <SEO title="Blog" />
      <Background
        img={isMobile && smallImage ? smallImage : largeImage}
        title=" "
        styleClass="secondary-background"
      />
      <section className="portfolio-preview py-5">
        <div className="container">
          <Title title="news" />
          <div className="row">
            {data.blog.edges.map(({ node }) => {
              return (
                <div key={node.id} className="col-11 my-3 d-flex mx-auto card">
                  <div className="row no-gutters">
                    <div className="col-md-4 col-sm-3 card-img img-responsive">
                      <Link to={`/blog/${node.slug}`}>
                        <Img fixed={node.image.fixed} />
                      </Link>
                    </div>
                    {/* card text */}
                    <div className="col-md-8 col-sm-9 flex-grow-1">
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
    </Layout>
  );
};

export const query = graphql`
  {
    headerImage: allContentfulHeaderImages(sort: { fields: createdAt }) {
      edges {
        node {
          news {
            fluid(cropFocus: CENTER, resizingBehavior: FILL) {
              ...GatsbyContentfulFluid
            }
          }
           aboutSmall {
             fluid(cropFocus: CENTER, resizingBehavior: FILL) {
               ...GatsbyContentfulFluid
             }
           }
        }
      }
    }
    blog: allContentfulBlogPost(limit: 1000) {
      edges {
        node {
          id
          title
          slug
          createdAt(formatString: "MMMM Do, YYYY")
          description {
            description
          }
          image {
            fixed(height: 220, width: 345) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default BlogPage;
