import axios from "axios";

let axiosInstance = (axios.defaults.headers.common[
  "x-auth-token"
] = localStorage.getItem("token"));

export default axiosInstance;
