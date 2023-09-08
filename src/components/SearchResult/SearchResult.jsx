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
    <div className="mt-24">
      <h2 className="md:text-4xl text-3xl ml-1 font-semibold font-serif mb-12">
        Our <span className="text-sky-500 animate-pulse">Featured Tours</span>
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        {datas.map((data) => (
          <ShowSearchDetails key={data._id} data={data}></ShowSearchDetails>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
export { getSearchName };
