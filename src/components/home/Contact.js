import React from "react";
import Title from "../globals/Title";
import styled from "styled-components";

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="Contact me" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://formspree.io/mknrpjpl" method="POST">
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Name"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="name">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            {/* message */}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Message"
                className="form-control"
              ></textarea>
            </div>
            {/* submit */}
            <Button
              type="submit"
              className="btn btn-purple btn-block text-capitalize my-5"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

const Button = styled.button`
  max-width: 80%;
  margin: auto;

  @media(min-width: 700px){
    max-width: 50%;
  }
`