import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import NavBar from "../shared/Navber/Navber";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Main;
