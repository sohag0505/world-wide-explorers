import React, { useEffect, useState } from "react";
import ShowSearchDetails from "../ShowSearchDetails/ShowSearchDetails";

let searchName;
const getSearchName = (value) => {
  searchName = value;
};
const SearchResult = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch(
      `https://travelling-project-pi.vercel.app/services/searchLocation/${searchName}`
    )
      .then((res) => res.json())
      .then((data) => setDatas(data.data));
  }, []);

  return (
    <div>
      {datas.map((data) => (
        <ShowSearchDetails key={data._id} data={data}></ShowSearchDetails>
      ))}
    </div>
  );
};

export default SearchResult;
export { getSearchName };
