import { FaXing } from "react-icons/fa";

const TravelExperience = () => {
  return (
    <div className="grid grid-cols-2 gap-10 mb-4">
      <div>
        <div className="flex items-center mb-2">
          <FaXing className="text-4xl text-sky-700" />
          <h2 className="text-sm NormalCharacterStyle text-white bg-sky-500 rounded-md p-1">
            World Wide Explorers
          </h2>
        </div>
        <h2 className="text-5xl font-serif ">
          With our all experience <br /> to{" "}
          <span className="text-sky-500 animate-pulse">we will serve you</span>
        </h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          repellat exercitationem similique reiciendis adipisci enim ducimus
          officiis culpa incidunt praesentium eos laborum aliquam nulla
          repudiandae! Ex delectus consectetur quae unde.
        </p>
        <div className="stats shadow mt-12">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current text-sky-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Successful trip</div>
            <div className="stat-value">12K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current text-sky-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Regular clients</div>
            <div className="stat-value">2K</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current text-sky-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Years experiences</div>
            <div className="stat-value">9k</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
      <div>
        <img
          className="avter rounded-lg"
          src="https://www.happierhuman.com/wp-content/uploads/2022/05/travel-affirmations-amazing-journey.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default TravelExperience;
