import { useState } from "react";
import { FaXing } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getSearchName } from "../../SearchResult/SearchResult";
import "./TopSection.css";
const TopSection = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleButtonClick = () => {
    getSearchName(inputValue);
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:mt-16 mt-8 p-2 mb-5">
      <div>
        <div className="flex items-center mb-2">
          <FaXing className="md:text-4xl text-3xl text-sky-700" />
          <h2 className="text-sm md:NormalCharacterStyle text-white bg-sky-500 rounded-md p-1">
            World Wide Explorers
          </h2>
        </div>
        <h2 className="md:text-5xl text-2xl font-serif  ">
          Trevellings opens the door <br /> to{" "}
          <span className="text-sky-500 animate-pulse">creating memories</span>
        </h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          repellat exercitationem similique reiciendis adipisci enim ducimus
          officiis culpa incidunt praesentium eos laborum aliquam nulla
          repudiandae! Ex delectus consectetur quae unde.
        </p>
        <div className="mt-8">
          <p className="mb-2 font-serif font-semibold">Where are you going?</p>
          <input
            type="text"
            placeholder="location"
            className="input input-bordered w-full max-w-xs"
            onChange={handleInputChange}
          />

          <Link to="/searchResult">
            {" "}
            <button
              className="btn bg-sky-400 hover:bg-sky-600 mt-2 md:ml-2"
              onClick={handleButtonClick}
            >
              Search
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="mt-20">
          <img
            className="avatar rounded-xl  animate-custom-bounce"
            src="https://adarbepari.com/wp-content/uploads/2016/07/golden-temple-bandarban-03.jpg"
            alt=""
          />
        </div>
        <div className="mt-10">
          <img
            className="avatar rounded-xl animate-custom-bounce"
            src="https://c0.wallpaperflare.com/preview/552/184/880/travel-road-country-western.jpg"
            alt=""
            width={200}
            height={250}
          />
        </div>
        <div className="">
          <img
            className="avatar rounded-xl animate-custom-bounce"
            src="https://media.istockphoto.com/id/1047690726/photo/colourful-fishing-boat-anchor-at-teknaf-beach-shore-coxs-bazar.webp?b=1&s=170667a&w=0&k=20&c=e0-tgOgAtj-Be4EsQpXb6gI-flJk6OwDDBWRL-hiS4E="
            alt=""
            width={200}
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
