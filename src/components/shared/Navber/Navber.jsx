import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/travel-logo.png";
import { AuthContext } from "../../providers/AuthProvider";
import "./Navber.css";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/addFeature">Add Feature</Link>
      </li>
      <li>
        <Link to="/allFeature">All Features</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-sky-100 rounded-md">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="normal-case text-xl flex justify-center items-center">
            <div>
              <img src={logo} height={40} width={60} alt="" />
            </div>
            <div>
              <h2 className="text-lg NormalCharacterStyle 	NormalCharacterStyle1">
                World Wide Explorers
              </h2>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {!user && (
            <div>
              <Link className="mr-4 hover:bg-slate-200 rounded p-2" to="/login">
                Login
              </Link>
              <Link
                className="hover:bg-slate-200 rounded p-2"
                to="/registration"
              >
                Registration
              </Link>
            </div>
          )}
        </div>
        {user && (
          <div>
            <img
              className="avatar rounded-full"
              src={user?.photoURL}
              title={user?.displayName}
              width={35}
              height={35}
              alt=""
            />
            <button
              onClick={logOut}
              className=" mr-12 hover:bg-slate-200 rounded p-2"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
