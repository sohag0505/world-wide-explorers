import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden"></label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="normal-case text-xl flex justify-center items-center">
            <div>
              <img
                src="https://e7.pngegg.com/pngimages/893/122/png-clipart-travel-agent-trip-planner-logo-travel-text-backpack-thumbnail.png"
                height={40}
                width={60}
                alt=""
              />
            </div>
            <div>
              <h2 className="text-lg font-serif text-sky-500  font-semibold">
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
