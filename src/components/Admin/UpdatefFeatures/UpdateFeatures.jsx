import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateFeatures = () => {
  const loadedUser = useLoaderData();
  console.log(loadedUser.data[0]);

  const { _id } = loadedUser.data[0];
  console.log(_id);
  const handleUpdateFeature = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const location = form.location.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const seat = form.seat.value;
    const desc = form.desc.value;
    const img = form.img.value;

    const updatedUser = {
      name,
      location,
      price,
      ratings,
      seat,
      desc,
      img,
    };

    fetch(`https://travelling-project-pi.vercel.app/services/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        if (data.modifiedCount > 0) {
          toast.success("Updated Toy successfully!");
        }
      });
  };

  return (
    <form onSubmit={handleUpdateFeature}>
      <div className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <input
              type="text"
              name="name"
              defaultValue={loadedUser?.name}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              defaultValue={loadedUser?.location}
              name="location"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              defaultValue={loadedUser?.price}
              name="price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              defaultValue={loadedUser?.ratings}
              name="ratings"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              defaultValue={loadedUser?.seat}
              name="seat"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              defaultValue={loadedUser?.desc}
              name="desc"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-4">
          <input
            type="text"
            defaultValue={loadedUser?.img}
            name="img"
            className="input input-bordered"
            required
          />
        </div>
      </div>
      <div className="flex justify-center items-center mb-12">
        <button className="btn btn-outline btn-primary">UPDATE FEATURE</button>
      </div>
    </form>
  );
};

export default UpdateFeatures;
