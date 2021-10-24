import React from "react";
import { Link } from "react-router-dom";

export default function ImageComponent(props) {
  return (
    <div>
      <Link to={{ pathname: props.data.id, url: { ...props.data.urls } }}>
        <img src={props.data.urls.thumb} alt={props.data.alt_description} />
      </Link>
      <a href={props.data.links.download_location} download>
        <button>download</button>
      </a>
    </div>
  );
}
