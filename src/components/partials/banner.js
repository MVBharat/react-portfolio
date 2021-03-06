import React from "react";

export default function(props) {
  return (
    <div className="bottom-content-wrapper">
      <a
        href={props.bannerLink}
        className="btn btn__white btn__lg"
        target="_blank"
      >
        {props.name}
      </a>
    </div>
  );
}
