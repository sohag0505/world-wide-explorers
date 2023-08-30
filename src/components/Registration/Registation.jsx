import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import "./Registration.css";

const Registation = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { createUser, updateUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");

    if (password.length < 6) {
      setError("password must be 6 characters or longer");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        updateUser({ displayName: name, photoURL: photoUrl })
          .then(() => {
            console.log(loggedUser);
            // toast.success("Registation Successfully!");
            navigate("/");
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <div className="hero  bg-base-200 backImg">
      <div className="hero-content width=[600px]">
        <form onSubmit={handleSubmit}>
          <div className="card w-full max-w-screen-2xl shadow-2xl bg-base-100 backgroundImg">
            <div className="card-body">
              <h2 className="text-3xl font-semibold font-serif text-center">
                Registation
              </h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo-url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-accent"
                  type="submit"
                  value="Registation"
                />
              </div>

              <p>
                Already an acount? Please..
                <Link className="text-red-700 font-bold" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
          {error && <p className="text-danger">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Registation;
