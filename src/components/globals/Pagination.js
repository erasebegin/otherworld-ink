import React from "react";
import { Link } from "gatsby";

export default function Pagination({ data, current, type }) {
  const slugArr = data.map(i => i.node.slug);
  const indexCurrent = slugArr.indexOf(current);
  const prev = slugArr[indexCurrent - 1];
  const next = slugArr[indexCurrent + 1];

  return (
    <div className="pagination-btn-container">
      {indexCurrent > 0 ? (
        <Link to={`/${type}/${prev}`}>
          <button className="btn btn-purple uppercase">Previous</button>
        </Link>
      ) : (
        ""
      )}
      <Link to={`/${type}`}>
        <button className="btn btn-purple uppercase">Return to {type}</button>
      </Link>
      {indexCurrent < slugArr.length ? (
        <Link to={`/${type}/${next}`}>
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

  if (slugArr[indexCurrent] === slugArr[slugArr.length - 1]) {
    return <Link to={`/${props.type}/${firstPost}`}>{props.children}</Link>;
  } else {
    return <Link to={`/${props.type}/${next}`}>{props.children}</Link>;
  }
}
