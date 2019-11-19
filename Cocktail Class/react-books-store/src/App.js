import React from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import WelcomeBox from "./components/WelcomeBox";

function App() {
  return (
    <div className="container">
      <WelcomeBox>
        <Welcome name="usman" hobby="Caffine Intake" />
        <Welcome name="Hareem" hobby="Playing" showHobby={true} />
      </WelcomeBox>
    </div>
  );
}

export default App;
