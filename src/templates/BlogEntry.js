import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { MARKS } from '@contentful/rich-text-types';
import Layout from "../components/layout";
import Title from "../components/globals/Title";
import Pagination from "../components/globals/Pagination";
import SEO from "../components/seo";

export default function BlogEntry({ data }) {
  const {
    createdAt: date,
    title,
    slug,
    body
  } = data.contentfulBlogPost;

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"];
        const url = node.data.target.fields.file["en-US"].url;
        return <img alt={alt} src={url} />;
      }
    },
    renderMark: { [MARKS.CODE]: embedded => <div dangerouslySetInnerHTML={{__html: embedded }} /> }
  };

  return (
    <Layout>
      <SEO title={title} />
      <div className="container">
        <Title title={title} styleClass="display-4 text-capitalize mt-5" />

        <div className="row">
          <div className="col-11 col-sm-8 col-lg-10 mx-auto text-center">
            <div className="mb-4 p-3">
              <p className="lead text-muted text-center">{date}</p>
            </div>
            <div className="text-muted article-body">
              {documentToReactComponents(body.json, options)}
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
      createdAt(formatString: "MMMM Do, YYYY")
      image {
        fixed {
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
      body {
        json
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
