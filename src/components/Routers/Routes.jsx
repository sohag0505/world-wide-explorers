import { createBrowserRouter } from "react-router-dom";
import AddFeature from "../Admin/AddFeature/AddFeature";
import AllFeatures from "../Admin/AllFeatures/AllFeatures";
import Home from "../Home/Home/Home";
import MoreCardDetails from "../Home/MoreCardDetails/MoreCardDetails";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Registation from "../Registration/Registation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addFeature",
        element: <AddFeature></AddFeature>,
      },
      {
        path: "/allFeature",
        element: <AllFeatures></AllFeatures>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registation></Registation>,
      },
      {
        path: "/service/:serviceId",
        element: <MoreCardDetails></MoreCardDetails>,
        loader: ({ params }) =>
          fetch(
            `https://travelling-project-pi.vercel.app/services/${params.serviceId}`
          ),
      },
    ],
  },
]);

export default router;
