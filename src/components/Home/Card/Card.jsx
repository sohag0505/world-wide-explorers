import { useEffect, useState } from "react";
import CardDetails from "../CardDetails/CardDetails";

const Card = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://travelling-project-pi.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data.data));
  }, []);
  return (
    <div className="mt-24">
      <h2 className="md:text-4xl text-3xl ml-1 font-semibold font-serif mb-12">
        Our <span className="text-sky-500 animate-pulse">Featured Tours</span>
      </h2>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
        {services.map((service) => (
          <CardDetails key={service._id} service={service}></CardDetails>
        ))}
      </div>
    </div>
  );
};

export default Card;
