import React from "react";
import axios from "axios";
const Login = props => {
  const [email, setEmail] = React.useState("usman@usman.com");
  const [password, setPassword] = React.useState("123456789");
  return (
    <div>
      Email:{" "}
      <input
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />{" "}
      <br />
      Password:{" "}
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />{" "}
      <br />
      <button
        onClick={e => {
          axios
            .post("http://localhost:4000/api/users/login", { email, password })
            .then(res => {
              console.log(res.data);
              localStorage.setItem("token", res.data);
              props.history.push("/products/new");
            });
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
