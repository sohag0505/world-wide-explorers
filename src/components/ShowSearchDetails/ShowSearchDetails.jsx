import { Rating } from "@smastrom/react-rating";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ShowSearchDetails = ({ data }) => {
  const navigation = useNavigate();
  const handleBack = () => {
    navigation(-1);
  };

  const { name, location, img, _id, message, desc, ratings } = data;
  return (
    <div className="">
      <h2 className="text-4xl mb-4">{message}</h2>
      {message ? (
        <button
          className="btn bg-rose-400 hover:bg-rose-600 mr-6 btn-sm mt-2 mb-12"
          onClick={handleBack}
        >
          Back to home
        </button>
      ) : (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4  shadow-xl rounded-lg md:mb-12 md:p-0 p-2">
          <div>
            <img
              src={img}
              alt="img"
              className="object-cover w-full h-64 avter rounded-md"
            />
          </div>
          <div className="mt-2">
            <h2 className="text-2xl font-serif font-semibold">{name}</h2>
            <p className="text-lg font-serif my-3">Location: {location}</p>
            <p>{desc}</p>
            <div className="flex items-center gap-7 my-2">
              <p className="text-xl">Ratings: {ratings}</p>
              <Rating style={{ maxWidth: 160 }} value={ratings} readOnly />
            </div>
            <div className="">
              <Link to={`/service/${_id}`}>
                <button className="btn bg-sky-400 hover:bg-sky-600 mr-6 btn-sm mt-2">
                  More Details
                </button>
              </Link>
              <button
                onClick={handleBack}
                className="btn bg-slate-400 hover:bg-slate-600 mr-6 btn-sm mt-2 md:mb-0 mb-4"
              >
                Back To Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowSearchDetails;
