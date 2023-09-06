import React from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const ShowAllFeatures = ({ allFeature }) => {
  const {
    _id,
    name,
    price,
    seat,
    img,
    sellerName,
    sellerEmail,
    setAllFeature,
  } = allFeature;

  const handleDeleteFeature = (_id) => {
    console.log("delete", _id);
    fetch(`https://travelling-project-pi.vercel.app/services/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Deleted successfully!");
          const remaining = allFeature.filter(
            (allFeature) => allFeature._id !== _id
          );
          setAllFeature(remaining);
        }
      });
  };

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{sellerName ? sellerName : "Unknown User"}</td>
      <td>{price}</td>
      <td>{seat}</td>
      <th>
        <button className="btn bg-sky-400 mr-6 btn-sm">
          <Link to={`/updateFeature/${_id}`}>Update Feature</Link>
        </button>
        <button
          onClick={() => handleDeleteFeature(allFeature._id)}
          className="btn btn-outline btn-secondary ml-4"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default ShowAllFeatures;
