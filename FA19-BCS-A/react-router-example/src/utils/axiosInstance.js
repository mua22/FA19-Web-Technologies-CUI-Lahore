import axios from "axios";

let axiosInstance = axios;
axiosInstance.defaults.headers.common["x-auth-token"] = localStorage.getItem(
  "token"
);

export default axiosInstance;
