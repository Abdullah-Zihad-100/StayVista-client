import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";
import PrivetRoute from "./PrivetRoute";
import { singleRooms } from "../Apis/Room";
import DashboardLayout from "../Layout/DashboardLayout";
import AddRoom from "../Pages/Dashboard/AddRoom";
import MyListing from "../Components/Dashboard/MyListing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/room/:id",
        loader: ({ params }) => singleRooms(params?.id),
        element: (
          <PrivetRoute>
            <RoomDetails />
          </PrivetRoute>
        ),
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <DashboardLayout />
      </PrivetRoute>
    ),
    children: [
      {
        path: "add-room",
        element: (
          <PrivetRoute>
            <AddRoom />
          </PrivetRoute>
        ),
      },
      {
        path: "my-listing",
        element: (
          <PrivetRoute>
         <MyListing/>
          </PrivetRoute>
        ),
      },
    ],
  },

  // for login sigUp
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);

export default router;
