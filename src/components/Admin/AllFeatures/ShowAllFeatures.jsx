import React from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const ShowAllFeatures = ({ allFeature, allFeatures, setAllFeatures }) => {
  const { _id, name, price, seat, img, sellerName, sellerEmail } = allFeature;

  const handleDeleteFeature = (_id) => {
    console.log("delete", _id);
    fetch(`https://travelling-project-pi.vercel.app/services/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.data.deletedCount > 0) {
          toast.success("Deleted successfully!");
          console.log(allFeatures);

          const remaining = allFeatures.filter((all) => all._id !== _id);
          setAllFeatures(remaining);
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
        <button className="btn bg-sky-400 hover:bg-sky-600">
          <Link to={`/updateFeature/${_id}`}>Update Feature</Link>
        </button>
        <button
          onClick={() => handleDeleteFeature(allFeature._id)}
          className="btn  btn-secondary ml-4"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default ShowAllFeatures;
