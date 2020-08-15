import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Background from "../components/globals/Background";
import Products from "../components/shop/Products";

export default function Shop({ data }) {

  console.log(data)

  return (
    <div>
      <Layout>
        <Background
          img={data.img.childImageSharp.fluid}
          title=" "
          styleClass="secondary-background"
        />
        <Products productList={data.products}/>
      </Layout>
    </div>
  );
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "techno-hunter.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
