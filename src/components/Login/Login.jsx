import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import "./Login.css";

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError("");
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        // form.reset();
        // toast.success("Login Successfully !");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  const handleGoogleLogin = () => {
    setError("");
    console.log("i am here");
    googleLogin()
      .then((result) => {
        console.log(result);
        // toast.success("Login Successfully!");
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        console.log(error.message);
        setError(errorMessage);
      });
  };
  return (
    <div className="hero  bg-base-200 backImg">
      <div className="hero-content">
        <form onSubmit={handleSubmit}>
          <div className="card w-full max-w-sm shadow-2xl bg-base-100 backgroundImg">
            <div className="card-body">
              <h2 className="text-3xl font-semibold font-serif text-center">
                Login
              </h2>
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
              <div className="form-control mt-6">
                <input className="btn btn-accent" type="submit" value="Login" />
              </div>
              <button onClick={handleGoogleLogin} className="btn">
                Sign-with-google
              </button>
              <p>
                New user? Please..
                <Link className="text-red-700 font-bold" to="/registration">
                  Registation
                </Link>
              </p>
            </div>
          </div>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
