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
            {data.portfolio.edges.map(({ node }) => {
              return (
                <div
                  className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3"
                  key={node.id}
                >
                  <div
                    className="card card-cascade narrower"
                    style={{ minHeight: "100%" }}
                  >
                    <Link to={`/blog/${node.slug}`}>
                      <Img fixed={node.image.fixed} className="card-img-top" />
                    </Link>
                    <div className="view view-cascade gradient-card-header purple-gradient">
                      <h6 className="card-header-title">{node.title}</h6>
                    </div>
                    <div className="card-body text-center"></div>
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
    portfolio: allContentfulBlogPost(limit: 1000) {
      edges {
        node {
          id
          title
          slug
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
