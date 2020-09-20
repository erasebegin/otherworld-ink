import React, { useState, useEffect } from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/react";
import styled from "styled-components";

import Layout from "../components/layout";
import Background from "../components/globals/Background";
import Title from "../components/globals/Title";
import SEO from "../components/seo";

const AboutPage = ({ data }) => {
  const { title, body, image } = data.aboutInfo.edges[0].node;

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

  const largeImage = images.about.fluid;
  const smallImage = images.aboutSmall ? images.aboutSmall.fluid : null;

  return (
    <Layout>
      <SEO title="About" />
      <Background
          img={isMobile && smallImage ? smallImage : largeImage}
          title=" "
          styleClass="secondary-background"
        />
      <Container>
        {title ? <Title title={title} /> : <></>}
  
        <Img fluid={image.fluid} className="main-image"/>
  
        {body ? (
          <MDXProvider>
            <article className="text-muted text-left">
              <MDXRenderer>{body.childMdx.body}</MDXRenderer>
            </article>
          </MDXProvider>
        ) : (
          <article>&nbsp;</article>
        )}
        <div className="about-btn-container">
          <Link to="/contact">
            <button className="btn text-uppercase btn-purple">contact me</button>
          </Link>
        </div>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  max-width: 700px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  .main-image {
    width: 100%;
    max-width: 500px;
  }

  article {
    margin: 2em 0;
  }
`

export const query = graphql`
  {
    headerImage: allContentfulHeaderImages(sort: { fields: createdAt }) {
      edges {
        node {
          about {
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
    aboutInfo: allContentfulAboutPage(sort: { fields: updatedAt }) {
      edges {
        node {
          body {
            childMdx {
              body
            }
          }
          image {
            fluid(cropFocus: CENTER, resizingBehavior: FILL, maxWidth: 500) {
              ...GatsbyContentfulFluid
            }
          }
          title
        }
      }
    }
  }
`;

export default AboutPage;
