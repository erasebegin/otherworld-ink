import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Navbar from "./globals/Navbar";
import Footer from "./globals/Footer";

import "./layout.css";
import "./bootstrap.min.css";

const Layout = ({ children }) => (
  <Container>
    <Navbar />
    {children}
    <div className="push"></div>
    <Footer />
  </Container>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const Container = styled.div`
  /* min-height: 100vh;
  background: white; */
`