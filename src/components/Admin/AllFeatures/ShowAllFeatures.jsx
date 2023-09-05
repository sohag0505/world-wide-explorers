import React from "react";
import { Link } from "react-router-dom";

const ShowAllFeatures = ({ allFeature }) => {
  const { _id, name, price, seat, img, sellerName, sellerEmail } = allFeature;
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
        <Link to={`/viewDetailsToy/${_id}`}>
          <button className="btn btn-outline btn-primary">VIEW DETAILS</button>
        </Link>
      </th>
    </tr>
  );
};

export default ShowAllFeatures;
