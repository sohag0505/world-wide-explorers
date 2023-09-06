import { useLoaderData } from "react-router-dom";

const MoreCardDetails = () => {
  const service = useLoaderData();

  const { name, location, desc } = service.data[0];
  return (
    <div>
      <h2>{name}</h2>
      <p>{location}</p>
      <p>{desc}</p>
    </div>
  );
};

export default MoreCardDetails;
