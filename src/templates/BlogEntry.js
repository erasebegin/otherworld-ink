import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import Title from "../components/globals/Title";
import Pagination from "../components/globals/Pagination";
import SEO from "../components/seo";

export default function BlogEntry({ data }) {
  const { createdAt: date, id, image, title, slug } = data.contentfulBlogPost;

  return (
    <Layout>
      <SEO title={title} />
      <div className="container">
        <Title title={title} styleClass="display-4 text-capitalize mt-4" />
        <Img fixed={image.fixed}/>
        <div className="row">
          <div className="col-11 col-sm-8 col-lg-6 mx-auto text-center">
            <div className="my-5 p-3">
              <p className="lead text-muted text-center">"some description"</p>
            </div>
          </div>
        </div>
        <Pagination current={slug} data={data.allPosts.edges} type="blog" />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      image {
        fixed {
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
    }

    allPosts: allContentfulBlogPost {
      edges {
        next {
          slug
        }
        previous {
          slug
        }
        node {
          slug
        }
      }
    }
  }
`;
