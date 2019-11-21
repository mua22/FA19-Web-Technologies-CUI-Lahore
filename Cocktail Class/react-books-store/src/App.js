import React from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import WelcomeBox from "./components/WelcomeBox";

import BookList from "./components/BookList";

function App() {
  return (
    <div className="container">
      <BookList />
      <WelcomeBox>
        <Welcome name="usman" hobby="Caffine Intake" />
        <Welcome name="Hareem" hobby="Playing" showHobby={true} />
      </WelcomeBox>
    </div>
  );
}

export default App;
