import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CardDetails = ({ service }) => {
  const { name, location, img, desc, _id, ratings } = service;

  // console.log(service);

  return (
    <div>
      <div className="card w-full h-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} className="object-cover w-full h-60" alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center items-center">
            <h2 className="card-title mr-12">{name}</h2>
            <FaMapMarkerAlt />
            <p> {location}</p>
          </div>
          <p>{desc}</p>
          <div className="flex justify-center items-center">
            <button className="btn bg-sky-400 hover:bg-sky-600 mr-6 btn-sm">
              <Link to={`/service/${_id}`}>More Details</Link>
            </button>

            <Rating style={{ maxWidth: 180 }} value={ratings} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
