import React from "react";
import { Link } from "react-router-dom";

const ShowSearchDetails = ({ data }) => {
  const { name, location, img, _id } = data;
  return (
    <div>
      <h2>{name}</h2>
      <p>{location}</p>
      <img src={img} alt="" />

      <Link to={`/service/${_id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
};

export default ShowSearchDetails;
