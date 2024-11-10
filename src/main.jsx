import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import"./index.css";
import router from "./Routes/Route.jsx";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <HelmetProvider>
  <AuthProvider>
    <Toaster />
    <RouterProvider router={router} />
  </AuthProvider>
    </HelmetProvider>
  /* </StrictMode> */
);
