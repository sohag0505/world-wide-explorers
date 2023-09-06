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
      <h2 className="text-3xl font-bold  mt-16 mb-6 font-serif">
        All <span className="text-sky-500 animate-pulse">Services</span>
      </h2>
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
                allFeatures={allFeatures}
                setAllFeatures={setAllFeatures}
              ></ShowAllFeatures>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllFeatures;
