import React from "react";
import "./TopSection.css";

const TopSection = () => {
  return (
    <div className="grid grid-cols-2 gap-10 mt-16 mb-5">
      <div>
        <h2 className="text-5xl font-serif mt-16 ">
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
          />
          <button className="btn bg-sky-400 hover:bg-sky-600 ml-2">
            Search
          </button>
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
