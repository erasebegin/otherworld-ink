import React from "react";
import { Link } from "gatsby";
import Title from "../globals/Title"

export default function about() {
  return (
    <section className="py-4">
      <div className="container">
        <Title title="My Story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted">
              Freelance illustrator and comic artist. I’ve worked on projects
              whilst abroad in China for two and a half years, working on cover
              art for up and coming electronic bands based in Hangzhou. In this
              time I’ve also been working on my comic book/illustrated novel
              project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
