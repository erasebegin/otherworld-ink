import React from "react";
import { Link } from "gatsby";

export default function Pagination({ data, current }) {
  const slugArr = data.map(i => i.node.slug);
  const indexCurrent = slugArr.indexOf(current);
  const prev = slugArr[indexCurrent - 1];
  const next = slugArr[indexCurrent + 1];

  return (
    <div className="pagination-btn-container">
      {indexCurrent > 0 ? (
        <Link to={`/portfolio/${prev}`}>
          <button className="btn btn-purple uppercase">Previous</button>
        </Link>
      ) : (
        ""
      )}
      {indexCurrent < slugArr.length ? (
        <Link to={`/portfolio/${next}`}>
          <button className="btn btn-purple uppercase">Next</button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}

export function NextPost(props) {
  const slugArr = props.data.map(i => i.node.slug);
  const indexCurrent = slugArr.indexOf(props.current);
  const next = slugArr[indexCurrent + 1];
  const firstPost = slugArr[0];

  console.log("current index: ", indexCurrent);
  console.log("current slug: ", slugArr[indexCurrent]);
  console.log("last slug: ", slugArr[slugArr.length - 1]);
  console.log("firstPost:", firstPost);

  if (slugArr[indexCurrent] === slugArr[slugArr.length - 1]) {
    return <Link to={`/portfolio/${firstPost}`}>{props.children}</Link>;
  } else {
    return <Link to={`/portfolio/${next}`}>{props.children}</Link>;
  }
}
