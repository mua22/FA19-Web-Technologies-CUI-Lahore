import React from "react";
import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="container">
      <Welcome name="Usman" age={50} />
      <Welcome name="Ali" age={10} />
      <Welcome name="Hareem" age={2} />
    </div>
  );
}

export default App;
