import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

import Title from "../components/globals/Title";
import Layout from "../components/layout";
import Background from "../components/globals/Background";
import SEO from "../components/seo";

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Background
        img={data.img.childImageSharp.fluid}
        title=" "
        styleClass="secondary-background"
      />
      <section className="portfolio-preview py-5">
        <div className="container">
          <Title title="news" />
          <div className="row">
            {data.blog.edges.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-11 col-md-10 my-3 d-flex mx-auto"
                >
                  <div className="card-img-left">
                    <Link to={`/blog/${node.slug}`}>
                      <Img fixed={node.image.fixed}/>
                    </Link>
                  </div>
                  {/* item text */}
                  <div className="flex-grow-1 px-3 my-0">
                    <div className="justify-content-between">
                      <div className="card-body">
                        <Link to={`/blog/${node.slug}`}>
                          <h6 className="mb-0 card-title">
                            <small>{node.title}</small>
                          </h6>
                        </Link>
                        <p className="mb-0 text-muted">{node.createdAt}</p>
                        <p className="text-muted">
                          <small>{node.description.description}</small>
                        </p>
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
    img: file(relativePath: { eq: "tao-gas-master.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
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
