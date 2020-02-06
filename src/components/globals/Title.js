import React from "react";

export default function Title({ title, styleClass }) {
  return (
    <div className="row">
        <div className="col text-center mb-3">
        <h1 className={styleClass}>{title}</h1>
        </div>
      
    </div>
  );
}

Title.defaultProps = {
  title: "default title",
  styleClass: "display-4 text-capitalize"
};