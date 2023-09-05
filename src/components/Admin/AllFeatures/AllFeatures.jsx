import { useEffect, useState } from "react";
import ShowAllFeatures from "./ShowAllFeatures";

const AllFeatures = () => {
  const [allFeatures, setAllFeatures] = useState([]);

  useEffect(() => {
    fetch("https://travelling-project-pi.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setAllFeatures(data.data);

        console.log(data.data);
      });
  }, []);

  return (
    <div className="mt-16 mb-16">
      <h2 className="font-bold text-center text-3xl mb-14">ALL Features</h2>

      <div className="form-control mb-4">
        <div className="input-group">
          <button className="btn bt-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>PHOTO</th>
              <th>TOY NAME</th>
              <th>SELLER NAME</th>
              <th>PRICE</th>
              <th>AVIAILABLE SEAT</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {allFeatures.map((allFeature) => (
              <ShowAllFeatures
                key={allFeature._id}
                allFeature={allFeature}
              ></ShowAllFeatures>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllFeatures;
