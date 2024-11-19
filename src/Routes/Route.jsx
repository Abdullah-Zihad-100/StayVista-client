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
import MyBookings from "../Components/Dashboard/MyBookings";
import HostRoute from "./HostRoute";
import AdminRoute from "./AdminRoute";
import ManageUsers from "../Components/Dashboard/ManageUsers";
import Profile from "../Components/Dashboard/Profile";
import ManageBookings from "../Components/Dashboard/ManageBookings";
import AdminStatistics from "../Components/Statistics/AdminStatistics";
import HostStatistics from "../Components/Statistics/HostStatistics";
import GuestStatistics from "../Components/Statistics/GuestStatistics";
import useRole from "../Hooks/useRole";
// import Statistics from "../Components/Statistics/Statistics";

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
      { index: true,
         element: <RoleBasedStatistics /> },

      // statictisc ---------->
      {
        path: "profile",
        element: (
          <PrivetRoute>
            <Profile />
          </PrivetRoute>
        ),
      },

      // admin menus ------------>
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <AdminRoute>
            <AdminStatistics />
          </AdminRoute>
        ),
      },

      // host menus-------->

      {
        path: "statistics",
        element: (
          <HostRoute>
            <HostStatistics />
          </HostRoute>
        ),
      },

      {
        path: "add-room",
        element: (
          <HostRoute>
            <AddRoom />
          </HostRoute>
        ),
      },
      {
        path: "manage-bookings",
        element: (
          <HostRoute>
            <ManageBookings />
          </HostRoute>
        ),
      },
      {
        path: "my-listing",
        element: (
          <HostRoute>
            <MyListing />
          </HostRoute>
        ),
      },
      // Guest menus-------->
      {
        path: "my-bookings",
        element: (
          <PrivetRoute>
            <MyBookings />
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



 function RoleBasedStatistics(){
  const [role]=useRole();

  if(role ==="admin"){
return <AdminStatistics/>
  }
  else if (role === "host") {
     return <HostStatistics />;
   }
     return <GuestStatistics />;
}

export default router;
