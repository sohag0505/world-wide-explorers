import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const CardDetails = ({ service }) => {
  const { name, location, img, desc, _id } = service;
  // console.log(service);
  const ratingChanged = () => {};
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center items-center">
            <h2 className="card-title mr-12">{name}</h2>
            <FaMapMarkerAlt />
            <p> {location}</p>
          </div>
          <p>{desc}</p>
          <div className="flex justify-center items-center">
            <button className="btn bg-sky-400 mr-6 btn-sm">
              <Link to={`/service/${_id}`}>Buy Now</Link>
            </button>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={30}
              activeColor="#ffd700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
