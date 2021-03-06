import React from "react";
import { Link, graphql } from "gatsby";
import Parallax from "react-rellax";

import Layout from "../components/layout";
import BlogPreview from "../components/home/BlogPreview";
import Info from "../components/home/Info";
import PortfolioPreview from "../components/home/PortfolioPreview";
import Contact from "../components/home/Contact";
import SEO from "../components/seo";

import para1 from "../images/para1.png";
import para2 from "../images/para2.png";
import para3 from "../images/para3.png";
import para4 from "../images/para4.png";
import logo from "../images/otherworld-logo.svg";

const IndexPage = ({ data }) => {
  
  return (
    <Layout>
      <SEO title="Home" />
      <div className="parallax-container">
        <Parallax speed={-5} centered={true}>
          <img className="parallax para1" src={para1} alt="part of the parallax graphic"/>
        </Parallax>
        <Parallax speed={-5} centered={true}>
          <img className="parallax para4" src={para4} alt="part of the parallax graphic"/>
        </Parallax>
        <Parallax speed={-3} centered={true}>
          <img className="parallax para3" src={para3} alt="part of the parallax graphic"/>
        </Parallax>
        <Parallax speed={-7} centered={true}>
          <img className="parallax para5" src={logo} alt="part of the parallax graphic"/>
        </Parallax>
        <Parallax speed={3} centered={true}>
          <img className="parallax para2" src={para2} alt="part of the parallax graphic"/>
        </Parallax>
      </div>
      <BlogPreview data={data.blog} />
      <PortfolioPreview data={data.portfolio} />
      <div className="about-btn-container">
        <Link to="/portfolio">
          <button className="btn text-uppercase btn-purple">see more</button>
        </Link>
      </div>
      <Info />
      <div className="about-btn-container">
        <Link to="/about/">
          <button className="btn text-uppercase btn-purple">read more</button>
        </Link>
      </div>
      <Contact />
    </Layout>
  );
};

export const query = graphql`
  {
    img: file(relativePath: { eq: "crow-lord.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    portfolio: allContentfulPortfolioEntry(limit: 1000) {
      edges {
        node {
          id
          slug
          title
          image {
            fixed(height: 200, width: 200) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
    blog: allContentfulBlogPost(limit: 8) {
      edges {
        node {
          id
          slug
          title
          createdAt(formatString: "MMMM Do, YYYY")
          description {
            description
          }
          image {
            fixed(height: 200, width: 200) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
    products: allContentfulProduct(limit: 1000) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;

export default IndexPage;
