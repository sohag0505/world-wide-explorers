import { useLoaderData } from "react-router-dom";

const MoreCardDetails = () => {
  const service = useLoaderData();

  const { name, location, desc, img, seat } = service.data[0];
  return (
    <div>
      <div className="grid grid-cols-2 gap-20 my-12">
        <div>
          <img
            src={img}
            alt=""
            className="avater rounded-md w-full object-cover h-96"
          />
        </div>
        <div className="">
          <h2 className="text-5xl font-semibold font-serif ">{name}</h2>
          <h4 className="text-xl font-serif my-5">Location: {location}</h4>
          <p className="mb-2">{desc}</p>
          <hr />
          <hr />
          <p className="text-2xl font-semibold text-sky-950 mt-5">
            Avaiable Seats: {seat}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoreCardDetails;
