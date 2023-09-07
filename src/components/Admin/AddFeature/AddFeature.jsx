import { toast } from "react-hot-toast";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const AddFeature = () => {
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const location = form.location.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const seat = form.seat.value;
    const desc = form.desc.value;
    const img = form.img.value;

    const sellerInfo = {
      name,
      location,
      price,
      ratings,
      seat,
      desc,
      img,
      //   sellerName: user.displayName,
      //   email: user.email,
    };

    // console.log(sellerInfo);

    fetch("https://travelling-project-pi.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sellerInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);

        toast.success("Added successfully!");
      });
  };
  return (
    <div>
      <h2 className="text-3xl font-bold ml-8 mt-16 mb-6 font-serif">
        Add <span className="text-sky-500 animate-pulse">Services</span>
      </h2>

      <form onSubmit={handleAddService}>
        <div className="card-body">
          <Tabs>
            <TabList>
              <Tab>Genarel</Tab>
              <Tab>Food</Tab>
              <Tab>Hotel</Tab>
            </TabList>

            {/* Genarel */}
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div className="form-control">
                  <input
                    type="text"
                    name="name"
                    placeholder="place"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="location"
                    name="location"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Price"
                    name="price"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Rating"
                    name="ratings"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Available seat"
                    name="seat"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Details"
                    name="desc"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-4">
                <input
                  type="text"
                  placeholder="Photo Url"
                  name="img"
                  className="input input-bordered"
                  required
                />
              </div>
            </TabPanel>
            {/* Fish */}
            <TabPanel></TabPanel>
            {/* Bird */}
            <TabPanel></TabPanel>
          </Tabs>
        </div>
        <div className="flex justify-center items-center mb-12">
          <button className="btn bg-sky-400 hover:bg-sky-600">
            ADD service
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFeature;
