import React from "react";

const Logout = props => {
  localStorage.removeItem("token");
  props.history.push("/login");
  return null;
};

export default Logout;
