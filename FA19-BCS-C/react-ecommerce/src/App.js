import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="container">
      <h1>Hello Class</h1>
      <Welcome />
      <Welcome />
      <Welcome />
    </div>
  );
}

export default App;
