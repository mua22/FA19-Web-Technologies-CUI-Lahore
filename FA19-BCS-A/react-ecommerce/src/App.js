import React from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import WelcomeBox from "./components/WelcomeBox";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello Naughty Class</h1> */}
      <WelcomeBox>
        <Welcome name="Usman" hobby="coding" />
        <Welcome name="Hareem" hobby="playing" />
        <Welcome name="Nabeel" hobby="facebook" />
      </WelcomeBox>
    </div>
  );
}

export default App;
