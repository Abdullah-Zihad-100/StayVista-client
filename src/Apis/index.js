import axios from "axios";
import { clearCookies } from "./auth";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
  withCredentials: true,
});

// interseptor rsponse and check for unauthorized rsponsed

axiosSecure.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log("Error Trecked In  The Intersepotor", error.response);
    if (
      (error.response && error.response.status === 401) ||
      error.response.status === 403
    ) {
      await clearCookies();
      window.location.replace("/login");
    }
    return Promise.reject(error);
  }
);
export default axiosSecure;
