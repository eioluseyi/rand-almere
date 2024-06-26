import { showToast } from "@Component/Toastify";
import { appConfig } from "@Config/index";
import axios from "axios";

const axiosClientV2 = axios.create({
  baseURL: `${appConfig.BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});
axiosClientV2.interceptors.request.use(
  (config) => {
    // const token = getToken();
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClientV2.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (
      error.response?.status === 403 &&
      (error.message.includes("authentication") ||
        error.message.includes("authorization"))
    ) {
      showToast.error("Your session has expired");
      return window.location.reload();
    }
    // Reject promise if usual error
    if (error?.message === "Network Error") {
      showToast.error("Network Error");
      return Promise.reject(error?.message);
    }

    return Promise.reject(error);
  }
);

export default axiosClientV2;
