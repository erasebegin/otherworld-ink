import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Background from "../components/globals/Background";
import Products from "../components/shop/Products";

import logo1 from "../images/visa_logo.jpg";
import logo2 from "../images/verified_by_visa_logo.jpg";
import logo3 from "../images/mastercard_logo.jpg";
import logo4 from "../images/mastercard_securecode_logo.jpg";
import logo5 from "../images/dpo_paygate_logo.jpg";

export default function Shop({ data }) {

  return (
    <div>
      <Layout>
        <Background
          img={data.img.childImageSharp.fluid}
          title=" "
          styleClass="secondary-background"
        />
        <Products />
        <div className="transaction-logo-container">
          <img src={logo1} />
          <img src={logo2} />
          <img src={logo3} />
          <img src={logo4} />
          <img src={logo5} />
        </div>
        <p className="text-muted text-center">Click here for <Link to="/terms-and-conditions">terms and conditions</Link></p>
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
